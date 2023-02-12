import { useState } from 'react';
import { useRecruitmentContext } from '../../../contexts/RecruitmentContext';
import RecPage2 from '../../RecPage2/RecPage2';
import { BackButton, ButtonsContainer, NextButton } from '../styles';

function Experience() {
  // eslint-disable-next-line no-unused-vars
  const { setStep, info, setInfo } = useRecruitmentContext();
  const [error, setError] = useState(false);
  // const [next, setNext] = useState(false);
  const [questions, setQuestions] = useState([info?.q8, info?.q9, info?.q10, info?.q11, info?.q12, info?.q13, info?.q14, info?.q15]);

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
        q8: questions[0],
        q9: questions[1],
        q10: questions[2],
        q11: questions[3],
        q12: questions[4],
        q13: questions[5],
        q14: questions[6],
        q15: questions[7],
      }));
    }
  };

  return (
    <div>
      <RecPage2 info={info} error={error} questions={questions} setQuestions={setQuestions} />
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
              q8: questions[0],
              q9: questions[1],
              q10: questions[2],
              q11: questions[3],
              q12: questions[4],
              q13: questions[5],
              q14: questions[6],
              q15: questions[7],
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
