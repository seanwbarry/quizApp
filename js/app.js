$(document).ready(function () {
	function Question (number, questionText, answer1, answer2, answer3, answer4) {
		this.number = number;
		this.questionText = questionText;
		this.answer1 = answer1;
		this.answer2 = answer2;
		this.answer3 = answer3;
		this.answer4 = answer4;
	}

	//create questions
	var question1 = new Question (1, 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'answer 1', 'answer 2', 'answer 3', 'answer 4');
	var question2 = new Question (2, 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'answer 1', 'answer 2', 'answer 3', 'answer 4');
	var question3 = new Question (3, 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'answer 1', 'answer 2', 'answer 3', 'answer 4');
	var question4 = new Question (4, 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'answer 1', 'answer 2', 'answer 3', 'answer 4');
	var question5 = new Question (5, 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'answer 1', 'answer 2', 'answer 3', 'answer 4');

	//put questions into array
	var questionArray = [];

	questionArray.push(question1);
	questionArray.push(question2);
	questionArray.push(question3);
	questionArray.push(question4);
	questionArray.push(question5);

	

});