import { Card, styled } from "@mui/material";

const Post = styled(Card)(({ backgroundImage }) => ({
  backgroundImage,
  width: "75%",
  height: '80vh',
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'end',
  margin: 'auto',
  marginTop: 30,
  marginBottom: 10,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: 'white'
}));
export default Post;

// export const Image = styled('img')(({ src }) => ({
//     src,
//     width:'100%',
//     height:'100vh',
// }));  