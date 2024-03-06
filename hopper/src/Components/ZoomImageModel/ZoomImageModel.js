import React from 'react';
import styles from './ZoomImageModel.module.css';
import image from './../../images/1.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
const ZoomImageModel = ({ clickedImage, toggleHandler }) => {
  return (
    <div className={`container ${styles.container}`}>
      <div>
        <FontAwesomeIcon
          onClick={toggleHandler}
          icon={faClose}
          style={{
            color: 'white',
            fontSize: '1.3em',
            position: 'absolute',
            right: '2%',
            top: '2%'
          }}
				/>
      </div>
      <img src={clickedImage} className={styles.image} alt='' />
    </div>
  );
};

export default ZoomImageModel;
