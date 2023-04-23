import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography, useMediaQuery } from '@mui/material';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { BlockedBox, Image } from './styles';
import { Title } from '../style';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ListSponsers() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get('https://cuert-backend-api.herokuapp.com/sponsors/')
      .then((response) => {
        console.log(response);
        if (response.status === 401) {
          window.location.pathname = 'login';
        }
        setInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));// matches= (currentbreakpoint<md)

  return (
    <BlockedBox>
      <Box sx={{
        width: '50%',
        [theme.breakpoints.between('0', '650')]: {
          width: '80%',
        },
      }}
      >
        <Title>Meet our Sponsors</Title>
      </Box>
      <Box sx={{ width: '80%', margin: '40px auto' }}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
          { info?.map((entity) => (
            <Grid item xs={matches ? 12 : 4} key={entity.id}>
              <Item sx={{ padding: '40px 20px', minHeight: '470px' }}>
                <Box sx={{
                  width: '100%', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 4,
                }}
                >
                  <Image src={entity.picture} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '5px' }}>{entity.company_name}</Typography>
                <Typography variant="body">
                  {entity.brief}
                </Typography>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </BlockedBox>
  );
}
