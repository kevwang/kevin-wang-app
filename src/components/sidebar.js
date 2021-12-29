import React from 'react';
import clsx from 'clsx';
import Link from './custom-link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Home from '@material-ui/icons/Home'; // Home / About
import SchoolIcon from '@material-ui/icons/School'; // OMSCS
import CodeIcon from '@material-ui/icons/Code'; // Projects
import DescriptionIcon from '@material-ui/icons/Description'; // Resume
import MailIcon from '@material-ui/icons/Mail'; // Contact
import GitHubIcon from '@material-ui/icons/GitHub'; // Github
import LinkedInIcon from '@material-ui/icons/LinkedIn'; // LinkedIn
import Tooltip from '@material-ui/core/Tooltip';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 0,
    borderRadius: '20%',
    [theme.breakpoints.down('xs')]: {
      backgroundColor: '#DFDFDF85',
      '&:hover': {
        background: "#FFFFFF75",
      },
    }
  },
  menuButtonHovered: {
    backgroundColor: '#000000',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    backgroundColor: '#FFF',
    // boxShadow: '0px 0px 12px #cccccc',
    // zIndex: -1,
    overflow: 'hidden',
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('xs')]: {
      zIndex: 10,
      backgroundColor: 'transparent',
      boxShadow: 'none',
      borderRight: 'none',
    },
  },
  drawerOpen: {
    backgroundColor: '#FFF',
    borderRight: '1px solid rgba(0, 0, 0, 0.12)',
    overflow: 'hidden',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      // delay: 1000,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      delay: theme.transitions.duration.leavingScreen,
    }),
    overflow: 'hidden',
    width: theme.spacing(7) + 1,
  },
  profileSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    display: 'flex',
    overflow: 'hidden',
  },
  profileOpen: {
    // height: 'auto',
    maxHeight: 500,
    // display: 'flex',
    transition: theme.transitions.create('max-height', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      delay: theme.transitions.duration.enteringScreen,
    }),
  },
  profileClose: {
    // height: 0,
    maxHeight: 0,
    // display: 'none'
    transition: theme.transitions.create('max-height', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      //delay: 1000,
    }),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  toolbar: {
    display: 'flex',
    padding: 4,
  },
  toolbarOpen: {
    justifyContent: 'flex-end',
  },
  toolbarClose: {
    justifyContent: 'center',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon: {
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
  },
  listText: {
    marginLeft: 25,
    marginTop: 0,
    marginBottom: 0,
    color: 'rgba(0, 0, 0, 0.80);',
    textDecoration: 'none',
  },
  
  /**
   * The following styles are for the small screen breakpoint
   */
  hideOnXS: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  }
}));

export default function MiniDrawer({sidebarOpen, handleModalOpen}) {
  const [open, setOpen] = React.useState(sidebarOpen);
  const theme = useTheme();
  const classes = useStyles();

  let tooltipProps = {
    placement: 'right',
    enterDelay: 25,
    disableHoverListener: open,
    disableHoverListener: open,
    arrow: true,
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
          
        }}
      >
        <div className={clsx(classes.toolbar, {
          [classes.toolbarOpen]: open,
          [classes.toolbarClose]: !open,
        })}>
          <IconButton
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <IconButton 
            onClick={handleDrawerClose}
            className={clsx({
                [classes.hide]: !open,
              })}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider className={clsx({ [classes.hideOnXS]: !open})}/>
        <div className={clsx(classes.profileSection, {
          [classes.profileOpen]: open,
          [classes.profileClose]: !open,
        })}>
          <h3 style={{ textAlign: 'center' }}>Kevin Wang</h3>
          <div style={{margin: '0 auto', width: '60%'}}>
            <Avatar style={{width: '100%', height: 'auto', maxWidth: 200}} alt='Kevin Wang' src='/avatar.png' />
          </div>
          <p style={{ 
            fontSize: '1em',
            width: drawerWidth - 20,
            margin: 'auto',
            textAlign: 'center',
            whiteSpace: 'normal',
            marginBottom: 0,
            marginTop: 10
          }}>
            Welcome to my shared space of projects in engineering, startups, and personal interests.
          </p>
          <div style={{ // Wrapper for Github and Linkedin icons
            display: 'flex',
            margin: '0 auto',
          }}>
            <a href='https://www.github.com/kevwang' target="_blank">
              <ListItem button key={'Github'}>
                <ListItemIcon className={classes.icon}><GitHubIcon /></ListItemIcon>
              </ListItem>
            </a>
            <a href='https://www.linkedin.com/in/kevin-wang-3487b3ab/' target="_blank">
              <ListItem button key={'LinkedIn'}>
                <ListItemIcon className={classes.icon}><LinkedInIcon /></ListItemIcon>
              </ListItem>
            </a>
          </div>
        </div>
        <List className={clsx({ [classes.hideOnXS]: !open})}>
          <Link to="/">
            <Tooltip title='Home' {...tooltipProps}>
              <ListItem button key={'Home'}>
                  <ListItemIcon className={classes.icon}><Home /></ListItemIcon>
                <p className={classes.listText}>
                  Home
                </p>
              </ListItem>
            </Tooltip>
          </Link>
          <Link to="/omscs">
            <Tooltip title='OMSCS' {...tooltipProps}>
              <ListItem button key={'OMSCS Review'}>
                <ListItemIcon className={classes.icon}><SchoolIcon /></ListItemIcon>
                <p className={classes.listText}>
                  OMSCS Review
                </p>
              </ListItem>
            </Tooltip>
          </Link>
          <Link to="/projects">
            <Tooltip title='Projects' {...tooltipProps}>
              <ListItem button key={'Projects'}>
                <ListItemIcon className={classes.icon}><CodeIcon /></ListItemIcon>
                <p className={classes.listText}>
                  Projects
                </p>
              </ListItem>
            </Tooltip>
          </Link>
        </List>
        <Divider className={clsx({ [classes.hideOnXS]: !open})} />
        <List className={clsx({ [classes.hideOnXS]: !open})}>
            <Tooltip title='Contact' {...tooltipProps}>
              <ListItem button key={'Contact'} onClick={handleModalOpen}>
                <ListItemIcon className={classes.icon}><MailIcon /></ListItemIcon>
                <p className={classes.listText}>
                  Contact
                </p>
              </ListItem>
            </Tooltip>
        </List>
      </Drawer>
  );
}