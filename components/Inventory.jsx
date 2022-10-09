import { useState } from 'react';
const Inventory = ({ shopItems }) => {
	const [currentItems, setCurrentItems] = useState(['']);
	return (
		<div className='inventory-container'>
			<h2>inventory</h2>
			<ul>
				{shopItems.map((item, index) => {
					return <li key={index}>{item.name}</li>;
				})}
			</ul>
		</div>
	);
};

export default Inventory;
