import { useEffect, useState } from 'react'

export function Countdown() {
	const [timeLeft, setTimeLeft] = useState(getTimeRemaining())

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(getTimeRemaining())
		}, 1000)

		return () => clearTimeout(timer)
	})

	function getTimeRemaining(endtime) {
		const total = Date.parse(endtime) - Date.parse(new Date())
		const seconds = Math.floor( (total/1000) % 60 )
		const minutes = Math.floor( (total/1000/60) % 60 )
		const hours = Math.floor( (total/(1000*60*60)) % 24 )
		const days = Math.floor( total/(1000*60*60*24) )

		return {
			total,
			days,
			hours,
			minutes,
			seconds
		}
	}

	function initializeClock(endtime) {
		const timeinterval = setInterval(() => {
			const t = getTimeRemaining(endtime);
			const clock =   'days: ' + t.days + '<br>' +
							'hours: '+ t.hours + '<br>' +
							'minutes: ' + t.minutes + '<br>' +
							'seconds: ' + t.seconds;
			if (t.total <= 0) {
			  clearInterval(timeinterval);
			}
		},1000);
	}
}

export default Countdown;