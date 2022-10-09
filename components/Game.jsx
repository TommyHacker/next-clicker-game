import ClickerButton from './clickerButton';
import Score from './Score';
import Purchase from './Purchase';
const Game = ({
	setShopItems,
	shopItems,
	score,
	setScore,
	multiplyer,
	setMultiplyer,
}) => {
	return (
		<>
			<h1>game</h1>
			<Score score={score} />
			<ClickerButton setScore={setScore} />
			<h4>shop</h4>
			<Purchase
				score={score}
				setScore={setScore}
				multiplyer={multiplyer}
				setMultiplyer={setMultiplyer}
				shopItems={shopItems}
				setShopItems={setShopItems}
			/>
		</>
	);
};

export default Game;
