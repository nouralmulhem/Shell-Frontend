import { useRecruitmentContext } from '../../contexts/RecruitmentContext';
import AboutMe from './AboutMe/AboutMe';

function Recruitment() {
  const { step } = useRecruitmentContext();
  return (
    step === 1 ? <AboutMe />
      : step === 2 ? <h1>Experience you have</h1>
        : <h1>What do you know about us</h1>
  );
}

export default Recruitment;
