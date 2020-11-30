import React from "react";
import SecondsCounter from "./counter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="row justify-content-center">
			<h2>
				<i className="far fa-clock" />
			</h2>
			<SecondsCounter deLay={100000000} />
			<SecondsCounter deLay={10000000} />
			<SecondsCounter deLay={1000000} />
			<SecondsCounter deLay={100000} />
			<SecondsCounter deLay={10000} />
			<SecondsCounter deLay={1000} />
		</div>
	);
}
