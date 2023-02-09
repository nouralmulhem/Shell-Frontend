import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import {
  Container, FirstRow, InputConatiner, Row,
} from './style';

export default function Page1(props) {
  const {
    info, setName, setEmail, setPhone, setWhatsApp, setFaculty, setMajor, setGraduationYear,
  } = props;

  const checkPhone = (e, data) => {
    const num = e?.target?.value;
    const start = num?.substring(0, 3);
    if ((start === '010' || start === '011' || start === '012' || start === '015') && num?.length === 11) {
      if (data === 'phone') { setPhone(num); } else { setWhatsApp(num); }
    }
  };
  return (
    <Container>
      <FirstRow>
        <InputConatiner>
          <AccountCircle sx={{ color: 'action.active', mr: 1 }} />
          <TextField defaultValue={info?.name} label="Name" variant="standard" type="text" onBlur={(e) => setName(e.target.value)} required />
        </InputConatiner>
        <InputConatiner>
          <EmailRoundedIcon sx={{ color: 'action.active', mr: 1 }} />
          <TextField defaultValue={info?.email} label="Email" variant="standard" type="emial" onBlur={(e) => setEmail(e.target.value)} required />
        </InputConatiner>
      </FirstRow>
      <Row>
        <InputConatiner>
          <LocalPhoneRoundedIcon sx={{ color: 'action.active', mr: 1 }} />
          <TextField defaultValue={info?.phone} label="Phone" variant="standard" type="text" onBlur={(e) => checkPhone(e, 'phone')} required />
        </InputConatiner>
        <InputConatiner>
          <PhoneIphoneRoundedIcon sx={{ color: 'action.active', mr: 1 }} />
          <TextField defaultValue={info?.whatsApp} label="Whats app Number" variant="standard" type="text" onBlur={(e) => checkPhone(e, 'whats')} />
        </InputConatiner>
      </Row>
      <Row>
        <InputConatiner>
          <AccountBalanceRoundedIcon sx={{ color: 'action.active', mr: 1 }} />
          <TextField defaultValue={info?.faculty} label="Faculty" variant="standard" type="text" onBlur={(e) => setFaculty(e.target.value)} />
        </InputConatiner>
        <InputConatiner>
          <GradeRoundedIcon sx={{ color: 'action.active', mr: 1 }} />
          <TextField defaultValue={info?.major} label="Major" variant="standard" type="text" onBlur={(e) => setMajor(e.target.value)} />
        </InputConatiner>
      </Row>
      <Row>
        <InputConatiner>
          <SchoolRoundedIcon sx={{ color: 'action.active', mr: 1 }} />
          <TextField defaultValue={info?.graduationYear} label="Graduation Year" variant="standard" type="number" onBlur={(e) => setGraduationYear(e.target.value)} />
        </InputConatiner>
      </Row>
    </Container>
  );
}
