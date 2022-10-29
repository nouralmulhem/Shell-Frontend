import ResponsiveAppBar from "../Navebar/Navebar";
import Card from "../Card/NewCard";
import { Box } from "@mui/system";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useFetch from '../fetch.js'
import { useParams } from "react-router-dom";
import { PostAddSharp } from "@mui/icons-material";
// import { Image } from "../Card/style";

export default function Home() {
    let {posts:post,isPending,error} = useFetch('http://localhost:8000/posts');
    setTimeout(() => {
        console.log(post);
        console.log(cur);
},1000)
    
    let [cur,setCur]=React.useState('0');
    
    const pagChange = (num) => {
        setCur(num);
    }
    return (
        <Box >
            <ResponsiveAppBar />
            {post && 
            <Card
                backgroundImage={'url('+post[cur].image+')'}
                name={post && post[cur].title}
                text={post[cur].description}
                header={post && post[cur].title}
            
            /> }
           
            {post && <Stack spacing={2} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                <Pagination count={post.length} color="primary" onChange={(e, num) => {
                    pagChange(num);
                }} />
            </Stack>
}
           
        </Box>
    );
}