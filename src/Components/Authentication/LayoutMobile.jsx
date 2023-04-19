import { Box } from '@mui/material';
// import { makeStyles } from '@mui/styles'
import { makeStyles } from '@mui/styles';
import { ContainerObj } from '../../styles/Layout';
import { ButtonSignUp } from '../../styles/SignupOverlay';
import SignIn from './SignIn';
import Signup from './Signup';

const useStyles = makeStyles({
  toggleDown: {
    transform: 'translate(-100%,0)',
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

function LayoutMobile() {
  const classes = useStyles();
  const handleClickMobile = () => {
    document.getElementById('first').classList.remove(`${classes.toggleUp}`);
    document.getElementById('second').classList.remove(`${classes.toggleUp}`);
    document.getElementById('first').classList.add(`${classes.toggleDown}`);
    document.getElementById('second').classList.add(`${classes.toggleDown}`);
  };
  const handleClickMobile2 = () => {
    document.getElementById('first').classList.remove(`${classes.toggleDown}`);
    document.getElementById('second').classList.remove(`${classes.toggleDown}`);
    document.getElementById('first').classList.add(`${classes.toggleUp}`);
    document.getElementById('second').classList.add(`${classes.toggleUp}`);
  };
  const btn = <ButtonSignUp variant="contained" bgclr="#396fd6" onClick={handleClickMobile}>Sign Up</ButtonSignUp>;
  const btn2 = <ButtonSignUp variant="contained" bgclr="#396fd6" onClick={handleClickMobile2}>Sign In</ButtonSignUp>;
  return (
    <div className="FormHeader">
      <ContainerObj dirc="row">
        <Box id="first" className="init" sx={{ minWidth: '100%' }}>
          <SignIn btn={btn} condition={false} />
        </Box>
        <Box id="second" className="init" sx={{ minWidth: '100%' }}>
          <Signup btn2={btn2} condition={false} />
        </Box>
      </ContainerObj>
    </div>
  );
}

export default LayoutMobile;
