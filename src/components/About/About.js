import styles from './About.module.css';

function About() {
  return (
    <div className={styles.wrapper} id='about'>
      <div>
        <h1>
          About Us
        </h1>
        <p>
        Gold's Gym Has Been The Authority In Fitness Since 1965 Dating Back To The Original Gold's Gym In Venice, California. It Was The Place For Serious Fitness. Opened Long Before The Modern-Day Health Club Existed, The Original Gold's Gym Featured Homemade Equipment And A Dedication To Getting Results. It Was An Instant Hit. Gold's Gym Quickly Became Known As “The Mecca Of Bodybuilding.''
        </p>
        <p>
        Today, Gold's Gym Has Expanded Its Fitness Profile To Offer All Of The Latest Equipment And Services, Including Group Exercise, Personal Training, Cardiovascular Equipment, Spinning, And Yoga, While Maintaining Its Core Weight Lifting Tradition.
        </p>
      </div>
      <div>
        <h1>
          Why Choose Us?
        </h1>
        <li>
          <h2>
            Consultations with Expert
          </h2>
        </li>
        <p>
        Known For The Unrivaled Success Of Providing State-Of-The-Art Equipment And Fitness Knowledge With A Globally Proven Fitness Training Module And With Certified Trainers And Nutritional Counseling We Have Had A Comprehensive Approach To The Overall Health And Wellbeing Of The Members. At Gold’s Gym, It’s Not Only About Working Out But Having A Healthy Lifestyle
        </p>
        <li>
          <h2>
            Best Workout Facilities
          </h2>
        </li>
        <p>
        We Have Also Been Doing A Lot Of Corporate & Community Wellness Programs, Reaching Out To People Who Want To Get Fitter But Cannot Make It To The Gym. We Have Focused On The Overall Experience. It Is Not Just About Getting Into A Particular Shape But It’s All About FITNESS, A Healthy Lifestyle, And, A Complete Transformation.
        </p>
      </div>
    </div>
  )
}

export default About