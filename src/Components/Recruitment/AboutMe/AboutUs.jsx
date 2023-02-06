import { useRecruitmentContext } from '../../../contexts/RecruitmentContext';
import { BackButton, ButtonsContainer, NextButton } from '../styles';

function AboutUs() {
  // eslint-disable-next-line no-unused-vars
  const { setStep, info, setInfo } = useRecruitmentContext();

  return (
    <div>
      AboutUs
      <ButtonsContainer>
        <BackButton
          onClick={() => {
            setStep({
              step: 2,
              progress: 50,
            });

            // Save Submitted Date VIP
            setInfo((state) => ({
              ...state,
              AboutUs: 'Added',
            }));
          }}
          type="submit"
        >
          Back
        </BackButton>

        <NextButton
          onClick={() => {
            // Save Submitted Date
            setInfo((state) => ({
              ...state,
              AboutUs: 'Added',
            }));
          }}
          type="submit"
        >
          Submit
        </NextButton>
      </ButtonsContainer>

    </div>
  );
}

export default AboutUs;
