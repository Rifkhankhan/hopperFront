import React, { useEffect, useState } from 'react'
import styles from './Products.module.css'
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
import pic1 from './../../images/Picture1.gif'
import pic2 from './../../images/Picture2.png'
import image18 from './../../images/Picture1.jpg'
import image19 from './../../images/Picture2.jpg'
import image20 from './../../images/Picture3.jpg'
import image21 from './../../images/Picture6.png'
import './Products.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate, useNavigation } from 'react-router-dom'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowLeft,
	faArrowRight,
	faClose
} from '@fortawesome/free-solid-svg-icons'
const Products = ({ productRef }) => {
	const navigate = useNavigate()
	const [selectedProduct, setSelectedProduct] = useState('')
	const [currentSlide, setCurrentSlide] = useState(0)

	const nextSlide = () => {
		if (selectedProduct === 'mobileSelter') {
			setCurrentSlide(
				currentSlide === ShelterImages.length - 1 ? 0 : currentSlide + 1
			)
		} else if (selectedProduct === 'farm') {
			setCurrentSlide(
				currentSlide === FarmImages.length - 1 ? 0 : currentSlide + 1
			)
		}

		console.log(currentSlide)
	}

	const prevSlide = () => {
		if (selectedProduct === 'mobileSelter') {
			setCurrentSlide(
				currentSlide === 0 ? ShelterImages.length - 1 : currentSlide - 1
			)
		} else if (selectedProduct === 'farm') {
			setCurrentSlide(
				currentSlide === 0 ? FarmImages.length - 1 : currentSlide - 1
			)
		}
	}

	const FarmImages = [pic1, pic2, image21]
	const ShelterImages = [
		{
			image: image9,
			text: {
				head: 'Hotel Room',
				tail: 'Exterior'
			}
		},
		{
			image: image10,
			text: {
				head: 'Hotel Room',
				tail: 'Interior'
			}
		},
		{
			image: image11,
			text: {
				head: 'Military Office',
				tail: 'Exterior'
			}
		},
		{
			image: image12,
			text: {
				head: 'Military Office',
				tail: 'Interior'
			}
		},
		{
			image: image13,
			text: {
				head: 'Police Dog Keneels',
				tail: 'Exterior'
			}
		},
		{
			image: image14,
			text: {
				head: 'Police Dog Keneels',
				tail: 'Interior'
			}
		},
		{
			image: image15,
			text: {
				head: 'Mobile Studio Shelter',
				tail: 'Exterior'
			}
		},
		{
			image: image16,
			text: {
				head: 'Mobile Studio Shelter',
				tail: 'Interior'
			}
		},
		{
			image: image17,
			text: {
				head: 'Earthquake-resistant Shelters'
			}
		},
		{
			image: image18,
			text: {
				head: 'Mobile Nuclear Shelter'
			}
		},
		{
			image: image19,
			text: {
				head: 'Bomb (blast) Shelter'
			}
		},
		{
			image: image20,
			text: {
				head: 'Flood shelters'
			}
		}
	]

	return (
		<div className={styles.container} ref={productRef}>
			<div className={styles.heading}>OUR PRODUCTS</div>
			{selectedProduct === '' && (
				<div className="container">
					<div
						class="row"
						style={{
							margin: '1vh',
							display: 'flex',
							justifyContent: 'space-around'
						}}>
						<div
							onClick={() => setSelectedProduct('mobileSelter')}
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
							onClick={() => setSelectedProduct('zeroconnect')}
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

					<div
						class="row"
						style={{
							margin: '1vh',
							display: 'flex',
							justifyContent: 'space-around'
						}}>
						<div
							onClick={() => setSelectedProduct('farm')}
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
							<img src={image2} />
						</div>

						<div
							onClick={() => setSelectedProduct('zerowater')}
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
							<img src={image3} />
						</div>
					</div>
				</div>
			)}

			{selectedProduct === 'mobileSelter' && (
				<div className={styles.container} key="mobileSelter">
					<div className={styles.carousel}>
						{ShelterImages.map((image, index) => {
							return (
								<div
									style={{
										border: '1px solid rgba(209, 213, 219, 0.3)',
										backdropFilter: ' blur(3px) saturate(200%)',
										backDropFilter: 'blur(3px) saturate(200%)',
										backgroundColor: 'rgba(300, 100, 150, 0.1	)',
										borderRadius: '12px',
										height: '70vh',
										minHeight: '80%',
										minWidth: '100%'
									}}
									class="col-md-6 col-sm-6"
									className={index === currentSlide ? 'slide_active' : 'slide'}>
									<h2
										style={{
											color: 'white',
											width: '100%',
											height: '10%',
											paddingTop: '2vh'
										}}>
										{' '}
										{image.text.head}
									</h2>
									<img
										src={image.image}
										alt=""
										style={{
											width: '80%',
											height: '80%'
										}}
									/>
									{image.text?.tail && (
										<h4
											style={{
												color: 'white',
												width: '100%',
												height: '10%'
											}}>
											{image.text?.tail}
										</h4>
									)}
								</div>
							)
						})}
						<button
							className={styles.close}
							onClick={() => setSelectedProduct('')}>
							<FontAwesomeIcon icon={faClose} />
						</button>
						<button className={styles.prev} onClick={prevSlide}>
							<FontAwesomeIcon icon={faArrowLeft} />
						</button>
						<button className={styles.next} onClick={nextSlide}>
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
				</div>
			)}

			{selectedProduct === 'farm' && (
				<div className={styles.container} key="farm">
					<div className={styles.carousel}>
						{FarmImages.map((image, index) => {
							return (
								<div
									style={{
										border: '1px solid rgba(209, 213, 219, 0.3)',
										backdropFilter: ' blur(3px) saturate(200%)',
										backDropFilter: 'blur(3px) saturate(200%)',
										backgroundColor: 'rgba(300, 100, 150, 0.1	)',
										borderRadius: '12px',
										height: '70vh',
										minHeight: '80%',
										minWidth: '100%'
									}}
									class="col-md-6 col-sm-6"
									className={index === currentSlide ? 'slide_active' : 'slide'}>
									<h2
										style={{
											color: 'white',
											width: '100%',
											height: '10%',
											paddingTop: '2vh'
										}}>
										{' '}
									</h2>
									<img
										src={image}
										alt=""
										style={{
											width: '80%',
											height: '80%'
										}}
									/>

									<h4
										style={{
											color: 'white',
											width: '100%',
											height: '10%'
										}}></h4>
								</div>
							)
						})}
						<button
							className={styles.close}
							onClick={() => setSelectedProduct('')}>
							<FontAwesomeIcon icon={faClose} />
						</button>
						<button className={styles.prev} onClick={prevSlide}>
							<FontAwesomeIcon icon={faArrowLeft} />
						</button>
						<button className={styles.next} onClick={nextSlide}>
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default Products
