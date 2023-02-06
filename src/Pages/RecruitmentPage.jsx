import Recruitment from '../Components/Recruitment/Recruitment';
import RecruitmentContextProvider from '../contexts/RecruitmentContext';

function RecruitmentPage() {
  return (
    <RecruitmentContextProvider>
      <Recruitment />
    </RecruitmentContextProvider>
  );
}

export default RecruitmentPage;
