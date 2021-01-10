import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby'
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
import AccountCircleIcon from '@material-ui/icons/AccountCircle'; // Contact
import GitHubIcon from '@material-ui/icons/GitHub'; // Github
import LinkedInIcon from '@material-ui/icons/LinkedIn'; // LinkedIn

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
    backgroundColor: 'transparent',
    overflow: 'hidden',
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('xs')]: {
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
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: 'hidden',
    width: theme.spacing(7) + 1,
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

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const classes = useStyles(open);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
/**
 * *Make the parent display not flex
 * *take away the background color
 * *display none for all children except toolbar
 * take away border
 * *apply background color to button
 * change padding
 * translate and scale (transform)
 * 
 * *change toolbox CSS to account for closed vs open
 */
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
            color="0x000000"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
              // [classes.menuButtonHovered]: this.state.hovered,
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
        <div style={{
          display: open ? 'flex' : 'none',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <h3 style={{ textAlign: 'center' }}>Kevin Wang</h3>
          <div style={{margin: '0 auto', width: '60%'}}>
            <Avatar style={{width: '100%', height: 'auto'}} alt='Kevin Wang' src='/avatar.png' />
          </div>
          <p style={{ 
            fontSize: '0.9em',
            width: drawerWidth - 20,
            margin: 'auto',
            textAlign: 'center',
            whiteSpace: 'normal',
            marginBottom: 0,
            marginTop: 10
          }}>
            Welcome to my shared space of projects related to engineering, startups, and other interests.
          </p>
          <div style={{ // Wrapper for Github and Linkedin icons
            display: 'flex',
            margin: '0 auto',
            marginBottom: -8,
          }}>
            <ListItem button key={'Github'}>
              <ListItemIcon className={classes.icon}><GitHubIcon /></ListItemIcon>
            </ListItem>
            <ListItem button key={'LinkedIn'}>
              <ListItemIcon className={classes.icon}><LinkedInIcon /></ListItemIcon>
            </ListItem>
          </div>
        </div>
        <List className={clsx({ [classes.hideOnXS]: !open})}>
          <Link to="/">
            <ListItem button key={'Home'}>
              <ListItemIcon className={classes.icon}><Home /></ListItemIcon>
              <ListItemText
                primary={'Home'}
                className={clsx(classes.listText, {
                  [classes.hide]: !open,
                })}
              />
            </ListItem>
          </Link>
          <ListItem button key={'OMSCS Review'}>
            <ListItemIcon className={classes.icon}><SchoolIcon /></ListItemIcon>
            <ListItemText primary={'OMSCS Review'}
              className={clsx(classes.listText, {
                [classes.hide]: !open,
              })}
            />
          </ListItem>
          <ListItem button key={'Projects'}>
            <ListItemIcon className={classes.icon}><CodeIcon /></ListItemIcon>
            <ListItemText primary={'Projects'}
              className={clsx(classes.listText, {
                [classes.hide]: !open,
              })}
            />
          </ListItem>
          <ListItem button key={'Resume'}>
            <ListItemIcon className={classes.icon}><DescriptionIcon /></ListItemIcon>
            <ListItemText primary={'Resume'}
              className={clsx(classes.listText, {
                [classes.hide]: !open,
              })}
            />
          </ListItem>
        </List>
        <Divider className={clsx({ [classes.hideOnXS]: !open})} />
        <List className={clsx({ [classes.hideOnXS]: !open})}>
          <ListItem button key={'Contact'}>
            <ListItemIcon className={classes.icon}><AccountCircleIcon /></ListItemIcon>
            <ListItemText primary={'Contact'}
              className={clsx(classes.listText, {
                [classes.hide]: !open,
              })}
            />
          </ListItem>
        </List>
      </Drawer>
  );
}