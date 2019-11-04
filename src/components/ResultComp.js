import React from "react";

export default function ResultComp({ score, resultUpdate, playAgain }) {


	return (
		<div className="container">
			<div className="row">
				<div className="col text-center">
					{resultUpdate()}
					<button
						onClick={() => playAgain()}
						className="btn btn-warning mt-5"
					>
						{" "}
						PLAY AGAIN
					</button>
				</div>
			</div>
		</div>
	);
}
