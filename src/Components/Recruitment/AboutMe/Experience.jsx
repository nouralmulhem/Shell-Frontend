import { useState } from 'react';
import { useRecruitmentContext } from '../../../contexts/RecruitmentContext';
import RecPage2 from '../../RecPage2/RecPage2';
import { BackButton, ButtonsContainer, NextButton } from '../styles';

function Experience() {
  // eslint-disable-next-line no-unused-vars
  const { setStep, info, setInfo } = useRecruitmentContext();
  const [error, setError] = useState(false);
  // const [next, setNext] = useState(false);
  const [questions, setQuestions] = useState(['', '', '', '', '', '', '', '']);

  const handleNext = () => {
    if (questions.slice(0, 7).filter((q) => q.length <= 0).length !== 0) {
      setError(true);
    } else {
      setStep({
        step: 3,
        progress: 40,
      });

      // Save Submitted Date
      setInfo((state) => ({
        ...state,
        Experience: 'Added',
      }));
    }
  };

  return (
    <div>
      <RecPage2 error={error} questions={questions} setQuestions={setQuestions} />
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
            handleNext();
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
