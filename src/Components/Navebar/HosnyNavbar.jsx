/* eslint-disable no-unused-vars */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { PostLink, PostLink2 } from './Navbar';

// Utils
import {
  isAdmin, isLoggedIn, Logout, reDirect,
} from '../../utils';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  /*
  const handleHome = () => {
    handleCloseNavMenu();
    window.location.pathname = '';
  };
  const handleSponser = () => {
    handleCloseNavMenu();
    window.location.pathname = 'Sponser';
  };
  const handleGallary = () => {
    handleCloseNavMenu();
    window.location.pathname = 'Gallery';
  };
  const handleAbout = () => {
    handleCloseNavMenu();
    window.location.pathname = 'About';
  };
  const handleAddPost = () => {
    handleCloseNavMenu();
    window.location.pathname = 'AddPost';
  };
  const handleJoinUs = () => {
    handleCloseNavMenu();
    window.location.pathname = 'Recruitment';
  };
  */
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PostLink to="/">
            <Box component="img" alt="Our logo" src="./logo.svg" sx={{ color: 'white' }} />
          </PostLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key="Home" onClick={handleCloseNavMenu}>
                <PostLink2 to="/">HOME</PostLink2>
              </MenuItem>
              <MenuItem key="Sponser" onClick={handleCloseNavMenu}>
                <PostLink2 to="/Sponser">Sponser</PostLink2>
              </MenuItem>
              <MenuItem key="Gallery" onClick={handleCloseNavMenu}>
                <PostLink2 to="/Gallery">Gallery</PostLink2>
              </MenuItem>
              <MenuItem key="About" onClick={handleCloseNavMenu}>
                <PostLink2 to="/About">About Us</PostLink2>
              </MenuItem>
              {isAdmin()
                ? (
                  <>
                    <MenuItem key="AddPost" onClick={handleCloseNavMenu}>
                      <PostLink2 to="/AddPost">Add Post</PostLink2>
                    </MenuItem>
                    <MenuItem key="AddAdmin" onClick={handleCloseNavMenu}>
                      <PostLink2 to="/AddAdmin">Add Admin</PostLink2>
                    </MenuItem>

                  </>
                ) : null}

              <MenuItem key="AddPost" onClick={handleCloseNavMenu}>
                <PostLink2 to="/Recruitment">join us</PostLink2>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <PostLink to="/login">Sign in</PostLink>

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between' }}>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button onClick={handleCloseNavMenu}><PostLink to="/">HOME</PostLink></Button>
              <Button onClick={handleCloseNavMenu}><PostLink to="/Sponser">Sponser</PostLink></Button>
              <Button onClick={handleCloseNavMenu}><PostLink to="/Gallery">Gallery</PostLink></Button>
              <Button onClick={handleCloseNavMenu}><PostLink to="/About">About Us</PostLink></Button>
              {/* <Button onClick={handleCloseNavMenu}><PostLink to="/AddPost">Add Post</PostLink></Button> */}
              {isAdmin() ? <Button><PostLink to="/AddPost">Add Post</PostLink></Button> : null}
              <Button onClick={handleCloseNavMenu}><PostLink to="/Recruitment">join us</PostLink></Button>

            </Box>
            {isAdmin() ? <Button><PostLink to="/AddAdmin">Add Admin</PostLink></Button> : null}
            <Button>
              {
}
              {console.log(isLoggedIn())}
              <PostLink onClick={() => {
                Logout();
                reDirect('/login');
              }}
              >
                {isLoggedIn() ? 'Log out' : 'Sign in'}

              </PostLink>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
