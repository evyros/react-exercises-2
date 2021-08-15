import React, { useState } from 'react';
import './Marker.css';

function Marker() {

	const [items, setItems] = useState([
		"First item",
		"Second special item",
		"Third item",
		"Fourth special item",
	]);

	return (
		<div className="Marker">
			<p>
				Display a list of all items in the state.<br />
				If the value in the input can be found within the items - <span className="marker">marker</span> it.<br />
				Example: if the input value is "elf" then item "shelf" should look like: sh<span className="marker">elf</span>.
				Apply the marker for <u>all items</u>.
			</p>

			<input type="text" placeholder="Text to marker..." />
			<ul>
				{ /* The list should be here */ }
			</ul>
		</div>
	)
}

export default Marker;
