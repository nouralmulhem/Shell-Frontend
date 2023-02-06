import { useRecruitmentContext } from '../../../contexts/RecruitmentContext';
import { NextButton } from '../styles';

function AboutMe() {
  // eslint-disable-next-line no-unused-vars
  const { setStep, info, setInfo } = useRecruitmentContext();

  return (
    <>
      <h1>
        AboutMe
      </h1>
      <NextButton onClick={() => setStep(2)} type="submit">Next</NextButton>
    </>
  );
}

export default AboutMe;
