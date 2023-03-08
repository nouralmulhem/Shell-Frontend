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
    graduationYear, major, faculty,
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
  const handleChangeMg = (event) => {
    setMajor(event.target.value);
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
              required
              error={error && (faculty?.length <= 0 || faculty === undefined)}
            >
              <MenuItem value="Cairo University">Cairo University</MenuItem>
              <MenuItem value="Ain Shams University">Ain Shams University</MenuItem>
              <MenuItem value="Mansoura University">Mansoura University</MenuItem>
              <MenuItem value="Alexandria University">Alexandria University</MenuItem>
              <MenuItem value="Helwan University">Helwan University</MenuItem>
              <MenuItem value="The British University in Egypt (BUE)">The British University in Egypt (BUE)</MenuItem>
              <MenuItem value="Modern Sciences and Arts University (MSA)">Modern Sciences and Arts University (MSA)</MenuItem>
              <MenuItem value="Misr University for Science and Technology (MUST)">Misr University for Science and Technology (MUST)</MenuItem>
              <MenuItem value="The American University in Cairo (AUC)">The American University in Cairo (AUC)</MenuItem>
              <MenuItem value="Sixth of October University">Sixth of October University</MenuItem>
              <MenuItem value="German University in Cairo (GUC)">German University in Cairo (GUC)</MenuItem>
              <MenuItem value="Misr International University (MIU)">Misr International University (MIU)</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </InputConatiner>
        <InputConatiner>
          <GradeRoundedIcon sx={{ color: 'action.active', mr: 1 }} />
          {/* <TextField
            defaultValue={info?.major}
            label="Major"
            variant="standard"
            type="text"
            onChange={(e) => setMajor(e.target.value)}
          /> */}
          <FormControl variant="standard" sx={{ minWidth: 200 }}>
            <InputLabel id="demo-simple-select-standard-label11">Major</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label11"
              id="demo-simple-select-standard11"
              defaultValue={info?.major}
              onChange={handleChangeMg}
              label="Major"
              required
              error={error && (major?.length <= 0 || major === undefined)}
            >
              <MenuItem value="Computer">Computer</MenuItem>
              <MenuItem value="Biomedical">Biomedical</MenuItem>
              <MenuItem value="Electrical">Electrical</MenuItem>
              <MenuItem value="Electronics and Communication">Electronics and Communication</MenuItem>
              <MenuItem value="Mechanical">Mechanical</MenuItem>
              <MenuItem value="Civil">Civil</MenuItem>
              <MenuItem value="Archeticture">Archeticture</MenuItem>
              <MenuItem value="Chemistry">Chemistry</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
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
              required
              error={error && (graduationYear?.length <= 0 || graduationYear === undefined)}
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
