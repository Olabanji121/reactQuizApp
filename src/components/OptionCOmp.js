import React from "react";

export default function OptionCOmp({ option, scoreQuestion }) {
	return (
		<div>
			<li onClick={() => scoreQuestion(option)} className="list-group-item mb-3" style={{cursor:"pointer"}}>
				{option}
			</li>
		</div>
	);
}
