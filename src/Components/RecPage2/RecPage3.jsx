import {
  Autocomplete, Box, Button, Chip, Paper, Slider, TextField,
} from '@mui/material';
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
  'Public Relation & Fund rising ',
  'Supply chain ',
  'Power Electronics ',
  'Electrical embedded',
  'Power Transmission ',
  'Vehicle dynamic ',
  'Engine ',
  'Body & chassis',
  'R&D',
  'Autonomous Development ',
  'Autonomous Embedded'];

export default function RecPage3({
  error, questions, setQuestions,
}) {
  function handleAnswer(num, answer) {
    const myNextList = [...questions];
    myNextList[num] = answer;
    setQuestions(myNextList);
  }

  const [skills, setSkills] = useState([...questions[3]]);
  const [skillAdd, setSkillAdd] = useState();

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  const handleDelete = (index) => {
    const array = [...skills];
    array.splice(index, 1);
    setSkills(array);
    handleAnswer(3, array);
  };

  const handleAdd = () => {
    if (skillAdd && skillAdd.length > 0) {
      setSkills([
        ...skills,
        skillAdd,
      ]);
      handleAnswer(3, [
        ...skills,
        skillAdd,
      ]);
      console.log(skillAdd);
    }
  };

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
        <Box
          sx={{
            display: 'flex',
            '& > :not(style)': {
              // width: '50%',
              minHeight: 56,
            },
          }}
        >
          <TextField
            id="standard-name"
            label="Skills"
            sx={{ width: '50%' }}
            onChange={(e) => setSkillAdd(e.target.value)}
            InputProps={{
              endAdornment: <Button variant="contained" onClick={handleAdd}>Add</Button>,
            }}
          />
          <Paper
            sx={{
              bgcolor: 'transparent', p: 1, marginLeft: '5%', width: '45%',
            }}
            elevation={2}
          >
            {skills.map((skill, index) => (
              <Chip key={`${index + 0}`} label={skill} variant="outlined" color="primary" onDelete={() => handleDelete(index)} sx={{ bgcolor: '#e3e3e3', m: '2px' }} />
            ))}
          </Paper>
        </Box>
        <br />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            label="What is your level in English (0_10)"
            placeholder=""
            disabled
            required
            sx={{ width: '50%' }}
            error={error && [...questions][4].length <= 0}
          />
          <Slider
            aria-label="Temperature"
            defaultValue={questions[4]}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={100}
            sx={{ width: '45%', marginLeft: '5%' }}
            onChange={(e) => handleAnswer(4, e.target.value)}
          />

        </Box>
        <br />
        <TextField
          label="Linkedin Profile Link"
          placeholder=""
          defaultValue={questions[5]}
          fullWidth
          multiline
          onChange={(e) => handleAnswer(5, e.target.value)}
        />
        <br />

        <TextField
          label="link CV in drive"
          placeholder=""
          defaultValue={questions[6]}
          fullWidth
          multiline
          onChange={(e) => handleAnswer(6, e.target.value)}
        />
      </FormBox>

    </>

  );
}
