import './App.css'
import { Provider } from 'react-redux'
import styles from './App.module.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import { useEffect, useRef, useState } from 'react'
import OurProducts from './Pages/OurProducts/OurProducts'
import Header from './Components/Header/Header'
import Service from './Components/Service/Service'
import ContactForm from './Components/Form/ContactForm'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import store from './store/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Footer from './Components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import Routers from './Router/Routers'
import Model from './Components/Model/Model'
import CarouselModel from './Components/CarouselModel/CarouselModel.jsx'

// images
import image2 from './images/ser-p-img2.png' // 1
import image from './images/ser-p-img1.png' // 2
import image1 from './images/Picture4.jpg' // 3
import image3 from './images/Picture6.png' // 4,5
import image4 from './images/Picture7.jpg' // 6
import image5 from './images/Picture1.gif' //

// products images
import image17 from './images/Picture17.jpg'
import image18 from './images/Picture1.jpg'
import image19 from './images/Picture2.jpg'
import image20 from './images/Picture3.jpg'

// carousel images
import image9 from './images/Picture9.jpg'
import image10 from './images/Picture10.jpg'
import image11 from './images/Picture11.jpg'
import image12 from './images/Picture12.jpg'
import image13 from './images/Picture13.jpg'
import image14 from './images/Picture14.jpg'
import image15 from './images/Picture15.png'
import image16 from './images/Picture16.jpg'

import ImageCarousel from './Components/ImageCarousel/ImageCarousel.js'
function App() {
	const [activeHeader, setActiveHeader] = useState(null)

	const projectImages = [
		{ image: image2, head: 'ZERO CONNECT ENERGY' },
		{ image: image, head: 'WATER GENERATOR' },
		{ image: image1, head: 'THE WORLD’S FIRST CONTAINER FARM' },
		{ image: image5, head: 'THE GREENERY™ S IS BUILT ON THREE KEY PRINCIPLES' },
		{ image: image3, head: 'AUTOMATION' },
		{ image: image4, head: 'PERFORMANCE' },
		{ image: image17, head: 'Earthquake-resistant Shelters' },
		{ image: image18, head: 'Mobile Nuclear Shelter' },
		{ image: image19, head: 'Bomb (blast) Shelter' },
		{ image: image20, head: 'Flood shelters' }
	]

	const carouselImages = [
		[image9, image10],
		[image11, image12],
		[image13, image14],
		[image15, image16]
	]
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
		Contact: useRef(null),
		Products: useRef(null)
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

	// toggle model images
	const [toggleModel, setToggleModel] = useState(false)
	const [clickedImage, setClickedImage] = useState()
	const [toggleCarouselModel, setToggleCarouselModel] = useState(false)

	const toggleHandler = () => {
		setToggleModel(current => !current)
	}

	const carouselToggleHandler = () => {
		setToggleCarouselModel(current => !current)
	}
	const imageClickHandle = img => {
		setToggleModel(current => !current)
		setClickedImage(projectImages[img])
	}

	// carousel model

	const carouselImagesClickHandle = img => {
		setToggleCarouselModel(current => !current)
		setClickedImage(carouselImages[img])
	}
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
							headerRefs.Contact,
							headerRefs.Products
						]}
					/>

					<Home homeRef={headerRefs.Home} />
					{/* <ImageCarousel /> */}
					{/* about us */}
					<About aboutRef={headerRefs.About} />

					{/* our products */}
					<Service servicesRef={headerRefs.Services} />
					{/* <Products /> */}
					<OurProducts
						productRef={headerRefs.Products}
						projectImages={projectImages}
						imageClickHandle={imageClickHandle}
						carouselImagesClickHandle={carouselImagesClickHandle}
					/>
					{/* projects */}
					{/* <Projects
						projectRef={headerRefs.Projects}
						projectImages={projectImages}
						imageClickHandle={imageClickHandle}
					/> */}

					{/* contacts */}
					<Contact contactRef={headerRefs.Contact} />

					<button className={styles.scrollToTopBtn} onClick={handleClick}>
						<FontAwesomeIcon icon={faArrowUp} />{' '}
						{/* Render the arrow-up icon */}
					</button>

					<Footer />
					<Routers />
				</BrowserRouter>

				{toggleModel && (
					<Model
						clickedImage={clickedImage}
						showModal={toggleModel}
						closeHandler={toggleHandler}
					/>
				)}

				{toggleCarouselModel && (
					<CarouselModel
						clickedImage={clickedImage}
						showModal={toggleCarouselModel}
						closeHandler={carouselToggleHandler}
						carouselImages={carouselImages}
					/>
				)}
			</Provider>
		</div>
	)
}

export default App
