import { useState } from 'react';
import { useRouter } from 'next/router';
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuComponent() {
const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const shouldOpenMenu = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRedirectFromMenu = (path) => {
    router.push(`/${path}`);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </IconButton>
            <Menu anchorEl={anchorEl} open={shouldOpenMenu} onClose={() => setAnchorEl(null)}>
              <MenuItem onClick={() => handleRedirectFromMenu('laptops')}>Notebooks</MenuItem>
              <MenuItem onClick={() => handleRedirectFromMenu('monitors')}>Monitores</MenuItem>
              <MenuItem onClick={() => handleRedirectFromMenu('phones')}>Celulares</MenuItem>
            </Menu>
        </Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Controle de equipamentos
        </Typography>
      </Toolbar>
    </AppBar>
  );
}