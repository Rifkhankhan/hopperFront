import React from 'react'
import image2 from './../../images/ser-p-img2.png'
import image from './../../images/ser-p-img1.png'
import image1 from './../../images/Picture4.jpg'
import image3 from './../../images/Picture6.png'
import image4 from './../../images/Picture7.jpg'
import styles from './Projects.module.css'
const Projects = ({ projectRef }) => {
	return (
		<section
			id="projects"
			class=" blog-mf sect-pt4 route"
			ref={projectRef}
			style={{ color: 'white', marginTop: '5vh' }}
			className={styles.container}>
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="title-box text-center">
							<h3 class="title-a" className={styles.header}>
								Our Projects
							</h3>
							<p class="subtitle-a"></p>
							<div class="line-mf"></div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4 mt-3">
						<div class="card card-blog">
							<div class="card-img">
								<a href="">
									<img src={image2} alt="" class="img-fluid" />
								</a>
							</div>
							<div class="card-body">
								<div class="card-category-box">
									<div class="card-category">
										<h6 class="category">ZERO CONNECT ENERGY</h6>
									</div>
								</div>

								<p class="card-description">
									We have selected the top energy technology from natural
									resources Magnetic Soler. to match with our company philosophy
									HopPer ZERO CONNECT concept our engineering team is
									specializes in the design, and installation of renewable
									energy systems to match with our products.
								</p>
							</div>
						</div>
					</div>
					<div class="col-md-4 mt-3">
						<div class="card card-blog">
							<div class="card-img">
								<a href="">
									<img src={image} alt="" class="img-fluid" />
								</a>
							</div>
							<div class="card-body">
								<div class="card-category-box">
									<div class="card-category">
										<h6 class="category">WATER GENERATOR</h6>
									</div>
								</div>

								<p class="card-description">
									No matter what happens, you will always have your own way of
									producing water. Be it a catastrophe scenario, active living
									or don’t want to depend on tap water.
								</p>
							</div>
						</div>
					</div>
					<div class="col-md-4 mt-3">
						<div class="card card-blog">
							<div class="card-img">
								<a href="">
									<img src={image1} alt="" class="img-fluid" />
								</a>
							</div>
							<div class="card-body">
								<div class="card-category-box">
									<div class="card-category">
										<h6 class="category">THE WORLD’S FIRST CONTAINER FARM</h6>
									</div>
								</div>
								<p class="card-description"></p>
								<h4>Complete System Integration</h4>
								The Greenery™ S features several specialized systems designed to
								optimize space, control, water, light, and air to grow the
								highest-quality plants year-round. Together, these components
								provide the operator with an easy-to-use growing platform that
								maximizes yields and efficiency while minimizing labor.
								<p></p>
							</div>
						</div>
					</div>

					<div class="col-md-4 mt-3">
						<div class="card card-blog">
							<div class="card-img">
								<a href="">
									<img src={image3} alt="" class="img-fluid" />
								</a>
							</div>
							<div class="card-body">
								<div class="card-category-box">
									<div class="card-category">
										<h6 class="category">
											THE GREENERY™ S IS BUILT ON THREE KEY PRINCIPLES
										</h6>
									</div>
								</div>
								<p class="card-description"></p>
								<h4>DESIGN</h4>
								The Greenery S leverages Freight Farms’ decade of experience
								building and designing container farms. Every farm component
								gives equal priority to the needs of both plant and operator.
								<p></p>
							</div>
						</div>
					</div>

					<div class="col-md-4 mt-3">
						<div class="card card-blog">
							<div class="card-img">
								<a href="">
									<img src={image3} alt="" class="img-fluid" />
								</a>
							</div>
							<div class="card-body">
								<div class="card-category-box">
									<div class="card-category">
										<h6 class="category">AUTOMATION</h6>
									</div>
								</div>

								<p class="card-description">
									Above all else, the Greenery S is a smart farm. When fully
									integrated with Freight Farms’ farmhand® software, operators
									can achieve success by automating most of the farming process.
								</p>
							</div>
						</div>
					</div>

					<div class="col-md-4 my-3">
						<div class="card card-blog">
							<div class="card-img">
								<a href="blog-single.html">
									<img src={image4} alt="" class="img-fluid" />
								</a>
							</div>
							<div class="card-body">
								<div class="card-category-box">
									<div class="card-category">
										<h6 class="category">PERFORMANCE</h6>
									</div>
								</div>

								<p class="card-description">
									International design and automation units to drive peak
									performance in yields, quality, and efficiency. The result is
									a plant production powerhouse.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects
