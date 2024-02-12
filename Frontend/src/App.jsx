import './App.css';
import Navbar from './component/Navbar';
import SignUp from './component/Signup';
import Home from './component/Home';
import Login from './component/Login';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
