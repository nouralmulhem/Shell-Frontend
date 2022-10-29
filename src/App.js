import Home from'./Components/HomePage/Home.jsx'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Form from './Components/PostForm/Form.jsx';
import './App.css'
function App() {
  return (
    
    <div className='App'>
      <Router>
      <Routes >
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/AddPost' element={<Form />}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
