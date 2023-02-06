// Context
import { useRecruitmentContext } from '../../contexts/RecruitmentContext';

// Components
import AboutMe from './AboutMe/AboutMe';
import AboutUs from './AboutMe/AboutUs';
import Experience from './AboutMe/Experience';

// Styles
import { BorderLinearProgress } from './styles';

function Recruitment() {
  const { step } = useRecruitmentContext();
  return (
    <>
      {step.step === 1 ? <AboutMe />
        : step.step === 2 ? <Experience />
          : <AboutUs />}
      <BorderLinearProgress variant="determinate" value={step.progress} />
    </>
  );
}

export default Recruitment;
