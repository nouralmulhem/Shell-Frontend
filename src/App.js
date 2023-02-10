import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Home from './Components/HomePage/Home';
import PostForm from './Components/PostForm/PostForm';
import ResponsiveAppBar from './Components/Navebar/HosnyNavbar';
import Pages from './Pages/Pages';
import RecruitmentPage from './Pages/RecruitmentPage';

// Styles
import './App.css';

function App() {
  return (
    <CssBaseline>
      <div className="App">
        <Router>
          <ResponsiveAppBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Pages />} />
            <Route exact path="/AddPost" element={<PostForm />} />
            <Route exact path="/Recruitment" element={<RecruitmentPage />} />

          </Routes>
        </Router>
      </div>
    </CssBaseline>

  );
}

export default App;
