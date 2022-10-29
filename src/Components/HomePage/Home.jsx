import ResponsiveAppBar from "../Navebar/Navebar";
import Card from "../Card/NewCard";
import { Box } from "@mui/system";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// import { Image } from "../Card/style";

export default function Home() {
    
    return (
        <Box >
            <ResponsiveAppBar />
            {/* <Box sx={{ display: 'flex', justifyContent: 'Center', wrap: 'nowrap'  }}> */}
            {/* <Image src="./logo.svg" alt="" /> */}
                <Card
                backgroundImage='url("https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg")'
                    name="green iguana"
                    text="Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica"
                    header="Lizard"
                    // sx={{backgroundImage:'./logo.svg'}}
                />
            {/* </Box> */}
            <Stack spacing={2} sx={{display:'flex', justifyContent:'center',flexDirection:'row'}}>
                <Pagination count={6} color="primary" />
            </Stack>

        </Box>
    );
}