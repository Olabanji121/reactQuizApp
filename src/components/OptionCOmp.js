import React from "react";

export default function OptionCOmp({ option, scoreQuestion }) {
	return (
		<div>
			<li onClick={() => scoreQuestion(option)} className="list-group-item">
				{option}
			</li>
		</div>
	);
}
