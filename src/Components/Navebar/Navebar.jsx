import * as React from 'react';
import AppBar from '@mui/material/AppBar/AppBar';
import Box from '@mui/material/Box/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PostLink from './Navbar';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.targetvalue);
  };
  const handlecloseNavMenu = () => {
    setAnchorElNav(false);
  };

  const handleHome = () => {
    handlecloseNavMenu();
    window.location.pathname = '';
  };
  const handleSponser = () => {
    console.log('Sponser');
  };
  const handleGallary = () => {
    console.log('Gallary');
  };
  const handleAbout = () => {
    console.log('About');
  };
  const handleAddPost = () => {
    window.location.pathname = 'AddPost';
  };
  const handleJoinUs = () => {
    window.location.pathname = 'Recruitment';
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters sx={{ color: 'white' }}>
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
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => (handlecloseNavMenu)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key="Home" onClick={handleHome}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem key="Sponser" onClick={handleSponser}>
                <Typography textAlign="center">Sponser</Typography>
              </MenuItem>
              <MenuItem key="Gallary" onClick={handleGallary}>
                <Typography textAlign="center">Gallary</Typography>
              </MenuItem>
              <MenuItem key="About" onClick={handleAbout}>
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem key="AddPost" onClick={handleAddPost}>
                <Typography textAlign="center">Add Post</Typography>
              </MenuItem>
              <MenuItem key="AddPost" onClick={handleJoinUs}>
                <Typography textAlign="center">Join Us</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            // onClick={()=>{ window.location.pathname = 'login';}}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <PostLink to="/login">Sign 4555in</PostLink>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between' }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button><PostLink to="/">HOME</PostLink></Button>
              <Button><PostLink to="/">Sponser</PostLink></Button>
              <Button><PostLink to="/">Gallary</PostLink></Button>
              <Button><PostLink to="/">About</PostLink></Button>
              <Button><PostLink to="/AddPost">Add Post</PostLink></Button>
              <Button><PostLink to="/Recruitment">join us</PostLink></Button>
            </Box>
            <Button><PostLink to="/login">Sign in</PostLink></Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
