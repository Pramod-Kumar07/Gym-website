import styles from './App.module.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Program from './components/Program/Program';
import Training from './components/Training/Training';
import Pricing from './components/Pricing/Pricing';
import Login from './components/Login/Login';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.navbar}><Navbar/></div>
      <div className={styles.home}><Home/></div>
      <div className={styles.home}><About/></div>
      <div className={styles.home}><Program/></div>
      <div className={styles.home}><Training/></div>
      <div className={styles.home}><Pricing/></div>
      <div className={styles.home}><Login/></div>
    </div>
  );
}

export default App;
