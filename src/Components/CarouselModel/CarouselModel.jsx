import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import styles from './CarouselModel.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faClose } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
const _ = require('lodash');

const CarouselModel = ({clickedImage,  showModal, closeHandler ,carouselImages}) => {

	const [selectedProduct, setSelectedProduct] = useState()
	const [currentSlide, setCurrentSlide] = useState(0)
	
	// Function to compare two arrays deeply
		function isEqual(arr1, arr2) {
			return _.isEqual(arr1, arr2);
		}

		// Find the index of a nested array within carouselImages
		function findIndex(imageArray) {
			return carouselImages.findIndex(arr => isEqual(arr, imageArray));
		}

		// Usage
		useEffect(() => {

			setSelectedProduct(findIndex(clickedImage))
		},[clickedImage])
		

	const nextSlide = () => {
		setCurrentSlide(
			currentSlide === clickedImage.length - 1 ? 0 : currentSlide + 1
		)
	

		console.log(currentSlide)
	}

	const prevSlide = () => {
		setCurrentSlide(
			currentSlide === 0 ? clickedImage.length - 1 : currentSlide - 1
		)

		
	}
	return (
		<>
		<Modal show={showModal} onHide={closeHandler} centered size="lg">
			<Modal.Header
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					backgroundColor: '#7993d2'
				}}>
				<h3>
					{selectedProduct === 0 ? "Mobile Hotel Shelter" : selectedProduct === 1 ? "Military Office" : selectedProduct === 2 ? "Police Dog Kennel" : "Mobile Studio Shelter"}
				</h3>
				<FontAwesomeIcon
					className={styles.editBtn}
					icon={faClose}
					onClick={closeHandler}
				/>
			</Modal.Header>
			<Modal.Body className={styles.body}>
						{clickedImage.map((image, index) => {
							return (
								<div
								key={index}
									style={{
										border: '1px solid rgba(209, 213, 219, 0.3)',
										backdropFilter: ' blur(3px) saturate(200%)',
										backDropFilter: 'blur(3px) saturate(200%)',
										backgroundColor: 'rgba(300, 100, 150, 0.1	)',
										borderRadius: '12px',
									
									}}
									class="col-md-12 col-sm-12"
									className={index === currentSlide ? 'slide_active' : 'slide'}>
									
									<img
										src={image}
										alt=""
										style={{height:'50vh',width:'100%'}}
										
									/>
									<h4 className='text-center'>
										{index === 0 ? "Exterior" : "Interior"}
									</h4>
									
								</div>
							)
						})}
						
						<button className={styles.prev} onClick={prevSlide}>
							<FontAwesomeIcon icon={faArrowLeft}  className='text-dark'/>
						</button>
						<button className={styles.next} onClick={nextSlide}>
							<FontAwesomeIcon icon={faArrowRight}  className='text-dark'/>
						</button>
			</Modal.Body>
			<Modal.Footer>

			</Modal.Footer>
			
		</Modal>
		

		</>
	)
}

export default CarouselModel
