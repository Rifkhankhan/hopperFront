import React, { useEffect, useState } from 'react'
import styles from './About.module.css'
import image from './../../images/Picture3.png'
import image1 from './../../images/2.jpg'
import image2 from './../../images/3.jpg'
import image3 from './../../images/4.jpg'
const About = ({ aboutRef }) => {
	return (
		<section
			id="about"
			class="about-mf sect-pt4 route"
			className={styles.container}
			ref={aboutRef}>
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="box-shadow-full">
							<div class="row">
								<div class="col-md-6">
									<div class="row mb-3">
										<div class="col-sm-6 col-md-5">
											<div class="about-img">
												<img
													src={image2}
													class="img-fluid rounded b-shadow-a"
													alt=""
												/>
											</div>
										</div>
										<div class="col-sm-6 col-md-7">
											<div class="about-info" style={{ textAlign: 'left' }}>
												<p>
													<span class="title-s">Name: </span>{' '}
													<span>Adil A Nabhan</span>
												</p>
												<p>
													<span class="title-s">Profile: </span>{' '}
													<span>Director</span>
												</p>
												<p>
													<span class="title-s">Email: </span>{' '}
													<span>adil@hopper-eng.com</span>
												</p>
											</div>
										</div>
									</div>

									<div class="row mb-3">
										<div class="col-sm-6 col-md-5">
											<div class="about-img">
												<img
													src={image1}
													class="img-fluid rounded b-shadow-a"
													alt=""
												/>
											</div>
										</div>
										<div class="col-sm-6 col-md-7">
											<div class="about-info" style={{ textAlign: 'left' }}>
												<p>
													<span class="title-s">Name: </span>{' '}
													<span>Mohamed Safan</span>
												</p>
												<p>
													<span class="title-s">Profile: </span>{' '}
													<span>Pro</span>
												</p>
												<p>
													<span class="title-s">Email: </span>{' '}
													<span>m-safan@hopper-eng.com</span>
												</p>
											</div>
										</div>
									</div>

									<div class="row mb-3">
										<div class="col-sm-6 col-md-5">
											<div class="about-img">
												<img
													src={image3}
													class="img-fluid rounded b-shadow-a"
													alt=""
												/>
											</div>
										</div>
										<div class="col-sm-6 col-md-7">
											<div class="about-info" style={{ textAlign: 'left' }}>
												<p>
													<span class="title-s">Name: </span>{' '}
													<span>Kabarungi Priscah Angel</span>
												</p>
												<p>
													<span class="title-s">Profile: </span>{' '}
													<span>
														Human Resource &amp; Business Development Manager
													</span>
												</p>
												<p>
													<span class="title-s">Email: </span>{' '}
													<span>angel@hopper-eng.com</span>
												</p>
											</div>
										</div>
									</div>

									<div class="skill-mf"></div>
								</div>

								<div class="col-md-6">
									<div
										class="about-me pt-4 pt-md-0"
										className={styles.aboutDesc}>
										<div class="title-box-2">
											<h5 class="title-left" className={styles.aboutHead}>
												About Us
											</h5>
										</div>
										<p class="lead"></p>
										<h4
											className={styles.aboutSubHead}
											style={{ textAlign: 'left' }}>
											We design and build attractive movable spaces. All our
											Expendables are multifunctional, affordable, relocatable
											and easy to set up.
										</h4>
										<p style={{ textAlign: 'left' }}>
											Our dedicated internal design team will work closely with
											you to help create and draft your custom built cube to
											your exact specifications. Our custom built cube are
											designed uniquely to suit your needs. With a design team
											working by your side, your custom modified CUBE will
											always be of high quality and great value for money.
										</p>

										<p class="lead"></p>
										<h4
											className={styles.aboutSubHead}
											style={{ textAlign: 'left' }}>
											Work experience
										</h4>
										<p style={{ textAlign: 'left' }} class="mb-3">
											Our dedicated internal design team will work closely with
											you to help create and draft your custom built cube to
											your exact specifications. Our custom built cube are
											designed uniquely to suit your needs. With a design team
											working by your side, your custom modified CUBE will
											always be of high quality and great value for money.
										</p>
										<p></p>
										<p class="lead"></p>
										<h4
											className={styles.aboutSubHead}
											style={{ textAlign: 'left' }}>
											Dedicated design team
										</h4>
										<p style={{ textAlign: 'left' }}>
											Our dedicated internal design team will work closely with
											you to help create and draft your custom built cube to
											your exact specifications. Our custom built cube are
											designed uniquely to suit your needs. With a design team
											working by your side, your custom modified cube will
											always be of high quality and great value for money.
										</p>
										<p></p>
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

export default About
