import { IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function SnackBar(props) {
  const { open, setOpen, message } = props;

  const vertical = 'bottom';
  const horizontal = 'right';

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical, horizontal }}
      message={message}
      action={action}
    />
  );
}

export default SnackBar;
