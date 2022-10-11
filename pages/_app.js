import Layout from '../components/Layout';
import '../public/styles/css/main.css';
import { useState, useEffect } from 'react';
const MyApp = ({ Component, pageProps }) => {
	const [hunger, setHunger] = useState(50);
	const [happiness, setHappiness] = useState(50);
	const [depression, setDepression] = useState(0);
	const [score, setScore] = useState(0.0);
	const [income, setIncome] = useState({
		title: 'nothing',
		income: Math.min(0.01),
	});
	const [dayCycle, setDayCycle] = useState(0);
	const [dayCount, setDayCount] = useState(1);
	const [death, setDeath] = useState(false);
	const [rates, setRates] = useState({
		hunger: 0.01,
		happiness: 0,
		depression: 0,
	});

	// DAY CYCLE///////////////////////////////////////
	useEffect(() => {
		setInterval(() => {
			setDayCycle((prev) => prev + 1);
		}, 10000);
	}, []);

	useEffect(() => {
		if (dayCycle == 24) setDayCycle(0);
	}, [dayCycle]);
	/////////////////////////////////////////////////////

	// GAME OVER ////////////////////////////////////////
	const restartGame = () => {
		setHunger(50);
		setScore(0);
		setIncome({ title: 'nothing', income: Math.min(0.01) });
		setDayCycle(0);
		setDeath(false);
	};

	useEffect(() => {
		if (!death) return;
		alert('you have died. unlucky.');
		restartGame();
	});
	/////////////////////////////////////////////////////

	// UNIVERSAL CONT4ROLLERS///////////////////
	useEffect(() => {
		// low happiness or low funds raises Depression
		happiness < 10 || score < 1
			? setRates((prev) => {
					return { ...prev, depression: 0.01 };
			  })
			: setRates((prev) => {
					return { ...rates, depression: 0 };
			  });
		// hungry or low funds decreses Happiness
		hunger < 10 || score < 0.5
			? setRates((prev) => {
					return { ...prev, happiness: 0.01 };
			  })
			: setRates((prev) => {
					return { ...prev, happiness: 0 };
			  });
	}, [hunger, score, happiness]);

	/////////////////////////////////////////////

	return (
		<Layout>
			<Component
				hunger={hunger}
				setHunger={setHunger}
				happiness={happiness}
				setHappiness={setHappiness}
				setScore={setScore}
				score={score}
				dayCycle={dayCycle}
				income={income}
				death={death}
				setDeath={setDeath}
				depression={depression}
				setDepression={setDepression}
				rates={rates}
				{...pageProps}
			/>
		</Layout>
	);
};

export default MyApp;
