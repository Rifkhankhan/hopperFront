import React from 'react'
import image2 from './../../images/3.jpg'

const Contact = ({ contactRef }) => {
	return (
		<section
			id="contact"
			class="paralax-mf footer-paralax bg-image sect-mt4 route"
			style={{ color: 'white' }}
			ref={contactRef}>
			{/* style="background-image: url(assets/img/overlay-bg.jpg)"> */}
			<div class="overlay-mf"></div>
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="contact-mf">
							<div id="contact" class="box-shadow-full">
								<div class="row">
									<div class="card-img">
										<h5 class="title-left">
											<a href="">
												<img src={image2} alt="" class="img-fluid" />
											</a>
										</h5>
									</div>
									<div class="col-md-6">
										<div class="title-box-2 pt-4 pt-md-0">
											<h4 class="title-center">Get in Touch</h4>
										</div>
										<div class="more-info">
											<p class="lead"></p>
											<h4>LOOKING AN ADEQUATE SOLUTION FOR YOUR COMPANY? </h4>
											<p></p>
											<ul class="list-ico">
												<li>
													<span class="bi bi-geo-alt"></span> P.O Box 30264,
													State of Qatar – Doha
												</li>
												<li>
													<span class="bi bi-phone"></span> +974 41402428
												</li>
												<li>
													<span class="bi bi-phone"></span> +974 77249961
												</li>
												<li>
													<span class="bi bi-envelope"></span>{' '}
													info@hopper-eng.com{' '}
												</li>
											</ul>
										</div>
										<div class="socials">
											<ul>
												<li>
													<a href="">
														<span class="ico-circle">
															<i class="bi bi-facebook"></i>
														</span>
													</a>
												</li>
												<li>
													<a href="">
														<span class="ico-circle">
															<i class="bi bi-instagram"></i>
														</span>
													</a>
												</li>
											</ul>
										</div>
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
