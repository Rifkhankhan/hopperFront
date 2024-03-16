/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

function Header({ refs }) {
	const [scrolled, setScrolled] = useState(false)

	function handleScroll() {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop
		if (scrollTop > 50) {
			setScrolled(true)
		} else {
			setScrolled(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const [menuOpen, setMenuOpen] = useState(false)
	const [showCloseButton, setShowCloseButton] = useState(false)

	function toggleMenu() {
		setMenuOpen(!menuOpen)
		setShowCloseButton(!showCloseButton)
	}

	const headerClicked = e => {
		const btns = document.getElementsByClassName('head')
	}

	return (
		<section
			className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
			// onClick={toggleMenu}
		>
			<div className={styles.logo}>
				<div className={styles.logohead}>
					<h3>
						<span className={styles.hightlight}>H</span>op
						<span className={styles.hightlight}>P</span>er
					</h3>
					<p className={styles.subhead} style={{ margin: 0, padding: 0 }}>
						Engineering Technology
					</p>
				</div>
			</div>
			<div className={styles.headers}>
				<div className={styles.headers}>
					<div
						id="home"
						className={`${styles.head}  `}
						onClick={e => {
							refs[0].current.scrollIntoView({ behavior: 'smooth' })
						}}>
						Home
					</div>
					<div
						id="about"
						className={`${styles.head}  `}
						onClick={e => {
							refs[1].current.scrollIntoView({ behavior: 'smooth' })
						}}>
						About
					</div>
					<div
						id="services"
						className={`${styles.head} `}
						onClick={() => {
							refs[3].current.scrollIntoView({ behavior: 'smooth' })
						}}>
						Services
					</div>
					<div
						id="products"
						className={`${styles.head} `}
						onClick={() => {
							refs[5].current.scrollIntoView({ behavior: 'smooth' })
						}}>
						Products
					</div>
					{/* <div
            id='projects'
            className={`${styles.head} `}
            onClick={() => {
              refs[2].current.scrollIntoView({ behavior: 'smooth' });
            }}
					>
						Projects
					</div> */}
					<div
						id="contact"
						className={`${styles.head} `}
						onClick={() => {
							refs[4].current.scrollIntoView({ behavior: 'smooth' })
						}}>
						Contact
					</div>
				</div>
			</div>

			{showCloseButton ? (
				<button className={styles.closeMenu} onClick={toggleMenu}>
					<FontAwesomeIcon icon={faClose} color="white" fontSize="5vh" />
				</button>
			) : (
				<button className={styles.hamburgerMenu} onClick={toggleMenu}>
					<span className={styles.hamburgerLine} />
					<span className={styles.hamburgerLine} />
					<span className={styles.hamburgerLine} />
				</button>
			)}

			<nav className={`${styles.nav} ${menuOpen ? styles.menuOpen : ''}`}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<a
							href="#home"
							className={styles.navLink}
							onClick={() => {
								refs[0].current.scrollIntoView({ behavior: 'smooth' })
								toggleMenu(!menuOpen)
							}}>
							Home
						</a>
					</li>
					<li className={styles.navItem}>
						<a
							href="#about"
							className={styles.navLink}
							onClick={() => {
								refs[1].current.scrollIntoView({ behavior: 'smooth' })
								toggleMenu(!menuOpen)
							}}>
							About
						</a>
					</li>
					<li className={styles.navItem}>
						<a
							href="#services"
							className={styles.navLink}
							onClick={() => {
								refs[3].current.scrollIntoView({ behavior: 'smooth' })
								toggleMenu(!menuOpen)
							}}>
							Services
						</a>
					</li>
					<li className={styles.navItem}>
						<a
							href="#products"
							className={styles.navLink}
							onClick={() => {
								refs[5].current.scrollIntoView({ behavior: 'smooth' })
								toggleMenu(!menuOpen)
							}}>
							Products
						</a>
					</li>
					{/* <li className={styles.navItem}>
            <a
              href='#projects'
              className={styles.navLink}
              onClick={() => {
                refs[2].current.scrollIntoView({ behavior: 'smooth' });
                toggleMenu(!menuOpen);
              }}
						>
							Projects
						</a>
          </li> */}
					<li className={styles.navItem}>
						<a
							href="#contact"
							className={styles.navLink}
							onClick={() => {
								refs[4].current.scrollIntoView({ behavior: 'smooth' })
								toggleMenu(!menuOpen)
							}}>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</section>
	)
}

export default Header
