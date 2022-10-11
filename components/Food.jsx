const Food = ({ setHunger, name, value, cost, setScore, score }) => {
	const handleEatFood = () => {
		if (score < cost) return;
		setHunger((prev) => prev + value);
		setScore((prev) => prev - cost);
	};

	return (
		<div className='food-container'>
			<h1>
				{name}: {cost}
			</h1>
			<button onClick={handleEatFood}>Eat {name}</button>
		</div>
	);
};
export default Food;
