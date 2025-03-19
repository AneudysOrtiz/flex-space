import { Routes } from 'react-router';

import Box from '@mui/material/Box';

import routes from '..';
import { renderRoutes } from './utils';

function Pages() {
  return (
    <Box>
      <Routes>{renderRoutes(routes)}</Routes>
    </Box>
  );
}

export default Pages;
