import React from 'react'
import { Link } from 'gatsby'
import { useTheme } from '@material-ui/core/styles';

export default function CustomLink(props) {
  const theme = useTheme();

  return (
    <Link {...props} style={{
      textDecoration: 'none',
      color: '#424242',
      // '&:hover': {
      //   color: "#FFFFFF",
      // },
    }}>
      {props.children}
    </Link>
  )
}
