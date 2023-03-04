import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import {
  FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';
import {
  Container, FirstRow, InputConatiner, Row,
} from './style';

export default function Page1(props) {
  const {
    whatsApp, name, email, phone, error, info, setName, setEmail, setPhone, setWhatsApp, setFaculty, setMajor, setGraduationYear,
  } = props;

  const checkPhone = (e, data) => {
    const num = e?.target?.value;
    const start = num?.substring(0, 3);
    if ((start === '010' || start === '011' || start === '012' || start === '015') && num?.length === 11) {
      if (data === 'phone') { setPhone(num); } else { setWhatsApp(num); }
    } else if (data === 'phone') {
      setPhone('');
    } else {
      setWhatsApp('');
    }
  };

  const handleChange = (event) => {
    setFaculty(event.target.value);
  };
  const handleChangeGp = (event) => {
    setGraduationYear(event.target.value);
  };
  return (
    <Container>
      <FirstRow>
        <InputConatiner>
          <AccountCircle sx={{ color: 'action.active', mr: 1 }} />
          <TextField
            defaultValue={info?.name}
            label="Name"
            variant="standard"
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
            error={error && (name?.length <= 0 || name === undefined)}
          />
        </InputConatiner>
        <InputConatiner>
          <EmailRoundedIcon sx={{ color: 'action.active', mr: 1 }} />
          <TextField
            defaultValue={info?.email}
            label="Email"
            variant="standard"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            error={(error && (email?.length <= 0 || email === undefined)) || (error && !email?.includes('@'))}
          />
        </InputConatiner>
      </FirstRow>
      <Row>
        <InputConatiner>
          <LocalPhoneRoundedIcon sx={{ color: 'action.active', mr: 1 }} />
          <TextField
            defaultValue={info?.phone}
            label="Phone"
            variant="standard"
            type="text"
            onChange={(e) => checkPhone(e, 'phone')}
            required
            error={error && (phone?.length <= 0 || phone === undefined)}
          />
        </InputConatiner>
        <InputConatiner>
          <PhoneIphoneRoundedIcon sx={{ color: 'action.active', mr: 1 }} />
          <TextField
            defaultValue={info?.whatsApp}
            label="Whats app Number"
            variant="standard"
            type="text"
            onChange={(e) => checkPhone(e, 'whats')}
            required
            error={error && (whatsApp?.length <= 0 || whatsApp === undefined)}
          />
        </InputConatiner>
      </Row>
      <Row>
        {/* <InputConatiner>
          <AccountBalanceRoundedIcon sx={{ color: 'action.active', mr: 1 }} />
          <TextField
            defaultValue={info?.faculty}
            label="Faculty"
            variant="standard"
            type="text"
            onChange={(e) => setFaculty(e.target.value)}
          />
        </InputConatiner> */}
        <InputConatiner>
          <AccountBalanceRoundedIcon sx={{ color: 'action.active', mr: 1 }} />
          <FormControl variant="standard" sx={{ minWidth: 200 }}>
            <InputLabel id="demo-simple-select-standard-label">Faculty</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              defaultValue={info?.faculty}
              onChange={handleChange}
              label="Faculty"
            >
              <MenuItem value="cairoUniversity">Cairo University</MenuItem>
              <MenuItem value="ainShamsUniversity">Ain Shams University</MenuItem>
              <MenuItem value="mansouraUniversity">Mansoura University</MenuItem>
              <MenuItem value="alexandriaUniversity">Alexandria University</MenuItem>
              <MenuItem value="helwanUniversity">Helwan University</MenuItem>
              <MenuItem value="theBritishUniversityInEgypt">The British University in Egypt</MenuItem>
              <MenuItem value="modernScienceAndArtsUniversity">Modern Science and Arts University</MenuItem>
              <MenuItem value="theAmericanUniversityInCairo">The American University in Cairo</MenuItem>
              <MenuItem value="sixthOfOctoberUniversity">Sixth of October University</MenuItem>
              <MenuItem value="germanUniversity">German University</MenuItem>
              <MenuItem value="misrInternationalUniversity">Misr International University</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </InputConatiner>
        <InputConatiner>
          <GradeRoundedIcon sx={{ color: 'action.active', mr: 1 }} />
          <TextField
            defaultValue={info?.major}
            label="Major"
            variant="standard"
            type="text"
            onChange={(e) => setMajor(e.target.value)}
          />
        </InputConatiner>
      </Row>
      <Row>
        <InputConatiner>
          <SchoolRoundedIcon sx={{ color: 'action.active', mr: 1 }} />
          <FormControl variant="standard" sx={{ minWidth: 200 }}>
            <InputLabel id="demo-simple-select-standard-label1">Graduation Year</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label1"
              id="demo-simple-select-standard1"
              defaultValue={info?.graduationYear}
              onChange={handleChangeGp}
              label="GraduationYear"
            >
              <MenuItem value="2023">2023</MenuItem>
              <MenuItem value="2024">2024</MenuItem>
              <MenuItem value="2025">2025</MenuItem>
              <MenuItem value="2026">2026</MenuItem>
              <MenuItem value="2027">2027</MenuItem>
            </Select>
          </FormControl>
        </InputConatiner>
      </Row>
    </Container>
  );
}
