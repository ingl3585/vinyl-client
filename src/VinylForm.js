import React, { useState } from 'react';

const VinylForm = () => {
	const [vinyl, setVinyl] = useState({ artistName: '', albumName: '' });

	const handleChange = (event) => {
		const value = event.target.value;
		const name = event.target.name;
		// make a copy of current state
		const copy = Object.assign({}, vinyl);
		// update 1 that copies properties
		copy[name] = value;
		// save that copy as the new state
		setVinyl(copy);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(vinyl);
		fetch('http://localhost:4000/vinyls', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(vinyl),
		})
			.then((response) => response.json())
			.then((data) => setVinyl({ artistName: '', albumName: '' }));
	};

	return (
		<div>
			<h1>VinylForm</h1>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					type='text'
					name='artistName'
					value={vinyl.artistName}
				/>
				<input
					onChange={handleChange}
					type='text'
					name='albumName'
					value={vinyl.albumName}
				/>
				<button type='submit'>Save</button>
			</form>
		</div>
	);
};

export default VinylForm;
