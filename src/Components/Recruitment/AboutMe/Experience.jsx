import { useRecruitmentContext } from '../../../contexts/RecruitmentContext';
import { BackButton, ButtonsContainer, NextButton } from '../styles';

function Experience() {
  // eslint-disable-next-line no-unused-vars
  const { setStep, info, setInfo } = useRecruitmentContext();

  return (
    <div>
      Experience
      <ButtonsContainer>
        <BackButton
          onClick={() => {
            setStep({
              step: 1,
              progress: 0,
            });

            // Save Submitted Date VIP
            setInfo((state) => ({
              ...state,
              Experience: 'Added',
            }));
          }}
          type="submit"
        >
          Back
        </BackButton>

        <NextButton
          onClick={() => {
            setStep({
              step: 3,
              progress: 40,
            });

            // Save Submitted Date
            setInfo((state) => ({
              ...state,
              Experience: 'Added',
            }));
          }}
          type="submit"
        >
          Next
        </NextButton>
      </ButtonsContainer>
    </div>
  );
}

export default Experience;
