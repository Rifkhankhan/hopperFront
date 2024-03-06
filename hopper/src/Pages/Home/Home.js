import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import image from './../../images/Picture3.png';
import TypingEffect from '../../Components/TypingEffect/TypingEffect';
const Home = ({ homeRef }) => {
  return (
    <div className={styles.container} ref={homeRef} id='home'>
      <div className={styles.imagesContainer}>
        <h1>
					Welcome to <span style={{ color: 'red' }}>H</span>op<span
  style={{ color: 'red', textTransform: 'uppercase' }}
					>
						p
					</span>er Engineering <br /> technology Services
				</h1>
        <TypingEffect />
      </div>
    </div>
  );
};

export default Home;
