import React, { useEffect, useState } from 'react'
import styles from './ContactForm.module.css'
import { useDispatch } from 'react-redux'
import { createForm } from './../Actions/CustomerAction'
const ContactForm = () => {
	const [formValid, setFormValid] = useState(true)
	const dispatch = useDispatch()
	const [error, setHasError] = useState(false)
	const [inputs, setInputs] = useState({
		fname: { value: '', isValid: true },
		lname: { value: '', isValid: true },
		email: { value: '', isValid: true },
		phone: { value: '', isValid: true },
		message: { value: '', isValid: true },
		company: { value: '', isValid: true },
		whoAmI: { value: '', isValid: true }
	})

	useEffect(() => {
		console.log(inputs)
		setFormValid(
			inputs.fname.isValid &&
				inputs.lname.isValid &&
				inputs.email.isValid &&
				inputs.phone.isValid &&
				inputs.company.isValid &&
				inputs.whoAmI.isValid &&
				inputs.message.isValid
		)

		return () => {}
	}, [inputs])

	const inputTextChangeHandler = (inputType, enteredValue) => {
		console.log(enteredValue)
		setInputs(currentInputValue => {
			return {
				...currentInputValue,
				[inputType]: { value: enteredValue, isValid: true }
			}
		})
	}
	const submitHandler = () => {
		const data = {
			fname: inputs.fname.value,
			lname: inputs.lname.value,
			email: inputs.email.value,
			company: inputs.company.value,
			phone: inputs.phone.value,
			whoAmI: inputs.whoAmI.value,
			message: inputs.message.value
		}

		const fnameValid = data.fname?.trim().length > 0
		const whoAmIValid = data.whoAmI?.trim().length > 0
		const messageValid = data.message?.trim().length > 0
		const lnameValid = data.lname?.trim().length > 0
		const companyValid = data.company?.trim().length > 0
		const emailValid =
			data.email?.trim().length > 0 && data.email?.trim().includes('@')
		const phoneValid =
			data.phone.toString().trim().length > 9 &&
			data.phone.toString().trim().length <= 10

		if (
			!fnameValid ||
			!lnameValid ||
			!emailValid ||
			!phoneValid ||
			!whoAmIValid ||
			!messageValid ||
			!companyValid
		) {
			setInputs(currentInputs => {
				return {
					fname: { value: currentInputs.fname.value, isValid: fnameValid },
					whoAmI: { value: currentInputs.whoAmI.value, isValid: whoAmIValid },
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

		dispatch(createForm(data))
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
			<form class="form">
				{/* forms row start */}

				<div class="form-row row">
					<div class="col-md-6 col-sm-6 my-3">
						<div class="form-group">
							<input
								type="email"
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
							placeholder="First Name"
							value={inputs.fname.value}
							onChange={e => inputTextChangeHandler('fname', e.target.value)}
						/>
					</div>
					<div class="col-md-6 col-sm-6  my-3">
						<input
							type="Last Name"
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
								placeholder="Enter Message"
								value={inputs.message.value}
								onChange={e =>
									inputTextChangeHandler('message', e.target.value)
								}
							/>
						</div>
					</div>

					<div class="col-md-5 col-sm-6 my-3">
						<div class="form-group">
							<div class="row mb-1">
								<input
									type="radio"
									id="option1"
									name="whoAmI"
									onChange={e => inputTextChangeHandler('whoAmI', 'owner')}
									value={inputs.whoAmI.value}
									class="col col-2"
								/>
								<label
									for="option1"
									class="col col-1"
									style={{ color: 'white', fontSize: '2vh' }}>
									Owner
								</label>
							</div>

							<div class="row mb-1">
								<input
									type="radio"
									id="option1"
									name="whoAmI"
									onChange={e => inputTextChangeHandler('whoAmI', 'president')}
									value={inputs.whoAmI.value}
									class="col col-2"
								/>
								<label
									for="option1"
									class="col col-1"
									style={{ color: 'white', fontSize: '2vh' }}>
									President
								</label>
							</div>
							<div class="row mb-1">
								<input
									type="radio"
									id="option1"
									name="whoAmI"
									onChange={e =>
										inputTextChangeHandler('whoAmI', 'viceprecident')
									}
									value={inputs.whoAmI.value}
									class="col col-2"
								/>
								<label
									for="option1"
									class="col col-md-4 col-sm-1"
									style={{ color: 'white', fontSize: '2vh' }}>
									Vice President
								</label>
							</div>
							<div class="row mb-1">
								<input
									type="radio"
									id="option1"
									name="whoAmI"
									onChange={e => inputTextChangeHandler('whoAmI', 'manager')}
									value={inputs.whoAmI.value}
									class="col col-2"
								/>
								<label
									for="option1"
									class="col col-1"
									style={{ color: 'white', fontSize: '2vh' }}>
									Manager
								</label>
							</div>

							<div class="row mb-1">
								<input
									type="radio"
									id="option1"
									name="whoAmI"
									onChange={e => inputTextChangeHandler('whoAmI', 'marketing')}
									value={inputs.whoAmI.value}
									class="col col-2"
								/>
								<label
									for="option1"
									class="col col-1"
									style={{ color: 'white', fontSize: '2vh' }}>
									Marketing
								</label>
							</div>
						</div>
					</div>

					<div class="col-md-1 col-sm-6 my-3">
						<div class="form-group">
							<button
								type="button"
								class="btn btn-primary"
								onClick={submitHandler}>
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
