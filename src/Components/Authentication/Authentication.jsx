import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import LayoutMobile from './LayoutMobile';
import LayoutDesktop from './LayoutDesktop';

function Authentication() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));// matches= (currentbreakpoint<md)
  return (
    matches ? <LayoutMobile matches={matches} /> : <LayoutDesktop matches={matches} />
  );
}

export default Authentication;
