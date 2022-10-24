import {styled} from "@mui/material/styles"
import {Box,Button} from "@mui/material"

export const SigninConatiner = styled(Box)(()=>({
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around',
    width:'50%',
    backgroundColor:"aliceblue"
}));

export const ThirPartyContainer = styled(Box)(()=>({
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    width:'60%',
    // backgroundColor:"blue"
}));


export const ButtonSignUp = styled(Button)(()=>({
    color: 'white',
    border: '1px solid white',
    width: '50%',
    height: 50,
    fontWeight: 'bold',
    borderRadius: 40,
    '&:hover': {
        border: '1px solid #adadad',
    },

}));