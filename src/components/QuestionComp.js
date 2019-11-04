import React from "react";
import OPtionComp from "../components/OptionCOmp";

export default function QuestionComp({ content, scoreQuestion, qustionNUm, totalQ }) {

	const showOPtions = () => {
        return content.options.map((option,index)=>{
            return <OPtionComp option={option} key={index} scoreQuestion={scoreQuestion} qustionNUm={qustionNUm} />
        })
    };


	return (
		<div className="container">
			<div className="row mt-10 ">
				<div className="col mx-auto  text-center ">
					<span className="badge badge-warning p-3 text-slanted">
						{qustionNUm} / {totalQ}
					</span>
					<p className="question-body text-center my-5">{content.question}</p>
					{showOPtions()}
				</div>
			</div>
		</div>
	);
}
