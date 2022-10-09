const ClickerButton = ({ setScore }) => {
	const incrementMoney = (e) => {
		setScore((prev) => prev + 1);
	};
	return <button onClick={(e) => incrementMoney(e)}>+ 1</button>;
};
export default ClickerButton;
