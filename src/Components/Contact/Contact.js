import React from 'react'
import image2 from './../../images/ContactUs.png'
import styles from './Contact.module.css'
import { faMailbox, faMessage } from '@fortawesome/free-regular-svg-icons'
import {
	faFacebook,
	faInstagram,
	faLetterboxd,
	faMailchimp
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactForm from '../Form/ContactForm'
import {
	faHome,
	faMailBulk,
	faMailForward,
	faPhone
} from '@fortawesome/free-solid-svg-icons'
const Contact = ({ contactRef }) => {
	return (
		<section
			id="contact"
			class="paralax-mf footer-paralax bg-image sect-mt4 route"
			ref={contactRef}
			style={{ color: 'white', marginBlock: '5vh', paddingBlock: '12vh' }}
			className={styles.container}>
			{/* style="background-image: url(assets/img/overlay-bg.jpg)"> */}
			<div class="overlay-mf" />
			<div className="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="contact-mf">
							<div id="contact" class="box-shadow-full">
								<div class="row">
									<div class="col-md-6 col-12">
										<div class="title-box-3 pt-4 pt-md-0">
											<h4 class="title-center" className={styles.header}>
												Get in Touch
											</h4>
										</div>
										<div class="more-info " style={{ textAlign: 'left' }}>
											<p class="lead" />
											<h4>LOOKING AN ADEQUATE SOLUTION FOR YOUR COMPANY? </h4>
											<p />
											<ul class="list-ico">
												<li className="my-2">
													<FontAwesomeIcon
														icon={faHome}
														fontSize="1.8em"
														color="white"
													/>
													<span class="bi bi-geo-alt" /> P.O Box 30264, State of
													Qatar – Doha
												</li>
												<li className="my-2">
													<FontAwesomeIcon
														icon={faPhone}
														fontSize="1.8em"
														color="white"
													/>
													<span class="bi bi-phone" /> +974 41402428
												</li>
												<li className="my-2">
													<FontAwesomeIcon
														icon={faPhone}
														fontSize="1.8em"
														color="white"
													/>
													<span class="bi bi-phone" /> +974 77249961
												</li>
												<li className="my-2">
													<FontAwesomeIcon icon={faMessage} fontSize="1.8em" />
													<span class="bi bi-envelope" /> info@hopper-eng.com{' '}
												</li>
												<li className="my-2">
													<a href="	https://web.facebook.com/HopPerengServices">
														<FontAwesomeIcon
															icon={faFacebook}
															fontSize="1.8em"
															color="white"
														/>
													</a>
												</li>

												<li className="my-2">
													<a href="	https://www.instagram.com/hopperengtechnologyservices/">
														<FontAwesomeIcon
															icon={faInstagram}
															fontSize="1.8em"
															color="white"
														/>
													</a>
												</li>
											</ul>
										</div>
									</div>

									<div class="col-md-6 col-12">
										<ContactForm />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

Contact.propTypes = {}

export default Contact
