import React, { useRef, useState, useEffect } from 'react'
import { throttle } from 'lodash'
import { TocDiv, TocLink, TocIcon, Title, Toggle } from './toc-styles'
import ReactResizeDetector from 'react-resize-detector'

// Used to calculate each heading's offset from the top of the page.
// This will be compared to window.scrollY to determine which heading
// is currently active.
// Credits to https://janosh.dev/blog/sticky-active-smooth-responsive-toc
const accumulateOffsetTop = (el, totalOffset = 0) => {
  while (el) {
    totalOffset += el.offsetTop - el.scrollTop + el.clientTop
    el = el.offsetParent
  }
  return totalOffset
}
export default function Toc({ leftSideWidth, isVisible, headingSelector, getTitle, getDepth, ...rest }) {
  const { throttleTime = 200, tocTitle = `Contents` } = rest
  // headingSelector: string or array of strings
  // getTitle: function
  // getDepth: function
  // tocTitle: string
  // All Toc props optional.
  const [headings, setHeadings] = useState({
    titles: [],
    nodes: [],
    minDepth: 0,
  })
  // Controls whether ToC is expanded or closed on small screens.
  const [open, setOpen] = useState(false)
  // Controls which heading is currently highlighted as active.
  const [active, setActive] = useState()
  // The ref is attached to the top-level div (TocDiv) and is
  // used to determine if the user clicked outside the ToC.
  const ref = useRef()
  // Read heading titles, depths and nodes from the DOM.
  useEffect(() => {
    // Fallback to sensible defaults for headingSelector, getTitle and getDepth
    // inside useEffect rather than specifying them as Toc default props to avoid
    // the need for useMemo and useCallback, resp.
    // Otherwise, these would change on every render and since this effect calls
    // setHeadings which triggers a rerender, it would cause an infinite loop.
    // The default selector targets all headings (h1, h2, ..., h6) inside
    // a main element. You can pass in whatever string or array of strings
    // targets all the headings you want to appear in the ToC.
    const selector =
      // headingSelector || Array.from({ length: 6 }, (_, i) => `main h` + (i + 1))
      ['h2']
    // const nodes = Array.from(document.querySelectorAll(selector))
    const nodes = Array.from(document.getElementsByClassName('post-content')[0]
                    .querySelectorAll(selector))
    const titles = nodes.map(node => ({
      title: getTitle ? getTitle(node) : node.innerText,
      depth: getDepth ? getDepth(node) : Number(node.nodeName[1]),
    }))
    // Compute the minimum heading depth. Will be subtracted from each heading's
    // depth to determine the indentation of that heading in the ToC.
    const minDepth = Math.min(...titles.map(h => h.depth))
    setHeadings({ titles, nodes, minDepth })
  }, [headingSelector, getTitle, getDepth])
  // Add scroll event listener to update currently active heading.
  useEffect(() => {
    // Throttling the scrollHandler saves computation and hence battery life.
    const scrollHandler = throttle(() => {
      const { titles, nodes } = headings
      // Offsets need to be recomputed inside scrollHandler because
      // lazily-loaded content increases offsets as user scrolls down.
      const offsets = nodes.map(el => accumulateOffsetTop(el))
      const activeIndex = offsets.findIndex(
        offset => offset > window.scrollY + 0.25 * window.innerHeight
      )
      setActive(activeIndex === -1 ? titles.length - 1 : activeIndex - 1)
    }, throttleTime)
    window.addEventListener(`scroll`, scrollHandler)
    return () => window.removeEventListener(`scroll`, scrollHandler)
  }, [headings])
  return (
    <>
      {/* <Toggle opener open={open} onClick={() => setOpen(true)} size="1.6em" /> */}
      <div style={leftSideWidth}>
        <TocDiv ref={ref} open={open} style={{display: isVisible ? 'block' : 'none'}}>
          <nav>
            {headings.titles.map(({ title, depth }, index) => (
              <TocLink
                key={title}
                active={active === index}
                depth={depth - headings.minDepth}
                onClick={event => {
                  event.preventDefault()
                  setOpen(false)
                  headings.nodes[index].scrollIntoView({
                    behavior: `smooth`,
                    block: `start`,
                  })
                }}
              >
                {title}
              </TocLink>
            ))}
          </nav>
        </TocDiv>
      </div>
    </>
  )
}