import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Hidden } from "@mui/material";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.targetvalue);
  };
  const handlecloseNavMenu=(event)=>{
    setAnchorElNav(false);
  }

  const handleHome = () => {
    console.log("Home");
  };
  const handleSponser = () => {
    console.log("Sponser");
  };
  const handleGallary = () => {
    console.log("Gallary");
  };
  const handleAbout = () => {
    console.log("About");
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters sx={{color:'white'}}>
          <Box component="img" alt="Our logo" src="./logo.svg" sx={{color:'white'}} />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              
              onClose={()=>(handlecloseNavMenu)}
              sx={{
                display: { xs: "block", md: "none" },
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
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Join Us
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key="Home"
              onClick={handleHome}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
            <Button
              key="Sponser"
              onClick={handleSponser}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Sponser
            </Button>
            <Button
              key="Gallary"
              onClick={handleGallary}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Gallary
            </Button>
            <Button
              key="About"
              onClick={handleAbout}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
