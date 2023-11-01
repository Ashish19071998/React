import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import UseState from './Components/27-10/UseState';


function App() {

  console.log("Hi From app file.")

  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/use-state' element={<UseState />} />

      </Routes>
    </div>
  );
}

export default App;
