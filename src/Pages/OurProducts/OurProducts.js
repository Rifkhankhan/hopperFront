import React, { useEffect, useState } from 'react';
import styles from './OurProducts.module.css';
import image from './../../images/Picture5.png';
import image1 from './../../images/Picture6.gif';
import image2 from './../../images/Picture7.gif';
import image3 from './../../images/Picture8.gif';
import image9 from './../../images/Picture9.jpg';
import image10 from './../../images/Picture10.jpg';
import image11 from './../../images/Picture11.jpg';
import image12 from './../../images/Picture12.jpg';
import image13 from './../../images/Picture13.jpg';
import image14 from './../../images/Picture14.jpg';
import image15 from './../../images/Picture15.png';
import image16 from './../../images/Picture16.jpg';
import image17 from './../../images/Picture17.jpg';
import image18 from './../../images/Picture1.jpg';
import image19 from './../../images/Picture2.jpg';
import image20 from './../../images/Picture3.jpg';
import './OurProducts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';

const OurProducts = ({
	productRef,
	imageClickHandle,
	carouselImagesClickHandle
}) => {
  const productsRef = {
    mobileShelter: useRef(null),
    zeroConnectEnergy: useRef(null),
    mobileFarm: useRef(null),
    zeroWaterGenerator: useRef(null)
  };

  const sheltersRef = {
    hotel: useRef(null),
    police: useRef(null),
    studio: useRef(null),
    dog: useRef(null),
    nuclear: useRef(null),
    farm: useRef(null),
    hospital: useRef(null),
    office: useRef(null)
  };

  return (
    <div className={styles.container} ref={productRef} id='products'>
      <div className={styles.heading}>OUR PRODUCTS</div>
      <div className='container-fluid'>
        <div
          class='row'
          style={{
            margin: '1vh',
            display: 'flex',
            justifyContent: 'space-around'
          }}
				>
          <div
            id='mobileShelter'
            onClick={e => {
              productsRef.mobileShelter.current.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            class={`col-12 col-md-5 my-2  hover-effect ${styles.box} `}
            style={{
              border: '1px solid rgba(209, 213, 219, 0.3)',
              backdropFilter: ' blur(3px) saturate(200%)',
              backDropFilter: 'blur(3px) saturate(200%)',
              backgroundColor: 'rgba(197, 37, 237, 0.23)',
              borderRadius: '12px',
              height: '35vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'

							//   marginBlock: '1vh'
            }}
					>
            <div
              className='col '
              style={{ margin: 'auto', width: '100%', height: '100%' }}
						>
              <img
                src={image}
                className='row'
                style={{ margin: 'auto', height: '85%', width: '100%' }}
                alt=''
							/>
              <p
                className='text-center text-light '
                style={{ fontSize: '1.3em' }}
							>
								Mobile Shelter
							</p>
            </div>
          </div>

          <div
            class={`col-12 col-md-5 my-2 hover-effect ${styles.box} `}
            style={{
              border: '1px solid rgba(209, 213, 219, 0.3)',
              backdropFilter: ' blur(3px) saturate(200%)',
              backDropFilter: 'blur(3px) saturate(200%)',
              backgroundColor: 'rgba(197, 37, 237, 0.23)',
              borderRadius: '12px',
              height: '35vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'

							//   marginBlock: '1vh'
            }}
					>
            <div
              className='col '
              style={{ margin: 'auto', width: '100%', height: '100%' }}
						>
              <img
                src={image1}
                className='row'
                style={{ margin: 'auto', height: '85%', width: '100%' }}
                alt=''
							/>
              <p
                className='text-center text-light '
                style={{ fontSize: '1.3em' }}
							>
								Zero Connect Energy
							</p>
            </div>
          </div>
        </div>

        <div
          class='row'
          style={{
            margin: '1vh',
            display: 'flex',
            justifyContent: 'space-around'
          }}
				>
          <div
            class={`col-12 col-md-5 my-2  hover-effect ${styles.box} `}
            style={{
              border: '1px solid rgba(209, 213, 219, 0.3)',
              backdropFilter: ' blur(3px) saturate(200%)',
              backDropFilter: 'blur(3px) saturate(200%)',
              backgroundColor: 'rgba(197, 37, 237, 0.23)',
              borderRadius: '12px',
              height: '35vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'

							//   marginBlock: '1vh'
            }}
					>
            <div
              className='col '
              style={{ margin: 'auto', width: '100%', height: '100%' }}
						>
              <img
                src={image2}
                className='row'
                style={{ margin: 'auto', height: '85%', width: '100%' }}
                alt=''
							/>
              <p
                className='text-center text-light '
                style={{ fontSize: '1.3em' }}
							>
								Mobile Farm
							</p>
            </div>
          </div>

          <div
            class={`col-12 col-md-5 my-2  hover-effect ${styles.box} `}
            style={{
              border: '1px solid rgba(209, 213, 219, 0.3)',
              backdropFilter: ' blur(3px) saturate(200%)',
              backDropFilter: 'blur(3px) saturate(200%)',
              backgroundColor: 'rgba(197, 37, 237, 0.23)',
              borderRadius: '12px',
              height: '35vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'

							//   marginBlock: '1vh'
            }}
					>
            <div
              className='col '
              style={{ margin: 'auto', width: '100%', height: '100%' }}
						>
              <img
                src={image3}
                className='row'
                style={{ margin: 'auto', height: '85%', width: '100%' }}
                alt=''
							/>
              <p
                className='text-center text-light '
                style={{ fontSize: '1.3em' }}
							>
								ZERO WATER GENERATOR
							</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className='container my-2'
        id='#mobileShelter'
        ref={productsRef.mobileShelter}
			>
        <h2
          style={{
            color: 'white',
            fontWeight: 600,
            fontSize: '30px',
            paddingTop: '15vh'
          }}
				>
					Mobile Shelter
				</h2>
        <div
          className='row m-0 p-0'
          style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}
				>
          <div
            id='mobileHotelShelter'
            className={`col-md-auto m-2 ${styles.blinkBox}`}
            onClick={e => {
              sheltersRef.hotel.current.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            style={{
              borderRadius: '5px',
              backgroundColor: 'aqua',
              padding: '1vh',
              fontSize: '1.3em',
              margin: 'auto'
            }}
					>
						Mobile Hotel Shelter
					</div>

          <div
            className={`col-md-auto m-2 ${styles.blinkBox}`}
            onClick={e => {
              sheltersRef.police.current.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            style={{
              borderRadius: '5px',
              backgroundColor: 'aqua',
              padding: '1vh',
              fontSize: '1.3em',
              margin: 'auto'
            }}
					>
						Mobile Police & Military Shelter
					</div>

          <div
            className={`col-md-auto m-2 ${styles.blinkBox}`}
            onClick={e => {
              sheltersRef.dog.current.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            style={{
              borderRadius: '5px',
              backgroundColor: 'aqua',
              padding: '1vh',
              fontSize: '1.3em',
              margin: 'auto'
            }}
					>
						Mobile Police Dog Kennels
					</div>

          <div
            className={`col-md-auto m-2 ${styles.blinkBox}`}
            onClick={e => {
              sheltersRef.studio.current.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            style={{
              borderRadius: '5px',
              backgroundColor: 'aqua',
              padding: '1vh',
              fontSize: '1.3em',
              margin: 'auto'
            }}
					>
						Mobile Studio Shelter
					</div>

          <div
            className={`col-md-auto m-2 ${styles.blinkBox}`}
            onClick={e => {
              sheltersRef.nuclear.current.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            style={{
              borderRadius: '5px',
              backgroundColor: 'aqua',
              padding: '1vh',
              fontSize: '1.3em',
              margin: 'auto'
            }}
					>
						Earthquake-resistant Shelters
					</div>
          <div
            className={`col-md-auto m-2 ${styles.blinkBox}`}
            onClick={e => {
              sheltersRef.farm.current.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            style={{
              borderRadius: '5px',
              backgroundColor: 'aqua',
              padding: '1vh',
              fontSize: '1.3em',
              margin: 'auto'
            }}
					>
						Mobile Nuclear Shelter
					</div>

          <div
            className={`col-md-auto m-2 ${styles.blinkBox}`}
            onClick={e => {
              sheltersRef.hospital.current.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            style={{
              borderRadius: '5px',
              backgroundColor: 'aqua',
              padding: '1vh',
              fontSize: '1.3em',
              margin: 'auto'
            }}
					>
						Bomb (blast) Shelter
					</div>

          <div
            className={`col-md-auto m-2 ${styles.blinkBox}`}
            onClick={e => {
              sheltersRef.office.current.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            style={{
              borderRadius: '5px',
              backgroundColor: 'aqua',
              padding: '1vh',
              fontSize: '1.3em',
              margin: 'auto'
            }}
					>
						Flood shelters
					</div>
        </div>

        <div />
      </div>

      {/* mobileHotelShelter */}
      <div
        className='container my-2'
        id='#mobileHotelShelter'
        onClick={() => carouselImagesClickHandle(0)}
        ref={sheltersRef.hotel}
        style={{ paddingTop: '10vh' }}
			>
        <div className='row'>
          <h3
            className='row m-2'
            style={{ textAlign: 'left', fontSize: '1.3em', color: 'white' }}
					>
						Mobile Hotel Shelter
					</h3>
          <div
            className='row'
            style={{
              margin: 'auto',
              display: 'flex',
              justifyContent: 'space-between'
            }}
					>
            <div className='col-md-6 col-12 my-3'>
              <img
                src={image9}
                alt=''
                className='col-12 '
                style={{
                  borderRadius: '5px',
                  margin: 'auto',
                  height: '90%'
                }}
							/>
              <p style={{ color: 'white', fontSize: '1.3em' }}>Exterior</p>
            </div>
            <div className='col-md-6 col-12 my-3'>
              <img
                src={image10}
                alt=''
                className='col-12 '
                style={{
                  borderRadius: '5px',
                  margin: 'auto',
                  height: '90%'
                }}
							/>
              <p style={{ color: 'white', fontSize: '1.3em' }}>Interior</p>
            </div>
          </div>
        </div>
      </div>

      {/* mililary office */}
      <div
        className='container my-2'
        id='#mobileHotelShelter'
        onClick={() => carouselImagesClickHandle(1)}
        ref={sheltersRef.police}
        style={{ paddingTop: '10vh' }}
			>
        <div className='row'>
          <h3
            className='row m-2'
            style={{ textAlign: 'left', fontSize: '1.3em', color: 'white' }}
					>
						Military Office
					</h3>
          <div
            className='row'
            style={{
              margin: 'auto',
              display: 'flex',
              justifyContent: 'space-between'
            }}
					>
            <div className='col-md-6 col-12 my-3'>
              <img
                src={image11}
                alt=''
                className='col-12 '
                style={{
                  borderRadius: '5px',
                  margin: 'auto',
                  height: '90%'
                }}
							/>
              <p style={{ color: 'white', fontSize: '1.3em' }}>Exterior</p>
            </div>
            <div className='col-md-6 col-12 my-3'>
              <img
                src={image12}
                alt=''
                className='col-12 '
                style={{
                  borderRadius: '5px',
                  margin: 'auto',
                  height: '90%'
                }}
							/>
              <p style={{ color: 'white', fontSize: '1.3em' }}>Interior</p>
            </div>
          </div>
        </div>
      </div>

      {/* Police dog kennels */}
      <div
        className='container my-2'
        id='#mobileHotelShelter'
        ref={sheltersRef.dog}
        onClick={() => carouselImagesClickHandle(2)}
        style={{ paddingTop: '10vh' }}
			>
        <div className='row'>
          <h3
            className='row m-2'
            style={{ textAlign: 'left', fontSize: '1.3em', color: 'white' }}
					>
						Police Gog Kennels
					</h3>
          <div
            className='row'
            style={{
              margin: 'auto',
              display: 'flex',
              justifyContent: 'space-between'
            }}
					>
            <div className='col-md-6 col-12 my-3'>
              <img
                src={image13}
                alt=''
                className='col-12 '
                style={{
                  borderRadius: '5px',
                  margin: 'auto',
                  height: '90%'
                }}
							/>
              <p style={{ color: 'white', fontSize: '1.3em' }}>Exterior</p>
            </div>
            <div className='col-md-6 col-12 my-3'>
              <img
                src={image14}
                alt=''
                className='col-12 '
                style={{
                  borderRadius: '5px',
                  margin: 'auto',
                  height: '90%'
                }}
							/>
              <p style={{ color: 'white', fontSize: '1.3em' }}>Interior</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Studio Shelter */}
      <div
        className='container my-2'
        id='#mobileHotelShelter'
        style={{ paddingTop: '10vh' }}
        ref={sheltersRef.studio}
        onClick={() => carouselImagesClickHandle(3)}
			>
        <div className='row'>
          <h3
            className='row m-2'
            style={{ textAlign: 'left', fontSize: '1.3em', color: 'white' }}
					>
						Mobile Studio Shelter
					</h3>
          <div
            className='row'
            style={{
              margin: 'auto',
              display: 'flex',
              justifyContent: 'space-between'
            }}
					>
            <div className='col-md-6 col-12 my-3'>
              <img
                src={image15}
                alt=''
                className='col-12 '
                style={{
                  borderRadius: '5px',
                  margin: 'auto',
                  height: '90%'
                }}
							/>
              <p style={{ color: 'white', fontSize: '1.3em' }}>Exterior</p>
            </div>
            <div className='col-md-6 col-12 my-3'>
              <img
                src={image16}
                alt=''
                className='col-12 '
                style={{
                  borderRadius: '5px',
                  margin: 'auto',
                  height: '90%'
                }}
							/>
              <p style={{ color: 'white', fontSize: '1.3em' }}>Interior</p>
            </div>
          </div>
        </div>
      </div>

      {/* Earthquake-resistant Shelters
 */}
      <div
        className='container my-2'
        id='#mobileHotelShelter'
        ref={sheltersRef.nuclear}
        style={{ paddingTop: '10vh' }}
			>
        <div className='row'>
          <h3
            className='row m-2'
            style={{ textAlign: 'left', fontSize: '1.3em', color: 'white' }}
					>
						Earthquake-resistant Shelters
					</h3>
          <div
            className='row'
            style={{
              margin: 'auto',
              display: 'flex',
              justifyContent: 'space-between'
            }}
					>
            <div className='col-md-6 col-12 my-3'>
              <img
                src={image17}
                alt=''
                className='col-12 '
                onClick={() => imageClickHandle(6)}
                style={{
                  borderRadius: '5px',
                  margin: 'auto',
                  height: '90%'
                }}
							/>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nuclear Shelter
 */}
      <div
        className='container my-2'
        id='#mobileHotelShelter'
        ref={sheltersRef.farm}
        style={{ paddingTop: '10vh' }}
			>
        <div className='row'>
          <h3
            className='row m-2'
            style={{ textAlign: 'left', fontSize: '1.3em', color: 'white' }}
					>
						Mobile Nuclear Shelter
					</h3>
          <div
            className='row'
            style={{
              margin: 'auto',
              display: 'flex',
              justifyContent: 'space-between'
            }}
					>
            <div className='col-md-6 col-12 my-3'>
              <img
                src={image18}
                alt=''
                onClick={() => imageClickHandle(7)}
                className='col-12 '
                style={{
                  borderRadius: '5px',
                  margin: 'auto',
                  height: '90%'
                }}
							/>
            </div>
          </div>
        </div>
      </div>

      {/* Bomb (blast) Shelter */}
      <div
        className='container my-2'
        id='#mobileHotelShelter'
        ref={sheltersRef.hospital}
        style={{ paddingTop: '10vh' }}
			>
        <div className='row'>
          <h3
            className='row m-2'
            style={{ textAlign: 'left', fontSize: '1.3em', color: 'white' }}
					>
						Bomb (blast) Shelter
					</h3>
          <div
            className='row'
            style={{
              margin: 'auto',
              display: 'flex',
              justifyContent: 'space-between'
            }}
					>
            <div className='col-md-6 col-12 my-3'>
              <img
                src={image19}
                onClick={() => imageClickHandle(8)}
                alt=''
                className='col-12 '
                style={{
                  borderRadius: '5px',
                  margin: 'auto',
                  height: '90%'
                }}
							/>
            </div>
          </div>
        </div>
      </div>

      {/* Flood shelters */}
      <div
        className='container my-2'
        id='#mobileHotelShelter'
        style={{ paddingTop: '10vh' }}
        ref={sheltersRef.office}
			>
        <div className='row'>
          <h3
            className='row m-2'
            style={{ textAlign: 'left', fontSize: '1.3em', color: 'white' }}
					>
						Flood shelters
					</h3>
          <div
            className='row'
            style={{
              margin: 'auto',
              display: 'flex',
              justifyContent: 'space-between'
            }}
					>
            <div className='col-md-6 col-12 my-3'>
              <img
                onClick={() => imageClickHandle(9)}
                src={image20}
                alt=''
                className='col-12 '
                style={{
                  borderRadius: '5px',
                  margin: 'auto',
                  height: '90%'
                }}
							/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
