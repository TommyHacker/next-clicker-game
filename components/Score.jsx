import { useEffect } from 'react';
const Score = ({ score, dayCycle, setScore, income }) => {
	// EARNING CYCLE ///////////////////////////////////
	useEffect(() => {
		setScore((prev) => prev + income.income);
	}, [dayCycle]);
	////////////////////////////////////////////////////
	return (
		<>
			<div className='score-container'>
				<h2>Balance</h2>
				<h2>£{score.toFixed(2)}p </h2>
			</div>
		</>
	);
};

export default Score;
