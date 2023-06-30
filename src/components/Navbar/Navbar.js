import React from 'react';
import styles from './Navar.module.css';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.gym}>
            <Link to='home' smooth={true} >
                <h2>
                    GYM
                </h2>
            </Link>
        </div>
        <div className={styles.sections}>
            <Link to='about' smooth={true} duration={2000}>
                <section>
                    About
                </section>
            </Link>
            <Link to='program' smooth={true} duration={3000}>
                <section>
                    Program
                </section> 
            </Link>
            <Link to='training' smooth={true} duration={4000}>
                <section>
                    Training
                </section>
            </Link>
            <Link to='pricing' smooth={true} duration={5000}>
                <section>
                    Pricing
                </section>
            </Link>
        </div>
        <div className={styles.button}>
            <button>
                <Link to='login' smooth={true} duration={1000}>
                    Join Us
                </Link>
            </button>
        </div>
    </div>
  )
}

export default Navbar