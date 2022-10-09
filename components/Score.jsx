const Score = ({ score }) => {
	return <div className='score-container'>£{score.toFixed(2)}p</div>;
};

export default Score;
