import {  Button } from '@mui/material';
import { BoxObj, Description, Title, Upload } from './styles';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import Swal from "sweetalert2";  

export default function Form() {

  const handleClick = (e) => {
      e.preventDefault();
      axios.post("http://localhost:8000/posts", {
        title: document.getElementById('title').value,
        description: document.getElementById('desc').value,
        image: document.getElementById('img').value
      })
      .then((response) => {
        console.log(response);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(()=>{
          document.location.href ='http://localhost:3000';
        },1500)
       
      });
  }

  return (
    <div className='FormHeader'>
      <BoxObj onSubmit={handleClick}>
        <Title id='title' label="Title" variant="standard" required />
        <Description
          id='desc'
          minRows={15}
          placeholder="Description"
          required
        />

        <Upload
          variant="contained"
          component="label"
        >
          Upload File
          <input
            id='img'
            type="file"
            hidden
          />
        </Upload>

        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Submit
        </Button>

      </BoxObj>
    </div>
    
  );
}
