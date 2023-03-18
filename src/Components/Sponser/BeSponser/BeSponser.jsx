import { Box, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Swal from 'sweetalert2';
// axios
// import axios from '../../services/instance'
import axios from 'axios';
import { AccountCircle } from '@mui/icons-material';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import BusinessIcon from '@mui/icons-material/Business';
import { useState } from 'react';
import {
  BoxObj, FirstRow, InputConatiner, Row, SubmitConatiner,
  // Upload,
} from './style';
import { Title } from '../style';

export default function BeSponser() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if ((name?.length <= 0 || company?.length <= 0 || phone?.length <= 0 || company === undefined || phone === undefined || name === undefined)) {
      setError(true);
    } else {
      axios.post('https://cuert-backend-api.herokuapp.com/sponsors/apply/new/', {
        name,
        company,
        phone_number: phone,
      })
        .then((response) => {
          console.log(response);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'We will contact you ',
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
    }
  };

  const checkPhone = (e) => {
    const num = e?.target?.value;
    const start = num?.substring(0, 3);
    if ((start === '010' || start === '011' || start === '012' || start === '015') && num?.length === 11) {
      setPhone(num);
    } else {
      setPhone('');
    }
  };
  return (
    <div className="FormSponser">
      <BoxObj onSubmit={handleClick}>
        <Box sx={{ width: '50%', marginBottom: 2 }}>
          <Title>Become our Sponsors</Title>
        </Box>
        <FirstRow>
          <InputConatiner>
            <AccountCircle sx={{ color: 'action.active', mr: 1 }} />
            <TextField
              label="Name"
              variant="standard"
              type="text"
              fullWidth
              onChange={(e) => setName(e.target.value)}
              required
              error={error && (name?.length <= 0 || name === undefined)}
              InputProps={{ inputProps: { min: 1, max: 50 } }}
            />
          </InputConatiner>
          <InputConatiner>
            <BusinessIcon sx={{ color: 'action.active', mr: 1 }} />
            <TextField
              label="Company"
              variant="standard"
              type="text"
              fullWidth
              onChange={(e) => setCompany(e.target.value)}
              required
              error={error && (name?.length <= 0 || name === undefined)}
              InputProps={{ inputProps: { min: 1, max: 50 } }}
            />
          </InputConatiner>
        </FirstRow>
        <Row>
          <InputConatiner>
            <LocalPhoneRoundedIcon sx={{ color: 'action.active', mr: 1 }} />
            <TextField
              label="Phone"
              variant="standard"
              type="text"
              fullWidth
              onChange={(e) => checkPhone(e)}
              required
              error={error && (phone?.length <= 0 || phone === undefined)}
            />
          </InputConatiner>
          <SubmitConatiner>
            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              Submit
            </Button>
          </SubmitConatiner>
        </Row>

      </BoxObj>
    </div>

  );
}
