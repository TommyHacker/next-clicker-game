import { useEffect } from 'react';

const Meter = ({ name, getter, setter, dayCycle, rate, setDeath, invert }) => {
	useEffect(() => {
		if (!invert) {
			if (getter > 0) return;
			setDeath(true);
		} else if (invert) {
			if (getter < 100) return;
			setDeath(true);
		}
	}, [getter]);

	useEffect(() => {
		!invert ? setter((prev) => prev - rate) : setter((prev) => prev + rate);
	}, [dayCycle]);
	return (
		<div className='meter-container'>
			<div className='meter-stat'>
				<p>{name} :</p>
				<p>{Math.floor(getter)}%</p>
			</div>
			{/* Dynamic Meter Bar */}
			<div className='meter-bar-container'>
				<div className='meter-bar' style={{ width: `${getter}%` }}></div>
			</div>
		</div>
	);
};

export default Meter;
