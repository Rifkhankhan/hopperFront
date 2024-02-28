import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // Import the carousel styles
import image from './../../images/Picture9.jpg'
import image1 from './../../images/Picture10.jpg'
import image2 from './../../images/Picture11.jpg'
import image3 from './../../images/Picture12.jpg'
import image4 from './../../images/Picture13.jpg'
import image5 from './../../images/Picture14.jpg'
import image6 from './../../images/Picture15.png'
import image7 from './../../images/Picture16.jpg'
import image8 from './../../images/Picture17.jpg'
import image9 from './../../images/Picture18.jpg'
import image10 from './../../images/Picture19.jpg'
import image11 from './../../images/Picture20.jpg'

import styles from './ImageCarousel.module.css'

const ImageCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const images = [
		[image, image1],
		[image2, image3],
		[image4, image5],
		[image6, image7],
		[image8, image9],
		[image10, image11]
	]

	const titles = [
		'Hotel Rooms',
		'Military Office',
		'Police Dog Kennels',
		'Mobile Studio Shelter'
	]

	const handlePrevious = () => {
		if (currentIndex === 0) {
			setCurrentIndex(images.length - 1)
		} else {
			setCurrentIndex(currentIndex - 1)
		}
	}

	const handleNext = () => {
		if (currentIndex === images.length - 1) {
			setCurrentIndex(0)
		} else {
			setCurrentIndex(currentIndex + 1)
		}
	}

	return (
		<div className={styles.carousel}>
			<div className={styles.imagesContainer}>
				<div className={styles.imagesCon}>
					<img src={images[currentIndex][0]} alt="" className={styles.image} />
					<img src={images[currentIndex][1]} alt="" className={styles.image} />
				</div>
				<h2>{titles[currentIndex]}</h2>
			</div>

			<div className={styles.btns}>
				<button onClick={handlePrevious} className={styles.btn}>
					Previous
				</button>
				<button onClick={handleNext} className={styles.btn}>
					Next
				</button>
			</div>
		</div>
	)
}

export default ImageCarousel
