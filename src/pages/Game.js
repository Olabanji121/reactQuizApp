import React, { Component } from "react";
import QuestionGenerator from "../components/QuestionGenerator";
import Question from "../components/QuestionComp";
import Result from "../components/ResultComp";
import Pass from "../components/PassCom";
import Failed from '../components/FailCom';
import './game.css';

export default class Game extends Component {
	constructor() {
		super();
		this.state = {
			score: 0,
			questionList: QuestionGenerator(),
			questionIndex: 1
			
		};
		this.showContent = this.showContent.bind(this);
		this.scoreQuestion = this.scoreQuestion.bind(this);
		this.resultUpdate = this.resultUpdate.bind(this);
		this.playAgain = this.playAgain.bind(this);
	
	}

	showContent() {
		// console.log(this.state.questionList);
		if (this.state.questionIndex < this.state.questionList.length) {
			return (
				<Question
					content={this.state.questionList[this.state.questionIndex]}
					scoreQuestion={this.scoreQuestion}
					qustionNUm={this.state.questionIndex}
					totalQ={this.state.questionList.length-1}
				/>
			);
		}

		return (
			<Result
				score={this.state.score}
				resultUpdate={this.resultUpdate}
				playAgain={this.playAgain}
			/>
		);
	}

	resultUpdate() {
		if (this.state.score >= 3) {
			return (
				<div className="container">
					<div className="row">
						<div className="col">
							<h1 className="text-slanted text-center text-success mt-5 ">
								YOU PASSED FINAL SCORE:{" "}
								<span className="text-orange">{this.state.score}</span>
							</h1>
							<Pass />
						</div>
					</div>
				</div>
			);
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="text-slanted text-center text-danger mt-5 ">
							YOU FAILED FINAL SCORE:{" "}
							<span className="text-warning">{this.state.score}</span>
						</h1>
						<Failed />
					</div>
				</div>
			</div>
		);
	}

	playAgain() {
		// console.log(this.state);

		this.setState({
			score: 0,
			questionList: QuestionGenerator(),
			questionIndex: 1
		});
	}

	counter(){
		if (this.state.next < 6){
			this.setState({
				next: this.state.next +1
			});
		}
	}

	componentDidMount(){
		this.counter()
	}

	scoreQuestion(value) {
		// console.log(`score is ${value}`);
		// console.log(this.state);

		// increase the question index state
		let curQuestion = this.state.questionList[this.state.questionIndex];

		this.setState(state => {
			return { ...state.questionIndex++ };
		});

		// check the answer

		if (value === curQuestion.answer) {
			this.setState(state => {
				return { ...state.score++ };
			});
		}
	}

	render() {
		return (
			<div className="gamebody ">
				<div className="container">
					<div className="row">
						<div className="col-10 mx-auto col-md-6 my-3">
							{/* <Question content={this.state.questionList[]}  scoreQuestion= {this.scoreQuestion}/> */}
							{this.showContent()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
