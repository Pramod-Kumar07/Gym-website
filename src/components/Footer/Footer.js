import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import styles from './Footer.module.css';
import { NavHashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <div>

        <hr style={{marginTop:'3rem'}}></hr>

    <div className={styles.wrapper}>

        <div className={styles.leftContainer}>
            <NavHashLink to="/#home" smooth className={styles.link} >
                <h2>
                    GYM
                </h2>
            </NavHashLink>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div>
                <a href='https://www.facebook.com' target='_blank' rel="noreferrer" className={styles.socialMedia}><FaFacebook/></a>
                <a href='https://www.instagram.com/' target='_blank' rel="noreferrer" className={styles.socialMedia}> <AiFillInstagram/></a>
                <a href='https://twitter.com/' target='_blank' rel="noreferrer" className={styles.socialMedia}> <AiFillTwitterCircle/></a>                
            </div>
        </div>

        <div className={styles.content}>
            <div>
                <p>
                    Healthy Living
                </p>
                <p>
                    Lorem
                </p>
                <p>
                    Lorem ipsum
                </p>
                <p>
                    Lorem
                </p>
                <p>
                    Lorem ipsum
                </p>
            </div>

            <div>
                <p>
                    Services
                </p>
                <p>
                    Lorem
                </p>
                <p>
                    Lorem ipsum
                </p>
                <p>
                    Lorem
                </p>
                <p>
                    Lorem ipsum
                </p>
            </div>

            <div>
                <p>
                    Programs 
                </p>
                <p>
                    Lorem
                </p>
                <p>
                    Lorem ipsum
                </p>
                <p>
                    Lorem
                </p>
                <p>
                    Lorem ipsum
                </p>
            </div>
        </div>

    </div>
    <hr style={{marginTop:'1rem'}}></hr>

    <div style={{display:'flex', justifyContent:'space-between'}}>
        <p>
            GYM
        </p>
        <p>
            @2023 All Rights Copy Reserved
        </p>
        <p>
            Pramod Kumar
        </p>
    </div>

    </div>
  )
}

export default Footer