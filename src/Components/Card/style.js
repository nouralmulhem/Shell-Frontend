import { Card, styled } from "@mui/material";

const Post = styled(Card)(({ backgroundImage }) => ({
    backgroundImage,
    width: "100%",
    height:'85vh', 
    display:"flex" ,
    flexDirection:'column',
    justifyContent: 'end',
    marginTop:5,
    marginBottom:5,
  }));
export default Post;

// export const Image = styled('img')(({ src }) => ({
//     src,
//     width:'100%',
//     height:'100vh',
// }));  