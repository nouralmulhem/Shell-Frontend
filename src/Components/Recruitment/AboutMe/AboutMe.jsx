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

  const [name, setName] = useState(info?.name);
  const [email, setEmail] = useState(info?.email);
  const [phone, setPhone] = useState(info?.phone);
  const [whatsApp, setWhatsApp] = useState(info?.whatsApp);
  const [faculty, setFaculty] = useState(info?.faculty);
  const [major, setMajor] = useState(info?.major);
  const [graduationYear, setGraduationYear] = useState(info?.graduationYear);

  const [error, setError] = useState(false);

  const handleNext = () => {
    console.log(name, email, phone, whatsApp);
    if ((name?.length <= 0 || email?.length <= 0 || phone?.length <= 0 || whatsApp?.length <= 0 || !email?.includes('@')) || email === undefined || phone === undefined || whatsApp === undefined || name === undefined) {
      setError(true);
    } else {
      setStep({
        step: 2,
        progress: 40,
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
    }
  };
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
        <Img src="smile.png" />
      </Box>
      <Page1
        error={error}
        info={info}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setWhatsApp={setWhatsApp}
        setFaculty={setFaculty}
        setMajor={setMajor}
        setGraduationYear={setGraduationYear}
        name={name}
        email={email}
        phone={phone}
        whatsApp={whatsApp}
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
            handleNext();
          }}
          type="submit"
        >
          Next
        </NextButton>
      </ButtonsContainer>
    </>
  );
}

export default AboutMe;
