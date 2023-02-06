import { Button } from '@mui/material';
import { styled } from '@mui/system';

import theme from '../../styles';

export const NextButton = styled(Button)(() => ({
  backgroundColor: theme.palette.form.next,
}));

export const BackButton = styled(Button)(() => ({
  backgroundColor: theme.palette.form.back,
}));
