import logo from './logo.svg'
import './App.css'
import { Provider } from 'react-redux'
import styles from './App.module.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Products from './Pages/Products/Products'
import ProductsList from './Pages/ProductsList/ProductsList'
import { useEffect, useRef, useState } from 'react'
import image from './images/Picture2.gif'
import image1 from './images/2.jpg'
import image2 from './images/3.jpg'
import image3 from './images/4.jpg'
import OurProducts from './Components/Service/Service'
import Header from './Components/Header/Header'
import Service from './Components/Service/Service'
import { Form } from 'react-router-dom'
import ContactForm from './Components/Form/ContactForm'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import store from './store/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Footer from './Components/Footer/Footer'

import { BrowserRouter } from 'react-router-dom'
import Routers from './Router/Routers'
import ImageCarousel from './Components/ImageCarousel/ImageCarousel'

function App() {
	const [scrolled, setScrolled] = useState(false)
	const [currentScreen, setCurrentScreen] = useState('Home')

	const [activeHeader, setActiveHeader] = useState(null)

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth' // Optional: Adds smooth scrolling behavior
		})
	}

	const headerRefs = {
		Home: useRef(null),
		About: useRef(null),
		Services: useRef(null),
		Projects: useRef(null),
		Contact: useRef(null)
	}

	// function handleScroll() {
	// 	const scrollTop = window.pageYOffset || document.documentElement.scrollTop
	// 	if (scrollTop > 50) {
	// 		setScrolled(true)
	// 	} else {
	// 		setScrolled(false)
	// 	}

	// 	if (
	// 		scrollTop > homeRef.current.offsetTop &&
	// 		scrollTop < aboutRef.current.offsetTop
	// 	) {
	// 		setCurrentScreen('home')
	// 	} else if (
	// 		scrollTop > aboutRef.current.offsetTop &&
	// 		scrollTop < projectsRef.current.offsetTop
	// 	) {
	// 		setCurrentScreen('about')
	// 	} else if (
	// 		scrollTop > projectsRef.current.offsetTop &&
	// 		scrollTop < servicesRef.current.offsetTop
	// 	) {
	// 		setCurrentScreen('projects')
	// 	} else if (
	// 		scrollTop > servicesRef.current.offsetTop &&
	// 		scrollTop < contactRef.current.offsetTop
	// 	) {
	// 		setCurrentScreen('services')
	// 	} else if (scrollTop > contactRef.current.offsetTop) {
	// 		setCurrentScreen('contact')
	// 	}
	// }
	const handleScroll = () => {
		for (const key in headerRefs) {
			const headerRef = headerRefs[key]
			if (headerRef.current) {
				const { top, bottom } = headerRef.current.getBoundingClientRect()
				if (top >= 0 && bottom <= window.innerHeight) {
					setActiveHeader(key)
					break
				}
			}
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	return (
		<div className="App">
			<Provider store={store}>
				<BrowserRouter>
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
					{/* <ImageCarousel /> */}
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
						<FontAwesomeIcon icon={faArrowUp} />{' '}
						{/* Render the arrow-up icon */}
					</button>

					<Footer />
					<Routers />
				</BrowserRouter>
			</Provider>
		</div>
	)
}

export default App
