import { NavHashLink } from 'react-router-hash-link';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  const joinWithUs = () => {
    navigate('/login')
  }
  return (
    <div className={styles.wrapper} id='home'>
      <div className={styles.text}>
        <h2>
          "Take care of your <section className={styles.section}>body </section>.
        </h2>
        <h2>
          It's the only place you
        </h2>
        <h2>
        have to <section className={styles.section}>live</section>."
        </h2>
        <button onClick={joinWithUs} className={styles.joinWithUs}>
          <NavHashLink smooth to='/#login' className={styles.link}>
            Join With Us
          </NavHashLink>
        </button>
      </div>
    </div>
  )
}

export default Home