import styles from './App.module.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Program from './components/Program/Program';
import Training from './components/Training/Training';
import Pricing from './components/Pricing/Pricing';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <Routes>
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Home/>
      <About/>
      <Program/>
      <Training/>
      <Pricing/>    
  </div>
  );
}

export default App;
