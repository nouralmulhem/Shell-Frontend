import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const ContainerObj = styled(Box)(({ dirc }) => ({
  display: 'flex',
  flexDirection: `${dirc}`,
  width: '60%',
  height: '85%',
  boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);',
  borderRadius: 10,
  // whiteSpace: 'nowrap',
  overflow: 'hidden',
}));
