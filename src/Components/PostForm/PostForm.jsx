import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Swal from 'sweetalert2';
// axios
// import axios from '../../services/instance'
import axios from 'axios';
import {
  BoxObj, Description, Title,
  // Upload,
} from './styles';

export default function PostForm() {
  const handleClick = (e) => {
    e.preventDefault();
    axios.post('https://cuert-backend-api.herokuapp.com/members/posts/add/', {
      title: document.getElementById('title').value,
      body: document.getElementById('desc').value,
      image: document.getElementById('img').value,
    })
      .then((response) => {
        console.log(response);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
        if (response.status === 401) {
          window.location.pathname = 'login';
        }
        setTimeout(() => {
          document.location.href = './';
        }, 1500);
      }).catch((error) => {
        console.log(error);
        if (error?.response?.data?.email || error?.response?.data?.username) {
          alert(`${error?.response?.data?.email}\n${error?.response?.data?.username}`);
        } else if (error?.response?.data?.password !== undefined) {
          alert(error?.response?.data?.password);
        }
      });
  };

  return (
    <div className="FormHeader">
      <BoxObj onSubmit={handleClick}>
        <Title id="title" label="Title" variant="standard" required />
        <Description
          id="desc"
          minRows={15}
          placeholder="Description"
          required
        />
        <Title id="img" label="Image link" variant="standard" />
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Submit
        </Button>

      </BoxObj>
    </div>

  );
}
