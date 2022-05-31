
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Signup></Signup>} />
          <Route path = "signup" element={<Signup></Signup>} />
          <Route path = "home" element={<Home></Home>} />
          <Route path = "login" element={<Login></Login>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
