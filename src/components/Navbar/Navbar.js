import React from "react";
import styles from "./Navar.module.css";
import { useNavigate } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link'
import { useState } from "react";
import { FaTimes,FaBars } from 'react-icons/fa';

function Navbar() {
    const [toggle, setToggle] = useState(true);
    const navigate = useNavigate();

    const handleJoinUs = () => {
        navigate('/login')
    }

    const handleToggle = () => {
      setToggle(!toggle)
    }

  return (
    <div className={styles.navbar}>
      <div >
          <NavHashLink to="/#home" smooth className={styles.link} >
            <h2>
                GYM
            </h2>
          </NavHashLink>
      </div>
      <div className={styles.container}>
      <div className={styles.sections}>
          <NavHashLink to="/#about" smooth className={styles.link} >
            <section>
                About Us
            </section>
          </NavHashLink>
            <NavHashLink to="/#program" smooth className={styles.link} >
                <section>  
                    Program
                </section>
            </NavHashLink>
            <NavHashLink to="/#trainingPrograms" smooth className={styles.link} >
                <section>
                    Training
                </section>
            </NavHashLink>
            <NavHashLink to="/#pricing" smooth className={styles.link} >
                <section>
                    Pricing
                </section>
            </NavHashLink>
      </div>
      <div className={styles.button}>
        <button onClick={handleJoinUs}>
            <NavHashLink to="/#login" smooth className={styles.joinUs}>
                Join Us
            </NavHashLink>
        </button>
      </div>
      </div>
      <div onClick={handleToggle} className={styles.toggleButton} > 
        {
          toggle ?  
            <FaBars/>: 
            <FaTimes/>
        }
      </div>
      {!toggle &&
      <div className={styles.toggle}>
      <div className={styles.toggleSections}>
          <NavHashLink to="/#about" smooth className={styles.link} >
            <section>
                About Us
            </section>
          </NavHashLink>
            <NavHashLink to="/#program" smooth className={styles.link} >
                <section>  
                    Program
                </section>
            </NavHashLink>
            <NavHashLink to="/#training" smooth className={styles.link} >
                <section>
                    Training
                </section>
            </NavHashLink>
            <NavHashLink to="/#pricing" smooth className={styles.link} >
                <section>
                  Pricing
                </section>
            </NavHashLink>
      </div>
      <div className={styles.button}>
        <button onClick={handleJoinUs}>
            <NavHashLink to="/#login" smooth className={styles.joinUs}>
                Join Us
            </NavHashLink>
        </button>
      </div>
      </div>
      }
    </div>
  );
}

export default Navbar;
