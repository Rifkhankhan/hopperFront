import React, { useState, useEffect } from 'react'
import styles from './TypingEffect.module.css'

const TypingEffect = () => {
	const [sentence, setSentence] = useState('')
	const [showCursor, setShowCursor] = useState(true)
	const mainSentence = 'Create >> Design >> Construct >> Manage'
	const typingSpeed = 100 // Adjust typing speed as needed
	const delayBetweenLoops = 1000 // Adjust delay between loops as needed

	useEffect(() => {
		const loop = () => {
			let currentIndex = 0
			const interval = setInterval(() => {
				if (currentIndex <= mainSentence.length) {
					setSentence(mainSentence.substring(0, currentIndex))
					currentIndex++
				} else {
					clearInterval(interval)
					setTimeout(() => {
						setSentence('')
						loop() // Restart the loop
					}, delayBetweenLoops)
				}
			}, typingSpeed)

			// Toggle cursor every 500ms
			const cursorInterval = setInterval(() => {
				setShowCursor(prevState => !prevState)
			}, 2500)

			// Cleanup function to clear intervals
			return () => {
				clearInterval(interval)
				clearInterval(cursorInterval)
			}
		}

		loop()

		// Cleanup function to clear any remaining timeouts
		return () => clearTimeout()
	}, [])

	return (
		<div>
			<h2 className={styles.message}>
				{sentence}
				{showCursor && '|'}
			</h2>
		</div>
	)
}

export default TypingEffect
