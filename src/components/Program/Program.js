import { NavHashLink } from 'react-router-hash-link';
import styles from './Program.module.css';
import photo7 from './photo7.jpg';
import photo8 from './photo8.jpg';
import photo9 from './photo9.jpg';

function Program() {
  return (
    <div className={styles.wrapper} id='program'>
    <div className={styles.descriptionWrapper}>
      <div className={styles.description}>

        <h1>
          Explore Our Fitness Studio
        </h1>

        <p>
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <div className={styles.stats}>

          <div>
            <h2>
              50<sup>+</sup>
            </h2>
            <section>
              Expert Coaches
            </section>
          </div>

          <div>
            <h2>
              1K<sup>+</sup>
            </h2>
            <section>
              Members
            </section>
          </div>
          
        </div>

        <button>
          <NavHashLink to='/#trainingPrograms' className={styles.link}>          
            Get Start Now          
          </NavHashLink>
        </button>

      </div>
      <div className={styles.photos}>
        <div className={styles.photo1}>
          <img src={photo7} alt='displayPicture' className={styles.photo} />
        </div>
        <div className={styles.photo2}>
          <img src={photo8} alt='displayPicture' className={styles.photo} />
        </div>
        <div className={styles.photo3}>
          <img src={photo9} alt='displayPicture' className={styles.photo} />
        </div>
      </div>

      </div>

      <div id='trainingPrograms' className={styles.trainingPrograms}>

        <h1>
          Training Programs
        </h1>

        <div className={styles.programsOffered}>

          <img />

        </div>

      </div>

    </div>
  )
}

export default Program