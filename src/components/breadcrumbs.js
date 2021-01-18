import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from './custom-link';

export default function MyBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" to={'/'}>
        Home
      </Link>
      <Link color="inherit" to={'/projects'}>
        Projects
      </Link>
      <Typography color="textPrimary">Curr</Typography>
    </Breadcrumbs>
  );
}