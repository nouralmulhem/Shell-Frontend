import {
  ButtonSignUp, SignUpOverlayObj, TypographyH3, TypographyParagraph,
} from '../../styles/SignupOverlay';

function SignUpOverlay({ handleClick }) {
  const toggle = () => {
    handleClick(false);
  };
  return (
    <SignUpOverlayObj>
      <TypographyH3 variant="h3" sx={{ marginBottom: 4 }}>Hi There!</TypographyH3>
      <TypographyParagraph variant="p">Enter your personal details to open an account with us</TypographyParagraph>
      <ButtonSignUp variant="outlined" clr="white" onClick={toggle}>Sign UP</ButtonSignUp>
    </SignUpOverlayObj>
  );
}

export default SignUpOverlay;
