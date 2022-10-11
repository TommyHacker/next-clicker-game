const Commodidity = ({
	name,
	getter,
	setter,
	cost,
	value,
	score,
	setScore,
}) => {
	const handlePurchase = () => {
		if (score < cost) return;
		setScore((prev) => prev - cost);
		setter((prev) => prev + value);
	};
	return (
		<div className='commodity-container'>
			<h1>Item: {name}</h1>
			<h2>price: £{cost}</h2>
			<h2>Happiness + {value}</h2>
			<button onClick={handlePurchase}>Buy Now</button>
		</div>
	);
};

export default Commodidity;
