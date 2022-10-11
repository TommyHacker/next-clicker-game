import Score from '../components/Score';
import Clock from '../components/Clock';
import Meter from '../components/Meter';
import Food from '../components/Food';
import Commodidity from '../components/Commodity';
import Image from 'next/image';

const HomePage = ({
	dayCycle,
	score,
	setScore,
	income,
	happiness,
	setHappiness,
	hunger,
	setHunger,
	death,
	setDeath,
	depression,
	setDepression,
	rates,
}) => {
	return (
		<>
			<Image
				className='background-image'
				src={
					dayCycle > 18 || dayCycle < 6
						? '/images/night-sky.jpg'
						: '/images/day-sky.jpg'
				}
				style={{ zIndex: '0', transition: '2s' }}
				width={1920}
				height={1080}
			/>

			<div
				className={
					dayCycle > 18 || dayCycle < 6
						? 'page-container night'
						: 'page-container'
				}>
				<Clock dayCycle={dayCycle} />
				<Score
					score={score}
					setScore={setScore}
					dayCycle={dayCycle}
					income={income}
					setDeath={setDeath}
				/>
				{/* Hunger */}
				<div className='meters-container'>
					<Meter
						dayCycle={dayCycle}
						name={'hunger'}
						getter={hunger}
						setter={setHunger}
						rate={rates.hunger}
						setDeath={setDeath}
					/>
					<Meter
						dayCycle={dayCycle}
						name={'Happiness'}
						getter={happiness}
						setter={setHappiness}
						rate={rates.happiness}
						setDeath={setDeath}
					/>
					<Meter
						dayCycle={dayCycle}
						name={'Mental Health'}
						getter={depression}
						setter={setDepression}
						rate={rates.depression}
						setDeath={setDeath}
						invert={true}
					/>
				</div>
				<div className='foods-container'>
					<Food
						setHunger={setHunger}
						name={'sausage'}
						value={1}
						setScore={setScore}
						cost={0.5}
						score={score}
					/>
					<Food
						setHunger={setHunger}
						name={'tic-tac'}
						value={0.1}
						setScore={setScore}
						cost={0.1}
						score={score}
					/>
				</div>
				<div className='commodities-container'>
					<Commodidity
						score={score}
						setScore={setScore}
						cost={0.01}
						value={1}
						name={'Pokemon Cards'}
						getter={happiness}
						setter={setHappiness}
					/>
				</div>
			</div>
		</>
	);
};

export default HomePage;
