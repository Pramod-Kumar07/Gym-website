import styles from './About.module.css';
import ReactPlayer from 'react-player/youtube';

function About() {

  const handleLearnMore = () => {
    alert("Clicked from About Us section")
  }

  
  return (
    <div className={styles.wrapper} id='about'>

      <div className={styles.aboutUsWrapper}>

        <div className={styles.aboutUsVideoWrapper}>
          <ReactPlayer height='14.5rem' width='20rem' light controls url='https://www.youtube.com/watch?v=24fdcMw0Bj0&t=55s' />
        </div>

        <div className={styles.aboutUs}>
          <h1>
            About Us
          </h1>

          <p>
            Baker's Gym Has Been The Authority In Fitness Since 1965 Dating Back To The Original Baker's Gym In Venice, California. It Was The Place For Serious Fitness. Opened Long Before The Modern-Day Health Club Existed, The Original Baker's Gym Featured Homemade Equipment And A Dedication To Getting Results. It Was An Instant Hit. Baker's Gym Quickly Became Known As "The Mecca Of Bodybuilding".
          </p>         

          <button onClick={handleLearnMore}>
            Learn More
          </button>
        </div>

      </div>

      <div className={styles.whyUSWrapper}>

        <div className={styles.whyUs}>
        <h1>
          Why Choose Us?
        </h1>
        <li>
          <h3>
            Consultations with Expert
          </h3>
        </li>
        <p>
        Known For The Unrivaled Success Of Providing State-Of-The-Art Equipment And Fitness Knowledge With A Globally Proven Fitness Training Module And With Certified Trainers.
        </p>
        <li>
          <h3>
            Best Workout Facilities
          </h3>
        </li>
        <p>
        We provide State-of-The-art Equipments and facilities. It Is Not Just About Getting Into A Particular Shape But It’s All About FITNESS, A Healthy Lifestyle, And, A Complete Transformation.
        </p>
        </div>

        <div className={styles.whyUsVideoWrapper}>
          <ReactPlayer height='14.5rem' width='20rem' light controls url='https://www.youtube.com/watch?v=WGH3c9nVmik' />
        </div>

      </div>

    </div>
  )
}

export default About