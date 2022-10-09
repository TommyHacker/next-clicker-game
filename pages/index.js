import Link from 'next/link';
import Game from '../components/Game';
const HomePage = ({
	shopItems,
	setShopItems,
	score,
	setScore,
	multiplyer,
	setMultiplyer,
}) => {
	return (
		<>
			<h1> Generic Clicker Game</h1>
			<Game
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

export default HomePage;
