$(document).ready(function () {
	function Question (number, questionText, answers) {
		this.number = number;
		this.questionText = questionText;
		this.answers = answers;
	}

	//create questions
	var question1 = new Question (1, 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', ['answer 1', 'answer 2', 'answer 3', 'answer 4']);
	var question2 = new Question (2, 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', ['2answer 1', '2answer 2', '2answer 3', '2answer 4']);
	var question3 = new Question (3, 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', ['3answer 1', '3answer 2', '3answer 3', '3answer 4']);
	var question4 = new Question (4, 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', ['4answer 1', '4answer 2', '4answer 3', '4answer 4']);
	var question5 = new Question (5, 'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', ['5answer 1', '5answer 2', '5answer 3', '5answer 4']);

	//put questions into array
	var questionArray = [];

	questionArray.push(question1);
	questionArray.push(question2);
	questionArray.push(question3);
	questionArray.push(question4);
	questionArray.push(question5);

	var questionNumber = 0;
	populateFields(questionArray[questionNumber]);
	$('#questionProgressStatus li:nth-child(1)').addClass("questionProgressBoxCurrent");
	//have to define currentQuestion somehow...
	function populateFields (currentQuestion) {
		if (questionNumber>0) {
			$('.questionAnswersItems').remove();
			console.log('removing');
		}
		for (var i=0;i<currentQuestion.answers.length;i++) {
			$('ul.questionAnswersUl').append('<li class="questionAnswersItems">'+currentQuestion.answers[i]+'</li>');
			console.log(i);
		}
	}

	function questionProgressUpdate(questionNumber) {
		$('#questionProgressStatus li:nth-child('+(questionNumber)+')').removeClass("questionProgressBoxCurrent");
		$('#questionProgressStatus li:nth-child('+(questionNumber+1)+')').addClass("questionProgressBoxCurrent");
	}
	
	$('.questionAnswersUl').click(function () {
		questionNumber++;
		if (questionNumber<5) {
			questionProgressUpdate(questionNumber);
			populateFields(questionArray[questionNumber]);		
		} else {
			//have to write endGame and score
			endGame[score];
		}
		console.log('click an answer!');
	});

});

//#questionProgressStatus
 //:nth-child('+questionNumber+')'