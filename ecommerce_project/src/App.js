import {Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact';
import HomePage from './pages/HomePage'
import Pagenotfound from './pages/Pagenotfound';
import About from './pages/About';
import Policy from './pages/Policy';
import Register from './pages/Auth/Rejister';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/policy' element={<Policy />}/>
      <Route path='*' element={<Pagenotfound />}/>
    </Routes>
    </>
  );
}

export default App;
