import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import { Snackbar } from '@mui/material';
import { Container, PostLink, SecContainer } from './style';

export default function Footer() {
  const handleClick = (path) => {
    window.location.replace(path);
  };

  const [open, setOpen] = useState(false);

  const handleCopy = (text) => {
    setOpen(true);
    navigator.clipboard.writeText(text);
  };
  return (
    <Container>
      <SecContainer>
        <Button><PostLink to="/">HOME</PostLink></Button>
        <Button><PostLink to="/Sponser">Sponser</PostLink></Button>
        <Button><PostLink to="/">Gallary</PostLink></Button>
        <Button><PostLink to="/About">About Us</PostLink></Button>
        <Button><PostLink to="/AddPost">Add Post</PostLink></Button>
        <Button><PostLink to="/Recruitment">join us</PostLink></Button>
      </SecContainer>
      <SecContainer>
        <IconButton component="label" onClick={() => handleClick('https://www.facebook.com/ShellEcoMarathonCUT')}>
          <FacebookIcon />
        </IconButton>
        <IconButton component="label" onClick={() => handleCopy('Teammanagercuert23@gmail.com')}>
          <EmailIcon />
        </IconButton>
        <IconButton component="label" onClick={() => handleCopy('01014569572')}>
          <CallIcon />
        </IconButton>
        <IconButton component="label" onClick={() => handleClick('https://www.linkedin.com/company/cairo-university-eco-racing-team/')}>
          <LinkedInIcon />
        </IconButton>
      </SecContainer>
      <Snackbar
        message="Copied to clibboard"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
      />
    </Container>
  );
}
