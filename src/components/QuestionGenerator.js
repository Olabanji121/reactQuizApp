function QuestionGenerator(count = 6) {

    let questions=[];
	const questionsLIst = [
		{
			id: 0,
			question: "Inside which HTML element do we put the JavaScript??",
			options: ["<script>", "<javascript>", "<js>", "<scripting>"],
			answer: "<script>"
		},
		{
			id: 1,
			question:
				"What is the correct syntax for referring to an external script called 'xxx.js'?",
			options: [
				"<script href='xxx.js'>",
				"<script name='xxx.js'>",
				"<script src='xxx.js'>",
				"<script file='xxx.js'>"
			],
			answer: "<script src='xxx.js'>"
		},
		{
			id: 2,
			question: " How do you write 'Hello World' in an alert box?",
			options: [
				"msgBox('Hello World');",
				"alertBox('Hello World');",
				"msg('Hello World');",
				"alert('Hello World');"
			],
			answer: "alert('Hello World');"
		},
		{
			id: 3,
			question: "What is the capital city?",
			options: ["Lagos", "Abuja", "Ibadan", "Jos"],
			answer: "Abuja"
		},
		{
			id: 4,
			question: "How old is the president?",
			options: ["26", "35", "76", "56"],
			answer: "76"
		},
		{
			id: 5,
			question: "Who invented the telephone? ",
			options: ["26", "35", "bell", "56"],
			answer: "bell"
		},
		{
			id: 6,
			question: "Which nail grows fastest? ",
			options: ["middle", "35", "76", "56"],
			answer: "middle"
		},
		{
			id: 7,
			question: "What temperature does water boil at",
			options: ["26", "100c", "76", "56"],
			answer: "100c"
		},
		{
			id: 8,
			question: "Who discovered penicillin? ",
			options: ["26", "Fleming", "76", "56"],
			answer: "Fleming"
		},
		{
			id: 9,
			question: "What Spanish artist said he would eat his wife when she died?",
			options: ["26", "Dali", "76", "56"],
			answer: "Dali"
		},
		{
			id: 10,
			question: "Who did Prince Rainier of Monaco marry?",
			options: ["26", "Grace Kelly", "76", "56"],
			answer: "Grace Kelly"
		},
		{
			id: 11,
			question: "What year did the Spanish Civil War end?",
			options: ["26", "Dali", "76", "1939"],
			answer: "1939"
		},
		{
			id: 12,
			question: "Where is the smallest bone in the body",
			options: ["26", "Dali", "ear", "56"],
			answer: "ear"
		},
		{
			id: 13,
			question: "What does the roman numeral C represent?",
			options: ["26", "Dali", "100", "56"],
			answer: "100"
		},
		{
			id: 14,
			question: "What nationality was Chopin?",
			options: ["26", "Dali", "Polish", "56"],
			answer: "Polish"
		},
		{
			id: 15,
			question: "When did the Second World War end?",
			options: ["26", "Dali", "1945", "56"],
			answer: "1945"
		},
		{
			id: 16,
			question: " What are the first three words of the bible?",
			options: ["26", "In the beginning", "76", "56"],
			answer: "In the beginning"
		},
		{
			id: 17,
			question: "What’s the name of the famous big clock in London? ",
			options: ["26", "Dali", "Big Ben", "56"],
			answer: "Big Ben"
		},
		{
			id: 18,
			question: "What did the 7 dwarves do for a job?",
			options: ["26", "Dali", "miners", "56"],
			answer: "miners"
		},
		{
			id: 19,
			question: "Who painted the Sistine Chapel?",
			options: ["Michelangelo", "Dali", "76", "56"],
			answer: "Michelangelo"
		}
    ];
    
    while (questions.length < count) {
	let que = questionsLIst[Math.floor(Math.random() * questionsLIst.length)];
	questions.push(que);
    }
    return questions;
}

export default QuestionGenerator;
