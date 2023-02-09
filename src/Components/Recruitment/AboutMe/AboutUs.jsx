import { useState } from 'react';
import { useRecruitmentContext } from '../../../contexts/RecruitmentContext';
import RecPage3 from '../../RecPage2/RecPage3';
import { BackButton, ButtonsContainer, NextButton } from '../styles';

function AboutUs() {
  // eslint-disable-next-line no-unused-vars
  const { setStep, info, setInfo } = useRecruitmentContext();
  const [error, setError] = useState(false);
  // const [next, setNext] = useState(false);
  const [questions, setQuestions] = useState(['', '', '', '', '', '', '', '']);

  const handleSubmit = () => {
    if (questions.slice(0, 7).filter((q) => q.length <= 0).length !== 0) {
      setError(true);
    } else {
      // Save Submitted Date
      setInfo((state) => ({
        ...state,
        AboutUs: 'Added',
      }));
    }
  };

  return (
    <div>
      <RecPage3 error={error} questions={questions} setQuestions={setQuestions} />
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
            handleSubmit();
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
