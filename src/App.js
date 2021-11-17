import './App.css';
import React, { useState } from 'react';
import VinylForm from './VinylForm';

const App = () => {
	const [vinylList, setVinylList] = useState();
	// add a button to our App.js that when clicked
	// make fetch request to GET /vinyls
	// save vinyls to state
	// display vinyls from state

	const handleClick = (event) => {
		event.preventDefault();
		fetch('http://localhost:4000/vinyls', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(vinylList),
		})
			.then((response) => response.json())
			.then((data) => {
				setVinylList(data.vinyls);
			});
	};

	const vinylDetails =
		vinylList &&
		vinylList.map((vinyl) => {
			return (
				<div key={vinyl._id}>
					<br />
					<div>Artist Name: {vinyl.artistName}</div>
					<div>Album Name: {vinyl.albumName}</div>
					<br />
				</div>
			);
		});

	return (
		<div>
			<div>
				<VinylForm />
				<br />
				<button onClick={handleClick}>View Vinyls</button>
			</div>
			<div>{vinylDetails}</div>
		</div>
	);
};

export default App;
