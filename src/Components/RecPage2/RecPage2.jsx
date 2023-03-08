import { Autocomplete, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';
// import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import { useEffect, useState } from 'react';
import { useEffect } from 'react';
import {
  EleBox, FormBox, FormText, PageBox, QImage,
} from './styles';

const theme = createTheme({
  palette: {
    // primary: {
    //   // Purple and green play nicely together.
    //   main: purple[500],
    // },
    secondary: {
      // This is green.A700 as hex.
      main: '#1565c0',
    },
  },
});

const subTeams = ['Electrical',
  'Electrical Embedded',
  'Autonomous Development',
  'Autonomous Embedded',
  'Power Transmission',
  'Power Electronics',
  'Body & Chassis',
  'Engine',
  'Vehicle Dynamic',
  'Supply Chain',
  'R&D',
  'Web Development',
  'Video Editing',
  'Graphic Design',
  'Marketing',
  'Public Relation & Fundraising'];

export default function RecPage2({
  error, questions, setQuestions,
}) {
  function handleAnswer(num, answer) {
    const myNextList = [...questions];
    myNextList[num] = answer;
    setQuestions(myNextList);
  }

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <ThemeProvider theme={theme}>
      <PageBox>
        <EleBox>
          <FormText variant="h6">
            What do you know
            about us ?
          </FormText>
        </EleBox>
        <EleBox><QImage src="Qmark.png" /></EleBox>
      </PageBox>
      <FormBox>
        <TextField
          defaultValue={questions[0]}
          id="outlined-textarea"
          label="What Do you know about Shell Eco-Marathon?"
          placeholder=""
          multiline
          fullWidth
        //   sx={{ bgcolor: '#C7CDFD', color: '#174EA6' }}
        //   color="secondary"
          required
          autoFocus
          onChange={(e) => handleAnswer(0, e.target.value)}
          error={error && [...questions][0].length <= 0}
        />
        <br />
        <FormControl required error={error && [...questions][1].length <= 0}>
          <FormLabel>Did you apply to join our team in any previous years?</FormLabel>
          <RadioGroup
            row
            name="row-radio-buttons-group"
            required
            onChange={(e) => handleAnswer(1, e.target.value)}
            defaultValue={questions[1]}

          >
            <FormControlLabel value="Yes" control={<Radio />} label="yes" />
            <FormControlLabel value="No" control={<Radio />} label="no" />
          </RadioGroup>
        </FormControl>
        <br />
        {[...questions][1] === 'Yes' && (
        <>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={subTeams}
            defaultValue={questions[2]}
            onChange={(e) => handleAnswer(2, e.target.innerText)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Mention which sub-team you applied for"
                fullWidth
                required
                autoFocus
                error={error && (![...questions][2] || [...questions][2].length <= 0)}
                defaultValue={questions[2]}
              />
            )}
          />
          <br />
        </>
        )}
        <TextField
          label="What do you expect to gain from joining our team?"
          placeholder=""
          fullWidth
          required
          multiline
          onChange={(e) => handleAnswer(3, e.target.value)}
          error={error && [...questions][3].length <= 0}
          defaultValue={questions[3]}

        />
        <br />
        <TextField
          label="What makes you feel you are a perfect candidate for our team?"
          placeholder=""
          fullWidth
          required
          multiline
          onChange={(e) => handleAnswer(4, e.target.value)}
          error={error && [...questions][4].length <= 0}
          defaultValue={questions[4]}

        />
        <br />
        <FormControl required error={error && [...questions][5].length <= 0}>
          <FormLabel>Are you a part of any student activities for the next year?</FormLabel>
          <RadioGroup
            row
            name="row-radio-buttons-group"
            required
            onChange={(e) => handleAnswer(5, e.target.value)}
            defaultValue={questions[5]}

          >
            <FormControlLabel value="Yes" control={<Radio />} label="yes" />
            <FormControlLabel value="No" control={<Radio />} label="no" />
          </RadioGroup>
        </FormControl>
        <br />
        {[...questions][5] === 'Yes' && (
        <>
          <TextField
            label="Mention them and your responsibilities"
            placeholder=""
            fullWidth
            required
            multiline
            onChange={(e) => handleAnswer(7, e.target.value)}
            error={error && [...questions][7].length <= 0}
            defaultValue={questions[7]}

          />
          <br />
        </>
        )}
        <TextField
          label="How many hours are you willing to give the team weekly?"
          placeholder=""
          fullWidth
          required
          type="number"
          InputProps={{ inputProps: { min: 1, max: 40 } }}
          onChange={(e) => handleAnswer(6, e.target.value)}
          error={error && [...questions][6].length <= 0}
          defaultValue={questions[6]}
        />
      </FormBox>

    </ThemeProvider>

  );
}
