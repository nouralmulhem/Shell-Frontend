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
import { isAdmin, isLoggedIn, Logout } from '../../utils';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleHome = () => {
    handleCloseNavMenu();
    window.location.pathname = '';
  };
  const handleSponser = () => {
    handleCloseNavMenu();
    console.log('Sponser');
  };
  const handleGallary = () => {
    handleCloseNavMenu();
    console.log('Gallary');
  };
  const handleAbout = () => {
    handleCloseNavMenu();
    console.log('About');
  };
  const handleAddPost = () => {
    handleCloseNavMenu();
    window.location.pathname = 'AddPost';
  };
  const handleJoinUs = () => {
    handleCloseNavMenu();
    window.location.pathname = 'Recruitment';
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component="img" alt="Our logo" src="./logo.svg" sx={{ color: 'white' }} onClick={handleHome} />
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
              <MenuItem key="Home" onClick={handleHome}>
                <PostLink2 to="/">HOME</PostLink2>
              </MenuItem>
              <MenuItem key="Sponser" onClick={handleSponser}>
                <PostLink2 to="/">Sponser</PostLink2>
              </MenuItem>
              <MenuItem key="Gallary" onClick={handleGallary}>
                <PostLink2 to="/">Gallary</PostLink2>
              </MenuItem>
              <MenuItem key="About" onClick={handleAbout}>
                <PostLink2 to="/">About</PostLink2>
              </MenuItem>
              <MenuItem key="AddPost" onClick={handleAddPost}>
                <PostLink2 to="/AddPost">Add Post</PostLink2>
              </MenuItem>
              <MenuItem key="AddPost" onClick={handleJoinUs}>
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
              <Button onClick={handleCloseNavMenu}><PostLink to="/">Sponser</PostLink></Button>
              <Button onClick={handleCloseNavMenu}><PostLink to="/">Gallary</PostLink></Button>
              <Button onClick={handleCloseNavMenu}><PostLink to="/">About</PostLink></Button>
              <Button onClick={handleCloseNavMenu}><PostLink to="/AddPost">Add Post</PostLink></Button>
              <Button onClick={handleCloseNavMenu}><PostLink to="/Recruitment">join us</PostLink></Button>

            </Box>
            {isAdmin() ? <Button><PostLink to="/AddAdmin">Add Admin</PostLink></Button> : null}
            <Button onClick={() => {
              if (isLoggedIn) { Logout(); }
              window.location.href = './login';
            }}
            >
              <PostLink to="">{isLoggedIn() ? 'Log out' : 'Sign in'}</PostLink>
            </Button>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
