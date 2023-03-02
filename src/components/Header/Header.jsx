import {
  AppBar,
  Container,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from '@mui/material';
import { StyledToolbar } from './Header.Styled';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  switchToDarkMode,
  switchToLightMode,
} from 'redux/themeswitch/themeswitch-slice';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeChange, setThemeChange] = useState(false);

  const dispatch = useDispatch();

  const theme = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setThemeChange(!isThemeChange);
    if (isThemeChange) {
      dispatch(switchToDarkMode());
    } else {
      dispatch(switchToLightMode());
    }
  };

  const menu = (
    <List>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/">
          <HomeOutlinedIcon sx={{ marginRight: '40px' }} />
          <ListItemText primary="Home" sx={{ marginRight: '40px' }} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/search">
          <FindInPageOutlinedIcon sx={{ marginRight: '40px' }} />
          <ListItemText primary="Search" sx={{ marginRight: '40px' }} />
        </ListItemButton>
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="static">
        <Container>
          <StyledToolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Github Repo Search
            </Typography>
            <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
              {theme.palette.mode === 'dark' ? (
                <Brightness4Icon />
              ) : (
                <Brightness7Icon />
              )}
            </IconButton>
          </StyledToolbar>
        </Container>
      </AppBar>
      <Drawer anchor="top" open={isMenuOpen} onClose={toggleMenu}>
        {menu}
      </Drawer>
    </>
  );
};
