import { TextField } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import {
  EleBox, FormBox, FormText, PageBox, QImage,
} from './styles';

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
    setState({
      ...state,
      [e.target.name]: e.target.checked,
    });
  };

  const { office, solidworks, matlab } = state;
  //   const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

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
        <TextField
          id="outlined-textarea"
          label="sub-team"
          placeholder=""
          fullWidth
          required
          autoFocus
          onChange={(e) => handleAnswer(0, e.target.value)}
          error={error && [...questions][0].length <= 0}
        />
        <br />
        <TextField
          label="Why You choose that sub-team?"
          placeholder=""
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
          fullWidth
          required
          multiline
          onChange={(e) => handleAnswer(2, e.target.value)}
          error={error && [...questions][2].length <= 0}
        />
        <br />
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
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
        //   fullWidth
        //   required
          multiline
          sx={{ width: '50%' }}
          onChange={(e) => handleAnswer(3, e.target.value)}
          error={error && [...questions][3].length <= 0}
        />
        <br />
        <TextField
          label="What is your level in English (0_10)"
          placeholder=""
          disabled
          required
          sx={{ width: '50%' }}
        //   onChange={(e) => handleAnswer(7, e.target.value)}
        //   error={error && [...questions][7].length <= 0}
        />
        <br />
        <TextField
          label="Linkedin Profile Link"
          placeholder=""
          fullWidth
          multiline
          onChange={(e) => handleAnswer(5, e.target.value)}
          error={error && [...questions][5].length <= 0}
        />
        <br />

        <TextField
          label="link CV in drive"
          placeholder=""
          fullWidth
          multiline
          onChange={(e) => handleAnswer(6, e.target.value)}
          error={error && [...questions][6].length <= 0}
        />
      </FormBox>

    </>

  );
}
