import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from '../../GlobalStyle';
// import Link from '@mui/material/Link';

// function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

export default function BasicBreadcrumbs({category, title }) {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/">
          home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          {category}
        </Link>
        <Typography color="text.primary">{title.slice(0,75)}...</Typography>
      </Breadcrumbs>
    </div>
  );
}
