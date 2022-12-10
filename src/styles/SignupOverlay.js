import {styled} from "@mui/material/styles"
import {Box, Button, Typography} from "@mui/material"

export const SignUpOverlayObj = styled(Box)(()=>({
    backgroundColor: '#396fd6',
    width: '50%',
    height: '100%',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: `'Montserrat', sans-serif`,
    padding: 40,
    color: '#eee',

}));

export const TypographyH3 = styled(Typography)(()=>({
    fontFamily: `'Montserrat', sans-serif`,
    fontWeight: 'bold',
    color: '#eee',
}));
export const MyDiv = styled('div')(()=>({
    overflowWrap: 'break-word',
}));

export const TypographyParagraph = styled(Typography)(()=>({
    fontFamily: `'Montserrat', sans-serif`,
    marginBottom: 50,

}));

export const ButtonSignUp = styled(Button)(({clr, bgclr})=>({
    color: `white`,
    border: `1px solid ${clr}`,
    backgroundColor: `${bgclr}`,
    width: '50%',
    height: 50,
    fontWeight: 'bold',
    borderRadius: 40,
    '&:hover': {
        border: '1px solid #adadad',
    },
}));