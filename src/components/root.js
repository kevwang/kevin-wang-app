import React from 'react'
import Sidebar from '../components/sidebar'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Modal from './modal';

const headingStyles = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((s) => {
  {s: {color: '#3c3b3b'}}
});

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          fontSize: '1.00rem',
          fontFamily: "Segoe UI",
          color: '#424242',
          backgroundColor: '#f9f9f9',
        },
        a: {
          textDecoration: 'none',
          color: '#424242',
          '&:hover': {
            textDecoration: 'none',
            color: '#424242',
          },
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
    const [modalOpen, setModalOpen] = React.useState(false);
    
    const handleModalOpen = () => {
      setModalOpen(true);
    };

    const handleModalClose = () => {
      setModalOpen(false);
    };
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.root}>
                <Sidebar sidebarOpen={props.sidebarOpen} handleModalOpen={handleModalOpen}/>
                <div className={classes.content}>
                    { props.children }
                </div>
            </div>
            <Modal modalOpen={modalOpen} 
              handleModalOpen={handleModalOpen} 
              handleModalClose={handleModalClose}
            />
        </ThemeProvider>
    )
}
