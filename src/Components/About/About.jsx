import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import {
  BlockedBox, MissionVission, Title,
} from './styles';
import TimeLine from './TimeLine';

const steps = [
  {
    label: 'Cairo University Eco-Racing Team (CUERT)',
    description: [`it is the 1st team from Cairo University to
        participate Globally in the Shell Eco-Marathon Competition.`],
  },
  {
    label: 'About the team',
    description:
      [`We are a highly diverse competitive team that includes 
        100 students of different gender, background, and engineering studies
        (Electrical, Mechanical, Aerospace, Communications, Computer, and Electronics)`],
  },
  {
    label: 'Our design',
    description: [`In our design and building process,
        we conduct extensive applied
        research and experiments in:`, '•Electric Vehicles', '•Fuel Emissions', `•Manufacturing & Advanced
        materials`, '•Automation.', `•Sustainability of Energy and
        Materials`],
  },
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'car1',
    imgPath:
      'car1.jpg',
  },
  {
    label: 'car2',
    imgPath:
      'car2.png',
  },
  {
    label: 'car3',
    imgPath:
      'car3.png',
  },
  {
    label: 'team',
    imgPath:
      'team.png',
  },
  {
    label: 'shell',
    imgPath:
      'shell.png',
  },
];

export default function About() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const theme = useTheme();
  const [activeStepImg, setActiveStepImg] = useState(0);

  const handleStepChange = (step) => {
    setActiveStepImg(step);
  };

  return (
    <BlockedBox>
      <Box sx={{
        maxWidth: 1200,
        flexGrow: 1,
        m: 5,
        display: 'flex',
        [theme.breakpoints.between('0', '650')]: {
          display: 'block',
        },
      }}
      >
        <Title variant="h1">who we are?</Title>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStepImg}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <Box key={step.label} sx={{ margin: 'auto', maxWidth: '935px' }}>
              {Math.abs(activeStepImg - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: 'block',
                    maxWidth: 700,
                    alignSelf: 'center',
                    margin: 'auto',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </Box>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
      <Box sx={{
        width: '100%',
        padding: '10px 200px',
        [theme.breakpoints.between('0', '650')]: {
          padding: '10px 50px',
        },
      }}
      >
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                {step.label}
              </StepLabel>
              <StepContent>
                <Box>
                  {step.description.map((text, index) => (
                    <Typography sx={{ fontSize: 20 }} key={`${index + 0}`}>{text}</Typography>
                  ))}
                </Box>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                      disabled={index === steps.length - 1}
                    >
                      Continue
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box sx={{ m: 4 }}>
        <Title timeline="true">Our History</Title>
        <TimeLine />
      </Box>
      <Box sx={{
        display: 'flex', m: 3, justifyContent: 'space-evenly', width: '100%',
      }}
      >
        <Box sx={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: 300,
        }}
        >
          <MissionVission><EmojiEventsIcon sx={{ width: '90%', height: '90%', transform: 'translate(-15px,0)' }} /></MissionVission>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1b4444', marginBottom: 1 }}>Mission</Typography>
          <Typography variant="body">
            To design and build Ultra-efficient and
            environmentally-friendly vehicles that
            arrive at fully optimized energy
            solutions
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: 300,
        }}
        >
          <MissionVission><RemoveRedEyeIcon sx={{ width: '90%', height: '90%', transform: 'translate(-15px,0)' }} /></MissionVission>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1b4444', marginBottom: 1 }}>Vission</Typography>
          <Typography variant="body">
            We envision reaching the top of all
            Shell Eco-Marathon teams worldwide
            by excelling automotive assembly,
            continuous research for the optimal
            way to achieve that and learning from
            our past experiences.
          </Typography>
        </Box>
      </Box>
    </BlockedBox>
  );
}
