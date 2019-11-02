import React from "react";

export default function ResultComp({ score, resultUpdate, playAgain }) {


	return (
		<div>
			<h5>Your score is {score}</h5>
			{resultUpdate()}
			<button onClick={() => playAgain()} className="btn btn-warning">
				{" "}
				PLAY AGAIN
			</button>
		</div>
	);
}
