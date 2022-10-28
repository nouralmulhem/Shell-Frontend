import {styled} from "@mui/material/styles"
import {Box,Button,TextField} from "@mui/material"

export const SignConatiner = styled(Box)(()=>({
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around',
    width:'50%',
    padding: '80px 10px',

    backgroundColor:"#eee"
}));

export const ThirPartyContainer = styled(Box)(()=>({
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'60%',
    // backgroundColor:"blue"
}));

export const ButtonSign = styled(Button)(()=>({
    color: '#396fd6',
    border: '1px solid #396fd6',
    width: '50%',
    height: 50,
    fontWeight: 'bold',
    borderRadius: 40,
    '&:hover': {
        border: '1px solid #396fd6',
    },

}));