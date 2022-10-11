const Clock = ({ dayCycle }) => {
	return (
		<div
			style={{
				padding: '20px',
				fontSize: '20pt',
				margin: '0 auto',
				textAlign: 'center',
			}}
			className='clock-container'>
			<div>
				{dayCycle}:00{dayCycle < 12 ? 'am' : 'pm'}
			</div>
		</div>
	);
};

export default Clock;
