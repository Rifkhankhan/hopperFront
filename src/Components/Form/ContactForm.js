import React, { useEffect, useState } from 'react'
import styles from './ContactForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { createForm } from './../Actions/CustomerAction'
import emailjs from 'emailjs-com'
const ContactForm = () => {
	const [formValid, setFormValid] = useState(true)
	const notification = useSelector(state => state.customer.notification)
	const [formSubmit, setFormSubmit] = useState(false)
	const dispatch = useDispatch()
	const [error, setHasError] = useState(false)
	const [selectedOther, setSelectedOther] = useState(false)
	// Initial state for inputs
	const initialInputsState = {
		fname: { value: '', isValid: true },
		lname: { value: '', isValid: true },
		email: { value: '', isValid: true },
		phone: { value: '', isValid: true },
		message: { value: '', isValid: true },
		product: { value: '', isValid: true },
		company: { value: '', isValid: true }
	}

	const products = [
		'Mobile hotel cube',
		'Mobile policeor military cube',
		'medical cube',
		'office cube',
		'magnetic generator',
		'soler power',
		'zero water generator',
		'zero farm',
		'mobile nuclear shelter',
		'earthquake resistant shelter',
		'bomb(blast) shelter',
		'flood shelter',
		'Other'
	]

	// State for inputs
	const [inputs, setInputs] = useState(initialInputsState)

	useEffect(() => {
		setFormValid(
			inputs.fname.isValid &&
				inputs.lname.isValid &&
				inputs.email.isValid &&
				inputs.phone.isValid &&
				inputs.company.isValid &&
				inputs.product.isValid &&
				inputs.message.isValid
		)

		return () => {}
	}, [inputs])

	const inputTextChangeHandler = (inputType, enteredValue) => {
		if (inputType === 'product' && enteredValue === 'Other') {
			setSelectedOther(true)
			enteredValue = ''
		}
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
	const submitHandler = e => {
		e.preventDefault()

		const data = {
			fname: inputs.fname.value,
			lname: inputs.lname.value,
			email: inputs.email.value,
			company: inputs.company.value,
			product: inputs.product.value,
			phone: inputs.phone.value,
			message: inputs.message.value
		}

		const fnameValid = data.fname?.trim().length > 0
		const messageValid = data.message?.trim().length > 0
		const lnameValid = data.lname?.trim().length > 0
		const productValid = data.product?.trim().length > 0
		const companyValid = data.company?.trim().length > 0
		const emailValid =
			data.email?.trim().length > 0 && data.email?.trim().includes('@')
		const phoneValid = data.phone.toString().trim().length > 9
		if (
			!fnameValid ||
			!lnameValid ||
			!emailValid ||
			!productValid ||
			!phoneValid ||
			!messageValid ||
			!companyValid
		) {
			setInputs(currentInputs => {
				return {
					fname: { value: currentInputs.fname.value, isValid: fnameValid },
					lname: { value: currentInputs.lname.value, isValid: lnameValid },
					product: {
						value: currentInputs.product.value,
						isValid: productValid
					},
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

		// Set the subject line for the email
		const subject = 'Customer Information Request'

		// Set the recipient email address
		const recipientEmail = 'rifkhanmuhammed17@gmail.com'

		// Construct the email body
		const body = `
			Hi, 

			I am ${data.fname} ${data?.lname}. 
			Here is my contact information:
			Phone: ${data?.phone}
			Company: ${data?.company}
			Email: ${data?.email}
			Product of Interest: ${data?.product}
			
			Message:
			${data?.message}
		`

		// Encode the email body
		const encodedBody = encodeURIComponent(body)

		// Construct the mailto link with subject and body
		const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
			subject
		)}&body=${encodedBody}`

		// Open the default email client with the mailto link
		window.location.href = mailtoLink

		setSelectedOther(false)
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

			<form class="form" id="form" onSubmit={submitHandler}>
				{/* forms row start */}

				<div class="form-row row">
					<div class="col-md-6 col-sm-6 my-3">
						<div class="form-group">
							<input
								type="email"
								name="email"
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
							name="fname"
							placeholder="First Name"
							value={inputs.fname.value}
							onChange={e => inputTextChangeHandler('fname', e.target.value)}
						/>
					</div>
					<div class="col-md-6 col-sm-6  my-3">
						<input
							type="Last Name"
							name="lname"
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
							name="company"
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
							name="phone"
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
								name="message"
								placeholder="Enter Message"
								value={inputs.message.value}
								rows={5}
								onChange={e =>
									inputTextChangeHandler('message', e.target.value)
								}
							/>
						</div>
					</div>
					{!selectedOther && (
						<div class="col-md-6 col-sm-6  my-3">
							<select
								className="col-sm-6 col-md-6 form-control"
								name="product"
								value={inputs.product.value}
								onChange={e =>
									inputTextChangeHandler('product', e.target.value)
								}>
								<option value="" disabled>
									Select Product
								</option>
								{products.map(product => (
									<option value={product} key={product}>
										{product}
									</option>
								))}
							</select>
						</div>
					)}
					{selectedOther && (
						<div class="col-md-6 col-sm-6  my-3">
							<input
								type="text"
								class="col-sm-6 col-md-6 form-control"
								placeholder="Type A Product"
								name="product"
								value={inputs.product.value}
								onChange={e =>
									inputTextChangeHandler('product', e.target.value)
								}
							/>
						</div>
					)}
				</div>
				<div class="form-row row">
					<div class="col-md-1 col-sm-6 my-3">
						<div class="form-group">
							<button type="submit" class="btn btn-primary">
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
