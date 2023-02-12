import {
  Autocomplete, Box, Slider, TextField,
} from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import {
  EleBox, FormBox, FormText, PageBox, QImage,
} from './styles';

function valuetext(value) {
  return `${value}°C`;
}

const subTeams = ['Web development ',
  'Marketing',
  'Video Editing ',
  'Graphic design',
  'Puplic Relation & Fund rising ',
  'Supply chain ',
  'Power Electronics ',
  'Electrical embedded',
  'Power Transimission ',
  'Vechile dynamic ',
  'Engine ',
  'Body & chassis',
  'R&D',
  'Autonoumous Development ',
  'Autonoumous Embedded'];

export default function RecPage3({
  error, questions, setQuestions,
}) {
  function handleAnswer(num, answer) {
    const myNextList = [...questions];
    myNextList[num] = answer;
    setQuestions(myNextList);
  }

  const [state, setState] = useState({
    office: true,
    solidworks: false,
    matlab: false,
  });

  const handleChange = (e) => {
    const myNextList = [...questions];
    myNextList[3] = {
      ...state,
      [e.target.name]: e.target.checked,
    };
    setQuestions(myNextList);

    setState({
      ...state,
      [e.target.name]: e.target.checked,
    });
  };

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  const { office, solidworks, matlab } = state;

  return (
    <>
      <PageBox>
        <EleBox>
          <FormText variant="h6">
            Experience
          </FormText>
          <FormText variant="h6">
            you have
          </FormText>
        </EleBox>
        <EleBox><QImage src="led.png" /></EleBox>
      </PageBox>
      <FormBox>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={subTeams}
          defaultValue={questions[0]}
          // getOptionLabel={(option) => option}
          onChange={(e) => handleAnswer(0, e.target.innerText)}
          error={error && [...questions][0].length <= 0}
          renderInput={(params) => (
            <TextField
              {...params}
              label="sub-team"
              fullWidth
              required
              autoFocus
              defaultValue={questions[0]}

            />
          )}
        />
        <br />
        <TextField
          label="Why You choose that sub-team?"
          placeholder=""
          defaultValue={questions[1]}
          fullWidth
          required
          multiline
          onChange={(e) => handleAnswer(1, e.target.value)}
          error={error && [...questions][1].length <= 0}
        />
        <br />
        <TextField
          label="What are your Previous Activites?"
          placeholder=""
          defaultValue={questions[2]}
          fullWidth
          required
          multiline
          onChange={(e) => handleAnswer(2, e.target.value)}
          error={error && [...questions][2].length <= 0}
        />
        <br />
        <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Software Programs?</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={office} onChange={handleChange} name="office" />
            }
              label="Office"
            />
            <FormControlLabel
              control={
                <Checkbox checked={solidworks} onChange={handleChange} name="solidworks" />
            }
              label="Solidworks"
            />
            <FormControlLabel
              control={
                <Checkbox checked={matlab} onChange={handleChange} name="matlab" />
            }
              label="Matlab"
            />
          </FormGroup>
        </FormControl>
        <br />
        <TextField
          label="Others"
          placeholder=""
          defaultValue={questions[4]}
          multiline
          sx={{ width: '50%' }}
          onChange={(e) => handleAnswer(4, e.target.value)}
        />
        <br />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            label="What is your level in English (0_10)"
            placeholder=""
            disabled
            required
            sx={{ width: '50%' }}
          />
          <Slider
            aria-label="Temperature"
            defaultValue={questions[5]}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={100}
            sx={{ width: '45%', marginLeft: '5%' }}
            onChange={(e) => handleAnswer(5, e.target.value)}
          />

        </Box>
        <br />
        <TextField
          label="Linkedin Profile Link"
          placeholder=""
          defaultValue={questions[6]}
          fullWidth
          multiline
          onChange={(e) => handleAnswer(6, e.target.value)}
        />
        <br />

        <TextField
          label="link CV in drive"
          placeholder=""
          defaultValue={questions[7]}
          fullWidth
          multiline
          onChange={(e) => handleAnswer(7, e.target.value)}
        />
      </FormBox>

    </>

  );
}
