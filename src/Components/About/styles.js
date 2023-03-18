import {
  Box, styled, Typography,
} from '@mui/material';

export const BlockedBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

export const Image = styled('img')(() => ({
  width: '80%',
  marginBottom: 40,
  marginTop: 30,
}));

export const Title = styled(Typography)(({ theme, timeline }) => ({
  fontSize: '80px',
  fontWeight: 'bold',
  padding: '80px 30px',
  textAlign: 'center',
  backgroundColor: '#eee',
  [theme.breakpoints.between('0', '650')]: {
    fontSize: '50px',
  },
  ...((timeline === 'true') && {
    fontSize: 50,
    padding: '20px 30px',
    margin: 20,
  }),
}));

export const ImageBox = styled(Box)(() => ({
  width: '50%',
  height: '50%',
  flex: 1,
  display: 'flex',
}));

export const EntityImage = styled('img')(() => ({
  width: '100%',
  height: '100%',
  margin: 'auto',
}));

export const MissionVission = styled(Box)(() => ({
  width: 200,
  height: 200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  color: '#ffbf00',
}));
