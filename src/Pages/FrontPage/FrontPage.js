import React from 'react'
import Home from '../Home/Home'
import Products from '../Products/Products'
import Service from '../../Components/Service/Service'
import About from '../About/About'
import ContactForm from '../../Components/Form/ContactForm'
import Contact from '../../Components/Contact/Contact'
import Projects from '../../Components/Projects/Projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

const FrontPage = ({ headerRefs, styles, handleClick }) => {
	console.log(headerRefs)
	return (
		<div>
			<Header
				refs={[
					headerRefs.Home,
					headerRefs.About,
					headerRefs.Projects,
					headerRefs.Services,
					headerRefs.Contact
				]}
			/>
			<Home homeRef={headerRefs.Home} />
			{/* <Products /> */}
			<Products />
			{/* about us */}
			<About aboutRef={headerRefs.About} />
			{/* our products */}
			<Service servicesRef={headerRefs.Services} />
			{/* projects */}
			<Projects projectRef={headerRefs.Projects} />
			{/* contacts */}
			<Contact contactRef={headerRefs.Contact} />
			<ContactForm />
			<button className={styles.scrollToTopBtn} onClick={handleClick}>
				<FontAwesomeIcon icon={faArrowUp} /> {/* Render the arrow-up icon */}
			</button>
			<Footer />
		</div>
	)
}

export default FrontPage
