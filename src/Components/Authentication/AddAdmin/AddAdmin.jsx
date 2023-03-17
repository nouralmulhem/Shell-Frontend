/* eslint-disable no-unused-vars */
import { useState } from 'react';

// MUI
import { Button, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// Server
import { addAdmin } from './server';
import { FormContainer, Title } from './styles';
import SnackBar from '../../SnackBar';
import CustomizedSnackbars from '../../Alert';

function AddAdmin() {
  // useStates
  const [email, setEmail] = useState('');
  // Snack Bar
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBar, setSnackBar] = useState({ message: '', status: '' });

  return (
    <>
      <div className="FormHeader">
        <FormContainer onSubmit={(e) => {
          e.preventDefault();
          addAdmin(email, setOpenSnackBar, setSnackBar);
        }}
        >
          <Typography variant="h5" color="primary" sx={{ marginBottom: '10px' }}>Add Admin</Typography>
          <Title
            label="Title"
            variant="standard"
            required
            onChange={(e) => {
              setEmail(e.target.value.trim());
            }}
          />
          <Button
            variant="contained"
            endIcon={<PersonAddIcon />}
            type="submit"
          >
            Add
          </Button>
        </FormContainer>
      </div>
      <CustomizedSnackbars open={openSnackBar} setOpen={setOpenSnackBar} message={snackBar.message} severity={snackBar.status} />
    </>

  );
}

export default AddAdmin;
