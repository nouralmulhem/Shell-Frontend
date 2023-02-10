import { useState } from 'react';
import { useRecruitmentContext } from '../../../contexts/RecruitmentContext';
import RecPage2 from '../../RecPage2/RecPage2';
import { BackButton, ButtonsContainer, NextButton } from '../styles';

function Experience() {
  // eslint-disable-next-line no-unused-vars
  const { setStep, info, setInfo } = useRecruitmentContext();
  const [error, setError] = useState(false);
  // const [next, setNext] = useState(false);
  const [questions, setQuestions] = useState([info?.q0, info?.q1, info?.q2, info?.q3, info?.q4, info?.q5, info?.q6, info?.q7]);

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
        q0: questions[0],
        q1: questions[1],
        q2: questions[2],
        q3: questions[3],
        q4: questions[4],
        q5: questions[5],
        q6: questions[6],
        q7: questions[7],
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
              q0: questions[0],
              q1: questions[1],
              q2: questions[2],
              q3: questions[3],
              q4: questions[4],
              q5: questions[5],
              q6: questions[6],
              q7: questions[7],
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
