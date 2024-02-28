import React, { useEffect, useState } from 'react';
import styles from './Header.module.css'

function Header({refs}) {

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

    return (
        <section
            className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} onClick={toggleMenu}>
            <div className={styles.logo}>
                <div className={styles.logohead}>
                    <h3>
                        <span className={styles.hightlight}>H</span>op
                        <span className={styles.hightlight}>P</span>er
                    </h3>
                    <p className={styles.subhead} style={{margin:0,padding:0}}>Engineering Technology</p>
                </div>
            </div>
            <div className={styles.headers}>
            <div className={styles.headers}>
                <div className={`${styles.head} ${styles.headertextunderline}` } onClick={() => { refs[0].current.scrollIntoView({ behavior: 'smooth' }) }}>Home</div>
                <div className={`${styles.head} ${styles.headertextunderline}`} onClick={() => { refs[1].current.scrollIntoView({ behavior: 'smooth' }) }}>About</div>
                <div className={`${styles.head} ${styles.headertextunderline}`} onClick={() => { refs[3].current.scrollIntoView({ behavior: 'smooth' }) }}>Services</div>
                <div className={`${styles.head} ${styles.headertextunderline}`} onClick={() => { refs[2].current.scrollIntoView({ behavior: 'smooth' }) }}>Projects</div>
                <div className={`${styles.head} ${styles.headertextunderline}`} onClick={() => { refs[4].current.scrollIntoView({ behavior: 'smooth' }) }}>Contact</div>
            </div>
            </div>

            {showCloseButton ? (
                <button className={styles.closeMenu} onClick={toggleMenu}>
                    <span className={styles.closeLine}></span>
                    <span className={styles.closeLine}></span>
                </button>
            ) : (
                <button className={styles.hamburgerMenu} onClick={toggleMenu}>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>
            )}

            <nav className={`${styles.nav} ${menuOpen ? styles.menuOpen : ''}`}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <a href="#" className={styles.navLink}>Home</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#" className={styles.navLink}>About</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#" className={styles.navLink}>Projects</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#" className={styles.navLink}>Services</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#" className={styles.navLink}>Contact</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default Header;