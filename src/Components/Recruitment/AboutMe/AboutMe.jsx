import { Box } from '@mui/material';
import { useState } from 'react';
import { useRecruitmentContext } from '../../../contexts/RecruitmentContext';
import Page1 from '../page1/RecruimentPage1';
import { BackButton, ButtonsContainer, NextButton } from '../styles';
import { Img } from './style';

function AboutMe() {
  // eslint-disable-next-line no-unused-vars
  const { setStep, info, setInfo } = useRecruitmentContext();

  // user data

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [faculty, setFaculty] = useState('');
  const [major, setMajor] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  return (
    <>
      <Box sx={{
        display: 'flex', flexDirection: 'row', justifyContent: 'center', my: 2,
      }}
      >
        <Box sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mx: 1,
        }}
        >
          <Box component="h3" sx={{ fontSize: '20px' }}>
            INFO ABOUT YOU
          </Box>
          <Box component="div" sx={{ fontSize: '12px' }}>Tell us more about you</Box>
        </Box>
        <Img src="../../../1666309625881.jpg" />
      </Box>
      <form>
        <Page1
          info={info}
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
          setWhatsApp={setWhatsApp}
          setFaculty={setFaculty}
          setMajor={setMajor}
          setGraduationYear={setGraduationYear}
        />
        <ButtonsContainer>
          <BackButton
            onClick={() => {
              window.location.href = '/';
            }}
            type="submit"
          >
            Home
          </BackButton>
          <NextButton
            onClick={() => {
              setStep({
                step: 2,
                progress: 20,
              });
              // Save Submitted Date
              setInfo((state) => ({
                ...state,
                name,
                email,
                phone,
                whatsApp,
                faculty,
                major,
                graduationYear,
              }));
            }}
            type="submit"
          >
            Next
          </NextButton>
        </ButtonsContainer>
      </form>
    </>
  );
}

export default AboutMe;
