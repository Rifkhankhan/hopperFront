import React, { useEffect, useState } from 'react'
import styles from './ImageCarousel.module.css'
import image from './../../images/Picture5.png'
import image1 from './../../images/Picture6.gif'
import image2 from './../../images/Picture7.gif'
import image3 from './../../images/Picture8.gif'
import image9 from './../../images/Picture9.jpg'
import image10 from './../../images/Picture10.jpg'
import image11 from './../../images/Picture11.jpg'
import image12 from './../../images/Picture12.jpg'
import image13 from './../../images/Picture13.jpg'
import image14 from './../../images/Picture14.jpg'
import image15 from './../../images/Picture15.png'
import image16 from './../../images/Picture16.jpg'
import image17 from './../../images/Picture17.jpg'

const ImageCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const goToPreviousSlide = () => {
		const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const goToNextSlide = () => {
		const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	const items = [
		{
			image,
			image1
		},
		{
			image2,
			image3
		}
	]

	return (
		<div className={styles.container}>
			<div className={styles.heading}>Products</div>
			<div className="container">
				<div
					class="row"
					style={{
						margin: '1vh',
						display: 'flex',
						justifyContent: 'space-around'
					}}>
					<div
						class={`col col-md-5 col-sm-5 hover-effect ${styles.box}`}
						style={{
							border: '1px solid rgba(209, 213, 219, 0.3)',
							backdropFilter: ' blur(3px) saturate(200%)',
							backDropFilter: 'blur(3px) saturate(200%)',
							backgroundColor: 'rgba(197, 37, 237, 0.23)',
							borderRadius: '12px',
							height: '30vh',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginBlock: '1vh'
						}}>
						<img src={image} />
					</div>

					<div
						class={`col col-md-5 col-sm-5 hover-effect ${styles.box}`}
						style={{
							border: '1px solid rgba(209, 213, 219, 0.3)',
							backdropFilter: ' blur(3px) saturate(200%)',
							backDropFilter: 'blur(3px) saturate(200%)',
							backgroundColor: 'rgba(197, 37, 237, 0.23)',
							borderRadius: '12px',
							height: '30vh',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: '1vh'
						}}>
						<img src={image1} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ImageCarousel
