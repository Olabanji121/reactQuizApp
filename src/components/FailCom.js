import React from 'react';
import Failed from '../images/fail.gif'

const FailCom = () => {
    return (
			<>
				<div
					className="container"
					// style={{

					// 	paddingTop: "50px"
					// }}
				>
					<img
						className="text-center img-fluid mx-auto d-block"
						src={Failed}
						alt="loading...."
					/>
				</div>
			</>
		);
}

export default FailCom
