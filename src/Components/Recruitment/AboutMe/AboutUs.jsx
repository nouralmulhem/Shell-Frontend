import { useState } from 'react';
import { useRecruitmentContext } from '../../../contexts/RecruitmentContext';
import RecPage2 from '../../RecPage2/RecPage2';
import { Register } from '../server';
import { BackButton, ButtonsContainer, NextButton } from '../styles';

function AboutUs() {
  // eslint-disable-next-line no-unused-vars
  const { setStep, info, setInfo } = useRecruitmentContext();
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([info?.q7 || '', info?.q8 || '', info?.q9 || '', info?.q10 || '', info?.q11 || '', info?.q12 || '', info?.q13 || '', info?.q14 || '']);

  const handleSubmit = () => {
    if (questions.slice(0, 7).filter((q) => q.length <= 0).length !== 0) {
      setError(true);
    } else {
      const newInfo = {
        q7: questions[0],
        q8: questions[1],
        q9: questions[2],
        q10: questions[3],
        q11: questions[4],
        q12: questions[5],
        q13: questions[6],
        q14: questions[7],
      };

      console.log({ ...info, ...newInfo });
      Register({ ...info, ...newInfo });
    }
  };

  return (
    <div>
      <RecPage2 error={error} questions={questions} setQuestions={setQuestions} />
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
              q7: questions[0],
              q8: questions[1],
              q9: questions[2],
              q10: questions[3],
              q11: questions[4],
              q12: questions[5],
              q13: questions[6],
              q14: questions[7],
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
