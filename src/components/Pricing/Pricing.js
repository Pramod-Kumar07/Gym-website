import styles from './Pricing.module.css';
import { BiDollar } from 'react-icons/bi';
import { BsCheck2Circle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Footer from '../Footer/Footer';

function Pricing() {

  const navigate = useNavigate();

  const handleGetStarted = () => {
      navigate('/login')
  }
  return (
    <div className={styles.wrapper} id='pricing'>
      
      <div className={styles.container}>

        <div className={styles.pricingWrapper}>

          <div className={styles.priceCard}>

            <h3>
              day pass
            </h3>

            <div className={styles.price}>
              <BiDollar/>
              <h1>
                20
              </h1>
            </div>

            <section>
              /pass
            </section>
            <div className={styles.checkPoints}>
              <section>
                <BsCheck2Circle className={styles.check}/>
                1 day pass
              </section>
              <section>
              <BsCheck2Circle className={styles.check}/>
                free gym access
              </section>
              <section>
              <BsCheck2Circle className={styles.check}/>
                24 hours access
              </section>
            </div>

            <button onClick={handleGetStarted} className={styles.button}>
              <NavHashLink to='/#login' smooth className={styles.getStarted} >
                GET STARTED
              </NavHashLink>
            </button>

          </div>

          <div className={styles.priceCard}>

            <h3>
              month to month
            </h3>

            <div className={styles.price}>
              <BiDollar/>
              <h1>
                90
              </h1>
            </div>

            <section>
              /month
            </section>
            <div className={styles.checkPoints}>
              <section>
                <BsCheck2Circle className={styles.check}/>
                $90 joining fee
              </section>
              <section>
              <BsCheck2Circle className={styles.check}/>
                no contract
              </section>
              <section>
              <BsCheck2Circle className={styles.check}/>
                free gym access
              </section>
              <section>
              <BsCheck2Circle className={styles.check}/>
                1 group class included
              </section>
              <section>
              <BsCheck2Circle className={styles.check}/>
                24 hour access
              </section>
            </div>

            <button onClick={handleGetStarted} className={styles.button}>
              <NavHashLink to='/#login' smooth className={styles.getStarted} >
                GET STARTED
              </NavHashLink>
            </button>

          </div>

          <div className={styles.priceCard}>

            <h3>
              annual pass
            </h3>

            <div className={styles.price}>
              <BiDollar/>
              <h1>
                900
              </h1>
            </div>

            <section>
              /year
            </section>
            <div className={styles.checkPoints}>
              <section>
                <BsCheck2Circle className={styles.check}/>
                $900 joining fee
              </section>
              <section>
              <BsCheck2Circle className={styles.check}/>
                no contract
              </section>
              <section>
              <BsCheck2Circle className={styles.check}/>
                free gym access
              </section>
              <section>
              <BsCheck2Circle className={styles.check}/>
                unlimited group classes
              </section>
              <section>
              <BsCheck2Circle className={styles.check}/>
                24 hour access
              </section>
            </div>

            <button onClick={handleGetStarted} className={styles.button}>
              <NavHashLink to='/#login' smooth className={styles.getStarted} >
                GET STARTED
              </NavHashLink>
            </button>

          </div>

        </div>

        <div className={styles.membership}>

          <h3 className={styles.member}>
            Membership
          </h3>

          <h2>
            From punch pass to monthly or annual
          </h2>

          <p>
          At Gym Base, we offer a wide range of membership with options to suit every budget. Everything from One Day Pass, Punch Pass to monthly or annual prepaid memberships. What's more, we won't tie you in to a long term contract, giving you greater flexibility.
          </p>

          <h3>
            each plan includes
          </h3>

          <div>
            <li>
              the best equipment global brands
            </li>
            <li>
              the gym is open 24 hours a day, 7 days a week
            </li>
            <li>
              two safe payment methods
            </li>
            <li>
              group fitness classes in the price of the subscription 
            </li>
            <li>
              no long-term contract period
            </li>
          </div>
        </div>

      </div>

      <div>
        <Footer/>
      </div>


    </div>
  )
}

export default Pricing