import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';

// export default ({ children }) => (
//   <div style={{ 
//     background: '#fff',
//     boxShadow: '0px 5px 20px #dddddd',
//     maxWidth: '900px',
//     paddingLeft: '96px',
//     paddingRight: '96px',
//     paddingTop: 0,
//     paddingBottom: 0,
//     margin: 'auto',
//     marginBottom: 40,
//     borderStyle: 'solid',
//     borderWidth: '1px',
//     borderColor: '#00000012',
//     borderTopStyle: 'none',
//     borderRadius: '0px 0px 15px 15px' }}>
//       {children}
//   </div>
// )


const useStyles = makeStyles((theme) => ({
  container: {
    background: '#fff',
    boxShadow: '0px 5px 20px #dddddd',
    maxWidth: '900px',
    paddingLeft: '96px',
    paddingRight: '96px',
    paddingTop: 0,
    paddingBottom: 0,
    margin: 'auto',
    marginBottom: 40,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#00000012',
    borderTopStyle: 'none',
    borderRadius: '0px 0px 15px 15px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '5%',
      paddingRight: '5%',
    },
  }
}))

export default function Container({ children }) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}