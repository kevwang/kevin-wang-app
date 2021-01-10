import React from 'react'
import Sidebar from '../components/sidebar'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const headingStyles = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((s) => {
  {s: color: '#3c3b3b'}
});

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontSize: '1.00rem',
          fontFamily: 'Tahoma',
          color: '#424242'
          // fontFamily: "Nunito"
        },
        ...headingStyles,
      },
    }
  },
});

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      [theme.breakpoints.down('xs')]: {
        display: 'block',
      },
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    menuButton: {
      // marginRight: 36,
      width: '100%',
      justifyContent: 'left',
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      //padding: theme.spacing(0, 1),
      padding: 4,
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      // padding: theme.spacing(3),
    },
}));
  
export default function Root(props) {
    const classes = useStyles();
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.root}>
                <Sidebar />
                <div className={classes.content}>
                    { props.children }
                </div>
            </div>
        </ThemeProvider>
    )
}
