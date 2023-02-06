import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/HomePage/Home';
import PostForm from './Components/PostForm/PostForm';
import ResponsiveAppBar from './Components/Navebar/Navebar';
import Pages from './Pages/Pages';
import RecruitmentPage from './Pages/RecruitmentPage';

function App() {
  return (
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
  );
}

export default App;
