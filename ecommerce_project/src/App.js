import {Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact';
import HomePage from './pages/HomePage'
import Pagenotfound from './pages/Pagenotfound';
import About from './pages/About';
import Policy from './pages/Policy';
import Register from './pages/Auth/Rejister';
import Login from './pages/Auth/Login';

import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
       <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/policy' element={<Policy />}/>
      <Route path='*' element={<Pagenotfound />}/>
    </Routes>
    </>
  );
}

export default App;
