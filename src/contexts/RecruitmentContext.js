import {
  useState, createContext, useContext, useMemo,
} from 'react';

// Context
export const RecruitmentContext = createContext();

function RecruitmentContextProvider(props) {
  const { children } = props;

  // State
  const [step, setStep] = useState({
    step: 1,
    progress: 0, // 0-100
  });
  const [info, setInfo] = useState({});

  const value = useMemo(() => ({
    step, setStep, info, setInfo,
  }), [step, setStep, info, setInfo]);

  return (
    <RecruitmentContext.Provider value={value}>
      {children}
    </RecruitmentContext.Provider>
  );
}

export const useRecruitmentContext = () => useContext(RecruitmentContext);
export default RecruitmentContextProvider;
