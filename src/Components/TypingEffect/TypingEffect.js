import React, { useState, useEffect } from 'react'

const TypingEffect = () => {
	const [sentence, setSentence] = useState('')
	const [showCursor, setShowCursor] = useState(true)
	const mainSentence = 'Create >> Design >> Construct >> Manage'
	const typingSpeed = 100 // Adjust typing speed as needed
	const delayBetweenLoops = 2000 // Adjust delay between loops as needed

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
			}, 500)

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
			<h2 style={{ color: 'white', fontSize: '40px' }}>
				{sentence}
				{showCursor && '|'}
			</h2>
		</div>
	)
}

export default TypingEffect
