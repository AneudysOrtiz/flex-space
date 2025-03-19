import { useRef } from 'react';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import PaidIcon from '@mui/icons-material/Paid';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CssBaseline from '@mui/material/CssBaseline';

import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';

import Pages from './routes/Pages';

// Define the navigation items
const navItems = [
  { label: 'Inicio', path: '/', icon: <HomeIcon /> },
  { label: 'Buscar', path: '/page-1', icon: <SearchIcon /> },
  { label: 'Créditos', path: '/page-2', icon: <PaidIcon /> },
  { label: 'Calendario', path: '/page-3', icon: <CalendarMonthIcon /> },
];

function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  // Find the index of the current route
  const currentIndex = navItems.findIndex((item) => item.path === location.pathname);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={currentIndex}
        onChange={(event, newValue) => {
          navigate(navItems[newValue].path);
        }}
      >
        {navItems.map((item, index) => (
          <BottomNavigationAction key={index} label={item.label} icon={item.icon} />
        ))}
      </BottomNavigation>
    </Paper>
  );
}

function App() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <BrowserRouter>
        <Pages />
        <BottomNav />
      </BrowserRouter>
    </Box>
  );
}

const AppWithErrorHandler = withErrorHandler(App, AppErrorBoundaryFallback);
export default AppWithErrorHandler;
