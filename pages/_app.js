import Layout from '../components/Layout';
import '../public/styles/css/main.css';
import { useState, useEffect } from 'react';
const MyApp = ({ Component, pageProps }) => {
	const [score, setScore] = useState(0);
	const [multiplyer, setMultiplyer] = useState(1);
	const [shopItems, setShopItems] = useState([
		{
			name: 'paper round',
			price: 10,
			multiplyer: 1,
			used: false,
		},
		{
			name: 'burger-joint',
			price: 100,
			multiplyer: 4,
			used: false,
		},
	]);

	useEffect(() => {
		setInterval(() => {
			setScore((prev) => prev + multiplyer);
		}, 1000);
	}, [multiplyer]);

	return (
		<Layout>
			<Component
				multiplyer={multiplyer}
				setMultiplyer={setMultiplyer}
				score={score}
				setScore={setScore}
				shopItems={shopItems}
				setShopItems={setShopItems}
				{...pageProps}
			/>
		</Layout>
	);
};

export default MyApp;
