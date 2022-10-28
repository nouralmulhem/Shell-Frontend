import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button } from '@mui/material';

export default function Form() {
  return (
    <Box
      component="form"
      
      sx={{
        // '& > :not(style)': { m: 1, width: '25ch' },
        display:'flex',
        margin:'auto',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Title" variant="standard" />
      <TextareaAutosize
  aria-label="minimum height"
  minRows={3}
  placeholder="Description"
  style={{ width: 400,height:150 }}
/>
<Button
  variant="contained"
  component="label"
>
  Upload File
  <input
    type="file"
    hidden
  />
</Button>
    </Box>
  );
}
