import React from 'react'
import  Pass from "../images/congrat.gif"

const PassCom = () => {
    return (
			<>
				<div className="container">
					<img
						className="text-center"
						src={Pass}
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

export default PassCom
