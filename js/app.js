$(document).ready(function () {
	function Question (number, questionText, answers, correct) {
		this.number = number;
		this.questionText = questionText;
		this.answers = answers;
		this.correct = correct;
	}

	//create questions
	var question1 = new Question (1, '111111lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', ['correct1', 'answer 2', 'answer 3', 'answer 4'],0);
	var question2 = new Question (2, '222222lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', ['2answer 1', 'correct2', '2answer 3', '2answer 4'],1);
	var question3 = new Question (3, '333333lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', ['3answer 1', '3answer 2', 'correct3', '3answer 4'],2);
	var question4 = new Question (4, '444444lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', ['4answer 1', '4answer 2', '4answer 3', 'correct4'],3);
	var question5 = new Question (5, '555555lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', ['5answer 1', '5answer 2', 'correct5', '5answer 4'],2);

	//put questions into array
	var questionArray = [];

	questionArray.push(question1);
	questionArray.push(question2);
	questionArray.push(question3);
	questionArray.push(question4);
	questionArray.push(question5);

	//have to define currentQuestion somehow...
	function populateFields (currentQuestion) {
		if (questionNumber>0) {
			$('.questionAnswersItems').remove();
			console.log('removing');
		}
		$('#questionNumber').text(currentQuestion.number);
		$('.questionText').text(currentQuestion.questionText);
		for (var i=0;i<currentQuestion.answers.length;i++) {
			$('ul.questionAnswersUl').append('<li class="questionAnswersItems">'+currentQuestion.answers[i]+'</li>');
		}
	}

	function currentQuestion(questionNumber) {
		$('#questionProgressStatus li:nth-child('+(questionNumber)+')').removeClass("questionProgressBoxCurrent");
		$('#questionProgressStatus li:nth-child('+(questionNumber+1)+')').addClass("questionProgressBoxCurrent");
	}

	function endGameDisplay () {
		$('#questionTime').css('display','none');
		$('#endArea').css('display','');
		$('#questionProgressStatus li:nth-child('+(questionNumber)+')').removeClass("questionProgressBoxCurrent");
	}

	function endGameScore () {
		$('#score').text(numberOfCorrectQuestions);
		//console.log(numberOfCorrectQuestions);
	}

	function clicked () {
		var whatWasClicked = $('li.questionAnswersItemsClick').index();
		//console.log(whatWasClicked);
		return (whatWasClicked);
	}

	function rightOrWrong (lastUserAnswer) {
		console.log(questionNumber-1);
		console.log(lastUserAnswer);
		console.log(questionArray[questionNumber-1].correct);
		if (questionArray[questionNumber-1].correct==lastUserAnswer) {
			console.log('correct!');
			numberOfCorrectQuestions++;
			$('#questionProgressStatus li:nth-child('+(questionNumber)+')').addClass("tick");
		} else {
			console.log('wrong!');
			$('#questionProgressStatus li:nth-child('+(questionNumber)+')').addClass("cross");
		}
	}

	function whatAnswerDidYouClickOn (lastUserAnswer) {
		$('.questionAnswersUl li').removeClass("questionAnswersItemsClick");
		$('.questionAnswersUl li:nth-child('+(lastUserAnswer+1)+')').addClass("questionAnswersItemsClick");
		//console.log(lastUserAnswer);
		return lastUserAnswer;

	}
	//initialisation on page load
	var questionNumber = 0;
	var numberOfCorrectQuestions = 0;

	populateFields(questionArray[questionNumber]);
	//$('#questionProgressStatus li:nth-child(1)').addClass("questionProgressBoxCurrent");
	$('#questionTime').css('display','');
	$('#endArea').css('display','none');
	//rightOrWrong();
	currentQuestion(questionNumber);
//----------------------------------------

	$('.playAgain').click(function() {
		location.reload();
	});

//----------------------------------------
	//put lastUserAnswer inside the function somehow...?
	
		$('.questionAnswersUl').on('click', 'li', function asdf () {
			var lastUserAnswer = $(this).index();
			whatAnswerDidYouClickOn(lastUserAnswer);
			return lastUserAnswer;
		});	
		
	//change question text when you click on the button
	$('.questionSubmit').on('click', function () {
		questionNumber++;
		if (questionNumber<5) {
			rightOrWrong(clicked());
			currentQuestion(questionNumber);
			populateFields(questionArray[questionNumber]);		
		} else {
			rightOrWrong(clicked());
			endGameDisplay();
			endGameScore();
		}

		//liClicked();
		//why doesn't this run the first time I click??
		//is it because the ul doesn't have anything in it???
		
		/*$('ul').on('click', 'li', function () {
			console.log($(this).index());
		})*/
		
	});

});
//#questionProgressStatus
 //:nth-child('+questionNumber+')'

/*
Questions/things to do:

why does ul.on(click) work in that spot - is it because the ul has not been populated?

have to make ONLY the button clickable
have to make the button selectable and then only evaluate when you click 'submit answer'

make some graph thing? maybe...

mockups: https://seanwbarry.mybalsamiq.com/projects/thinkfulquizapp/Quiz%20mockup%201

//why didn't my click thing work when I used:
$('.questionAnswersItems').click(function () {
		questionNumber++;
		if (questionNumber<5) {..............

*/