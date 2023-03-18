import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Container, PostLink, SecContainer } from './style';

export default function Footer() {
  const handleClick = (path) => {
    window.location.replace(path);
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
        <IconButton component="label" onClick={() => handleClick('https://www.facebook.com/')}>
          <FacebookIcon />
        </IconButton>
        <IconButton component="label" onClick={() => handleClick('https://twitter.com/')}>
          <TwitterIcon />
        </IconButton>
        <IconButton component="label" onClick={() => handleClick('https://www.instagram.com/')}>
          <InstagramIcon />
        </IconButton>
        <IconButton component="label" onClick={() => handleClick('https://www.linkedin.com/')}>
          <LinkedInIcon />
        </IconButton>
      </SecContainer>
    </Container>
  );
}
