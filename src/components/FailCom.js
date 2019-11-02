import React from 'react';
import Failed from '../images/fail.gif'

const FailCom = () => {
    return (
			<>
				<div className="container">
					<img
						className="text-center"
						src={Failed}
						alt="loading...."
						style={{
							width: "500px",

							paddingTop: "50px"
						}}
					/>
				</div>
			</>
		);
}

export default FailCom
