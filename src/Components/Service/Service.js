import React from 'react'
import styles from './OurProducts.module.css'
const Service = ({ servicesRef }) => {
	return (
		<section
			id="products"
			className="services-mf pt-5 route"
			style={{ color: 'white' }}
			className={styles.container}
			ref={servicesRef}>
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="title-box text-center">
							<h3 class="title-a" className={styles.header}>
								Our Services
							</h3>
							<p className="subtitle-a">
								Our services include engineering design, system integration,
								project management, and technical support. We work with clients
								in a variety of industries, including manufacturing,
								agriculture, military, podcast, and renewable energy.
							</p>
							<div
								className="line-mf"
								style={{
									height: '1vh',
									backgroundColor: 'magenta',
									width: '10vh',
									borderRadius: '10px',
									margin: 'auto'
								}}></div>
						</div>
					</div>
				</div>
				<div className="row" style={{ marginBlock: '5vh' }}>
					<div className="col-md-4 mt-3">
						<div
							className="service-box"
							style={{
								background: ' rgba( 250, 242, 242, 0.15 )',
								boxShadow: ' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
								backdropFilter: ' blur( 3px )',
								WebkitBackdropFilter: 'blur( 3px )',
								borderRadius: '10px',
								border: '1px solid rgba( 255, 255, 255, 0.18 )'
							}}>
							<div className="service-ico">
								<span className="ico-circle">
									<i className="bi bi-briefcase"></i>
								</span>
							</div>
							<div className="service-content">
								<h2 className="s-title" style={{ fontSize: '3vh' }}>
									RESEARCH AND DEVELOPMENT
								</h2>
								<p className="s-description text-center">
									As R&amp;D is an ongoing commitment with HopPer, we are
									developing even more efficient solutions, which will also be
									100% recyclable, based on the world development technology.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 mt-3">
						<div
							className="service-box"
							style={{
								background: ' rgba( 250, 242, 242, 0.15 )',
								boxShadow: ' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
								backdropFilter: ' blur( 3px )',
								WebkitBackdropFilter: 'blur( 3px )',
								borderRadius: '10px',
								border: '1px solid rgba( 255, 255, 255, 0.18 )'
							}}>
							<div className="service-ico">
								<span className="ico-circle">
									<i className="bi bi-card-checklist"></i>
								</span>
							</div>
							<div className="service-content">
								<h2 className="s-title" style={{ fontSize: '3vh' }}>
									CARBON EFFECTS
								</h2>
								<p className="s-description text-center">
									HopPer, aimed to acquire all components from sources that can
									be recycled to us, to reducing the carbon footprint of our
									product.
									<br />
									At the same time, HopPer zero connect shelter is always under
									our development and inspection to make sure all the
									environment standards been implemented to all of our products.
									<br />
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 mt-3">
						<div
							className="service-box"
							style={{
								background: ' rgba( 250, 242, 242, 0.15 )',
								boxShadow: ' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
								backdropFilter: ' blur( 3px )',
								WebkitBackdropFilter: 'blur( 3px )',
								borderRadius: '10px',
								border: '1px solid rgba( 255, 255, 255, 0.18 )'
							}}>
							<div className="service-ico">
								<span className="ico-circle">
									<i className="bi bi-bar-chart"></i>
								</span>
							</div>
							<div className="service-content">
								<h2 className="s-title" style={{ fontSize: '3vh' }}>
									INTEGRATION PROTOCOL
								</h2>
								<p className="s-description text-center">
									Based on the R&amp;D result, Integration team on each field
									will start to find the best technology to integrate the
									existing technology together to suit our final products and
									present to the client.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 mt-3">
						<div
							className="service-box"
							style={{
								background: ' rgba( 250, 242, 242, 0.15 )',
								boxShadow: ' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
								backdropFilter: ' blur( 3px )',
								WebkitBackdropFilter: 'blur( 3px )',
								borderRadius: '10px',
								border: '1px solid rgba( 255, 255, 255, 0.18 )'
							}}>
							<div className="service-ico">
								<span className="ico-circle">
									<i class="bi bi-binoculars"></i>
								</span>
							</div>
							<div className="service-content">
								<h2 className="s-title" style={{ fontSize: '3vh' }}>
									ZERO CONNECT PRODUCTS
								</h2>
								<p className="s-description text-center">
									<br />
									01-Mobile Hospital Cube
									<br />
									<br />
									02-Mobile Studio Cube
									<br />
									<br />
									03-Mobile Police &amp; Military Cube
									<br />
									<br />
									04-Mobile Hotel Cube
									<br />
									<br />
									05-Mobile Medical Cube
									<br />
									<br />
									06-Mobile Office Cube
									<br />
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="service-box">
							<div className="service-ico">
								<span className="ico-circle">
									<i className="bi bi-brightness-high"></i>
								</span>
							</div>
							<div className="service-content">
								<h2 className="s-title"></h2>
								<p className="s-description text-center"></p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="service-box">
							<div className="service-ico">
								<span className="ico-circle">
									<i className="bi bi-calendar4-week"></i>
								</span>
							</div>
							<div className="service-content">
								<h2 className="s-title"></h2>
								<p className="s-description text-center"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Service
