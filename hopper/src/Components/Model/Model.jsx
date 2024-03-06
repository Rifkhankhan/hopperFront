import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import styles from './Model.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faPen } from '@fortawesome/free-solid-svg-icons'

const Model = ({clickedImage,  showModal, closeHandler }) => {
	console.log(clickedImage);
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
					{clickedImage.head}
				</h3>
				<FontAwesomeIcon
					className={styles.editBtn}
					icon={faClose}
					onClick={closeHandler}
				/>
			</Modal.Header>
					<Modal.Body className={styles.body}>
						<div
							className="container"
							style={{ marginTop: '1vh', marginBlock: '2vh' }}>
								<img
									src={clickedImage.image}
									alt=""
									className={styles.img}
									style={{
										background: 'rgba(83, 60, 97, 0.516)',
										boxShadow: ' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
										backDropFilter: 'blur( 2.5px )',
										// -webkit-backdrop-filter:' blur( 2.5px )',
										borderRadius: '10px',
										width:"100%",
										height:'100%'
									}}
								/>
						</div>
						

					

					
					</Modal.Body>
					
				</Modal>
		

		</>
	)
}

export default Model
