import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';



function App() {

  console.log("Hi From app file.")

  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
