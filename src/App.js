import Home from'./Components/HomePage/Home.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Components/PostForm/Form.jsx';
import './App.css';
import Pages from './Pages/Pages';
function App() {
  return (
    
    <div className='App'>
      <Router>
      <Routes >
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/login' element={<Pages/>}></Route>
        <Route exact path='/AddPost' element={<Form />}></Route>
      </Routes>
      </Router>

    </div>
  );
}

export default App;
