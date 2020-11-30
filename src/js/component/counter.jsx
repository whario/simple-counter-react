import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function SecondsCounter(props) {
	const [seconds, setSeconds] = useState(0);
	useEffect(() => {
		const time = setInterval(() => {
			setSeconds(c => c + 1);
		}, props.deLay);
	}, []);
	if (seconds == 10) {
		clearInterval(seconds);
		setSeconds(0);
	}

	return (
		<div className="bigCounter">
			<h2 className="digits">{seconds}</h2>
		</div>
	);
}

SecondsCounter.propTypes = {
	deLay: PropTypes.number
};

export default SecondsCounter;
