import React, { useEffect, useState } from 'react'
import styles from './Products.module.css'
import image from './../../images/Picture5.png'
import image1 from './../../images/Picture6.gif'
import image2 from './../../images/Picture7.gif'
import image3 from './../../images/Picture8.gif'
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel'
import image9 from './../../images/Picture9.jpg'
import image10 from './../../images/Picture10.jpg'
import image11 from './../../images/Picture11.jpg'
import image12 from './../../images/Picture12.jpg'
import image13 from './../../images/Picture13.jpg'
import image14 from './../../images/Picture14.jpg'
import image15 from './../../images/Picture15.png'
import image16 from './../../images/Picture16.jpg'
import image17 from './../../images/Picture17.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
const Products = ({ productRef }) => {
	return (
		<div className={styles.container} ref={productRef}>
			<div className={styles.heading}>OUR PRODUCTS</div>
			<div className={styles.carouselContainer}>
				<marquee behavior="scroll" direction="left" scrollamount="10">
					<img src={image9} alt="popup" className={styles.merqueImage} />
					<img src={image10} alt="popup" className={styles.merqueImage} />
					<img src={image11} alt="popup" className={styles.merqueImage} />
					<img src={image12} alt="popup" className={styles.merqueImage} />
					<img src={image13} alt="popup" className={styles.merqueImage} />
				</marquee>
			</div>
		</div>
	)
}

export default Products
