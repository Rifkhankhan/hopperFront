import React, { useEffect, useState } from 'react'
import styles from './ContactForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { createForm } from './../Actions/CustomerAction'
import emailjs from 'emailjs-com';
const ContactForm = () => {
	const [formValid, setFormValid] = useState(true)
	const notification = useSelector(state => state.customer.notification)
	const [formSubmit, setFormSubmit] = useState(false)
	const dispatch = useDispatch()
	const [error, setHasError] = useState(false)
	// Initial state for inputs
	const initialInputsState = {
		fname: { value: '', isValid: true },
		lname: { value: '', isValid: true },
		email: { value: '', isValid: true },
		phone: { value: '', isValid: true },
		message: { value: '', isValid: true },
		company: { value: '', isValid: true },
	}

	// State for inputs
	const [inputs, setInputs] = useState(initialInputsState)

	useEffect(() => {
		setFormValid(
			inputs.fname.isValid &&
				inputs.lname.isValid &&
				inputs.email.isValid &&
				inputs.phone.isValid &&
				inputs.company.isValid &&
				inputs.message.isValid
		)

		return () => {}
	}, [inputs])

	const inputTextChangeHandler = (inputType, enteredValue) => {
		setInputs(currentInputValue => {
			return {
				...currentInputValue,
				[inputType]: { value: enteredValue, isValid: true }
			}
		})
	}
	// if (notification) {
	// 	setTimeout(function () {
	// 		window.location.reload()
	// 	}, 1000)
	// }
	const submitHandler = (e) => {
		e.preventDefault();


		const data = {
			fname: inputs.fname.value,
			lname: inputs.lname.value,
			email: inputs.email.value,
			company: inputs.company.value,
			phone: inputs.phone.value,
			message: inputs.message.value,
		}

		const fnameValid = data.fname?.trim().length > 0
		const messageValid = data.message?.trim().length > 0
		const lnameValid = data.lname?.trim().length > 0
		const companyValid = data.company?.trim().length > 0
		const emailValid =
			data.email?.trim().length > 0 && data.email?.trim().includes('@')
		const phoneValid =
			data.phone.toString().trim().length > 9 
		if (
			!fnameValid ||
			!lnameValid ||
			!emailValid ||
			!phoneValid ||
			!messageValid ||
			!companyValid
		) {

			setInputs(currentInputs => {
				return {
					fname: { value: currentInputs.fname.value, isValid: fnameValid },
					lname: { value: currentInputs.lname.value, isValid: lnameValid },
					email: { value: currentInputs.email.value, isValid: emailValid },
					company: {
						value: currentInputs.company.value,
						isValid: companyValid
					},
					phone: { value: currentInputs.phone.value, isValid: phoneValid },
					message: { value: currentInputs.message.value, isValid: messageValid }
				}
			})
			return
		}

		emailjs.sendForm('service_ecnxg7f', 'template_c9stz5k',e.target, 'HTCtiq7F1bnT0LaFL')
        
		dispatch(createForm(data))
		// setFormSubmit(true)
		setInputs(initialInputsState)
	}
	return (
		<div className={`container ${styles.container} `}>
			<h2 class="row col-md-12 col-sm-6" className={styles.header}>
				INFORMATION REQUEST FORM
			</h2>
			{!formValid && (
				<div className={styles.errorMessageContainer}>
					<p className={styles.errorMessage}>Invalid Data Please check!</p>
				</div>
			)}

			{notification && (
				<div className={styles.successContainer}>
					<p className={styles.successMessage}>Successfully sent!</p>
				</div>
			)}

			{!notification && !formSubmit && (
				<div className={styles.successContainer}>
					<i class="fas fa-spinner fa-spin"></i>
				</div>
			)}

			<form class="form" id='form' onSubmit={submitHandler}>
				{/* forms row start */}

				<div class="form-row row">
					<div class="col-md-6 col-sm-6 my-3">
						<div class="form-group">
							<input
								type="email"
								name='email'
								class="form-control"
								id="inputFirstName"
								placeholder="Enter email"
								value={inputs.email.value}
								onChange={e => inputTextChangeHandler('email', e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div class="form-row row">
					<div class="col-md-6 col-sm-6  my-3">
						<input
							type="First Name"
							class="col-sm-6 col-md-6 form-control"
							name='fname'
							placeholder="First Name"
							value={inputs.fname.value}
							onChange={e => inputTextChangeHandler('fname', e.target.value)}
						/>
					</div>
					<div class="col-md-6 col-sm-6  my-3">
						<input
							type="Last Name"
							name='lname'

							class="col-sm-6 col-md-6 form-control"
							placeholder="Last Name"
							value={inputs.lname.value}
							onChange={e => inputTextChangeHandler('lname', e.target.value)}
						/>
					</div>
				</div>

				<div class="form-row row">
					<div class="col-md-6 col-sm-6  my-3">
						<input
							type="Company"
							name='company'

							class="col-sm-6 col-md-6 form-control"
							placeholder="Company"
							value={inputs.company.value}
							onChange={e => inputTextChangeHandler('company', e.target.value)}
						/>
					</div>
					<div class="col-md-6 col-sm-6  my-3">
						<input
							type="Last Name"
							class="col-sm-6 col-md-6 form-control"
							placeholder="Phone"
							name='phone'

							value={inputs.phone.value}
							onChange={e => inputTextChangeHandler('phone', e.target.value)}
						/>
					</div>
				</div>

				<div class="form-row row">
					<div class="col-md-6 col-sm-6 my-3">
						<div class="form-group">
							<textarea
								type="message"
								class="form-control"
								id="inputFirstName"
							name='message'

								placeholder="Enter Message"
								value={inputs.message.value}
								rows={5}
								onChange={e =>
									inputTextChangeHandler('message', e.target.value)
								}
							/>
						</div>
					</div>


					<div class="col-md-1 col-sm-6 my-3">
						<div class="form-group">
							<button
								type="submit"
								class="btn btn-primary"
								>
								Submit
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default ContactForm
