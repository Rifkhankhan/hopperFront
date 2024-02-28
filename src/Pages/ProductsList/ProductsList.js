import React, { useEffect, useState } from 'react'
import styles from './ProductsList.module.css'
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

const ProductsList = () => {
	return (
		<div className={styles.container}>
			<div className={styles.heading}>ZERO SHULTER PRODUCTS</div>

			<div className={styles.subContainer}>
				<div className={styles.box}>
					<h3>Mobile Hotel Shelter</h3>
					<h3>Mobile Police & Military Shelter</h3>
					<h3>Mobile Police Dog Kennels</h3>
					<h3>Mobile Studio Shelter</h3>
					<h3>Mobile Nuclear Shelter</h3>
					<h3>Mobile Farm Shelter</h3>
					<h3>Mobile Hospital Shelter</h3>
					<h3>Mobile Office Shelter</h3>
				</div>
				<div className={styles.box}>
					<h3> ZERO CONNECT VALUE</h3>
				</div>
			</div>

			<div className={styles.products}>
				<div className={styles.productContainer}>
					<div className={styles.product}>
						<div className={styles.productImage}>
							<img src={image} alt="" className={styles.image} />
							<h3>Exterior</h3>
						</div>
						<div className={styles.productImage}>
							<img src={image1} alt="" className={styles.image} />
							<h3>Interior</h3>
						</div>
					</div>
					<h2>Hotel Room</h2>
				</div>
				<div className={styles.productContainer}>
					<div className={styles.product}>
						<div className={styles.productImage}>
							<img src={image2} alt="" className={styles.image} />
							<h3>Exterior</h3>
						</div>
						<div className={styles.productImage}>
							<img src={image3} alt="" className={styles.image} />
							<h3>Interior</h3>
						</div>
					</div>
					<h2>Military Office</h2>
				</div>

				<div className={styles.productContainer}>
					<div className={styles.product}>
						<div className={styles.productImage}>
							<img src={image4} alt="" className={styles.image} />
							<h3>Exterior</h3>
						</div>
						<div className={styles.productImage}>
							<img src={image5} alt="" className={styles.image} />
							<h3>Interior</h3>
						</div>
					</div>
					<h2>Police Dog Kennels</h2>
				</div>

				<div className={styles.productContainer}>
					<div className={styles.product}>
						<div className={styles.productImage}>
							<img src={image6} alt="" className={styles.image} />
							<h3>Exterior</h3>
						</div>
						<div className={styles.productImage}>
							<img src={image7} alt="" className={styles.image} />
							<h3>Interior</h3>
						</div>
					</div>
					<h2>Mobile Studio Shelter</h2>
				</div>

				<div className={styles.productSubContainer}>
					<div className={styles.productSubImage}>
						<img src={image8} alt="" className={styles.image} />
						<h3>Earthquake-resistant Shelters</h3>
					</div>
					<div className={styles.productSubImage}>
						<img src={image9} alt="" className={styles.image} />
						<h3>Mobile Nuclear Shelter</h3>
					</div>

					<div className={styles.productSubImage}>
						<img src={image10} alt="" className={styles.image} />
						<h3>Bomb (blast) Shelter</h3>
					</div>

					<div className={styles.productSubImage}>
						<img src={image11} alt="" className={styles.image} />
						<h3>Flood shelters</h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductsList
