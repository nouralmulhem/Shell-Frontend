import {styled} from "@mui/material/styles"
import {Box,Button} from "@mui/material"

export const SignConatiner = styled('form')(({condition})=>({
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around',
    width: (condition) ? '50%' : '100%',
    height: '100%',
    padding: (condition) ?'80px 10px': '50px 10px',
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