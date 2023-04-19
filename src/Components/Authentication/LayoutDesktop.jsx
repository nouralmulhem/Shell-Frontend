import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ContainerObj } from '../../styles/Layout';
import SignIn from './SignIn';
import SignInOverlay from './SignInOverlay';
import Signup from './Signup';
import SignUpOverlay from './SignUpOverlay';

const useStyles = makeStyles({
  toggleDown: {
    transform: 'translate(0,-100%)',
    transitionTimingFunction: 'ease-in-out',
    transitionDuration: '1s',
  },
  toggleUp: {
    transform: 'translate(0,0)',
    transitionTimingFunction: 'ease-in-out',
    transitionDuration: '1s',
  },
  init: {
    transitionTimingFunction: 'ease-in-out',
    transitionDuration: '1s',
  },
});

function LayoutDesktop() {
  const classes = useStyles();
  const handleClick = () => {
    document.getElementById('first').classList.remove(`${classes.toggleUp}`);
    document.getElementById('second').classList.remove(`${classes.toggleUp}`);
    document.getElementById('first').classList.add(`${classes.toggleDown}`);
    document.getElementById('second').classList.add(`${classes.toggleDown}`);
  };
  const handleClick2 = () => {
    document.getElementById('first').classList.remove(`${classes.toggleDown}`);
    document.getElementById('second').classList.remove(`${classes.toggleDown}`);
    document.getElementById('first').classList.add(`${classes.toggleUp}`);
    document.getElementById('second').classList.add(`${classes.toggleUp}`);
  };
  return (
    <div className="FormHeader">
      <ContainerObj dirc="column">
        <Box id="first" className="init" sx={{ display: 'flex', minHeight: '100%' }}>
          <SignIn condition />
          <SignUpOverlay handleClick={handleClick} />
        </Box>
        <Box id="second" className="init" sx={{ display: 'flex', minHeight: '100%' }}>
          <SignInOverlay handleClick2={handleClick2} />
          <Signup condition />
        </Box>
      </ContainerObj>
    </div>

  );
}

export default LayoutDesktop;
