import { useRecruitmentContext } from '../../../contexts/RecruitmentContext';
import { BackButton, ButtonsContainer, NextButton } from '../styles';

function AboutMe() {
  // eslint-disable-next-line no-unused-vars
  const { setStep, info, setInfo } = useRecruitmentContext();

  return (
    <>
      <h1>
        AboutMe
      </h1>
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
              name: 'Basma Elhoseny',
            }));
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
