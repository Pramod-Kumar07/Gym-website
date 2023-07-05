import React, { Fragment, useState } from 'react';
import styles from './Training.module.css';
import TrainerData from './TrainerData';
import { CgScrollH } from 'react-icons/cg';

function Training() {

  const [showTeam, setShowTeam] = useState(false);

  const handleShowAllTeam = () => {
    setShowTeam(!showTeam)
  }

  return (
    <div className={styles.wrapper} id='training'>

      <div className={styles.teamText}>
        <h1>Meet Our team</h1>
        <div>
        We are a team of experienced people, nutrition, sports and fitness passionate experts with talent and knowledge unsurpassed in the industry. Get to know us.
        </div>
      </div>

      {!showTeam ?
      <Fragment>
      <div className={styles.container}>
      {
        TrainerData.map((e) => 
          <div className={styles.card}>
            <div>
              <img src={e.picture} alt='trainer'/>
            </div>
            <p>{e.name}</p>
            <p>{e.experience}</p>
          </div>
        )
      }      
      </div>
      <CgScrollH className={styles.scroll}/>
      <button onClick={handleShowAllTeam}>Show all team</button>
      </Fragment>
       : 
       <Fragment>
      <div className={styles.allCardsContainer}>
        {
        TrainerData.map((e) => 
          <div className={styles.card}>
            <div>
              <img src={e.picture} alt='trainer'/>
            </div>
            <p>{e.name}</p>
            <p>{e.experience}</p>
          </div>
        )
      }
      </div>
      <button onClick={handleShowAllTeam}>Show less</button>
      </Fragment>
      }
    </div>
  )
}

export default Training