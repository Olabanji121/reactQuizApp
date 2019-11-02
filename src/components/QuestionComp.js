import React from "react";
import OPtionComp from "../components/OptionCOmp";

export default function QuestionComp({ content, scoreQuestion }) {

	const showOPtions = () => {
        return content.options.map((option,index)=>{
            return <OPtionComp option={option} key={index} scoreQuestion={scoreQuestion}/>
        })
    };

	return (
		<div className="row mt-10 ">
			<div className="col mx-auto  text-center ">
				<p className="question-body text-center my-5">{content.question}</p>
                {showOPtions()}
				
			</div>
		</div>
	);
}
