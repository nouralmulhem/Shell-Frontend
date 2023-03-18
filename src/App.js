import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

// Components
import Home from './Components/HomePage/Home';
import PostForm from './Components/PostForm/PostForm';
import ResponsiveAppBar from './Components/Navebar/HosnyNavbar';
import Pages from './Pages/Pages';
import RecruitmentPage from './Pages/RecruitmentPage';
import AddAdmin from './Components/Authentication/AddAdmin/AddAdmin';
import About from './Components/About/About';

// Styles
import './App.css';
import Sponser from './Components/Sponser/Sponser';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <CssBaseline>
      <div className="App">
        <Router>
          <ResponsiveAppBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/login" element={<Pages />} />
            <Route exact path="/AddPost" element={<PostForm />} />
            <Route exact path="/Recruitment" element={<RecruitmentPage />} />
            <Route exact path="/AddAdmin" element={<AddAdmin />} />
            <Route exact path="/Sponser" element={<Sponser />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </CssBaseline>

  );
}

export default App;
