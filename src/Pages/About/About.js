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
								<div class="col-12">
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
