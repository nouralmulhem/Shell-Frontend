// import { Box } from '@mui/system';
import { Box } from '@mui/material';
import BeSponser from './BeSponser/BeSponser';
import ListSponsers from './ListSponsers/ListSponsers';

export default function Sponser() {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <ListSponsers />
      <BeSponser />
    </Box>
  );
}
