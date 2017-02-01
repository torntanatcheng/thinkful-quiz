//Manage State
var quiz = {	//creating an object with the property questions which holds an array of objects for with properties being the questions
	questions: [ 
		{
			question: "What word is missing from this title: Little Miss ____ ",
			choices: ["Peanut", "Daisy", "Sunshine", "Blossom"],
			correctChoice: 2
		},
		{
			question: "What word is missing from this title: Prince of _____: The Sands of Time ",
			choices: ["Egypt", "Persia", "Baghdad", "Valhalla"],
			correctChoice: 1
		},
		{
			question: "What word is missing from this title: The ____ I Live In ",
			choices: ["House", "Town", "Country", "Skin"],
			correctChoice: 3
		},
		{
			question: "What word is missing from this title: Prince of _____: The Sands of Time ",
			choices: ["Egypt", "Persia", "Baghdad", "Valhalla"],
			correctChoice: 1
		},
		{
			question: "What word is missing from this title: ____ Gun ",
			choices: ["Shot", "Fire", "Top", "Machine"],
			correctChoice: 2
		},
		{
			question: "What word is missing from this title: ___ at Ridgemont High ",
			choices: ["Happy Days", "Hard Times", "Sad Days", "Fast Times"],
			correctChoice: 3
		},
		{
			question: "What word is missing from this title: Burn After ____ ",
			choices: ["Leaving", "Landing", "Reading", "Dinner"],
			correctChoice: 2
		},
		{
			question: "What word is missing from this title: The 40-Year Old ____",
			choices: ["Baby", "Grandfather", "Boy", "Virgin"],
			correctChoice: 3
		},
		{
			question: "What word is missing from this title: Superman ____ ",
			choices: ["Returns", "Arrives", "Takes Off", "Lands"],
			correctChoice: 0
		},
		{
			question: "What word is missing from this title: Beauty and the ____ ",
			choices: ["Creature", "Thing", "Beast", "Monster"],
			correctChoice: 2
		},
	],
	currentIndex: 0, //this current index is used to count the index that the quiz is at in order to iterate through the quiz
}

var result = 0;

function createQuestions(question, choices, score) {
	$('.quiz').html("");
	var htmlString = "";
	htmlString = htmlString + '<div class="quiz">'
	htmlString = htmlString + '<h1 class="question">' + question +'</h1>'
	htmlString = htmlString + '<ul class="choices">'
	choices.forEach(function (choice, index) {
		htmlString = htmlString + "<li><input type=radio name=user-answer value=" + index + " >" +"<label>" + choice + "</label></li>";
	})
	htmlString = htmlString + '</ul>'
	htmlString = htmlString + '<h2>' + score + '/' + quiz.questions.length + '</h2>'
	htmlString = htmlString + '<div>'
	$('main').append(htmlString);
}

function iterateQuiz() {
	quiz.questions.forEach(function(prop, index){
		if (quiz.currentIndex === index) {
			createQuestions(prop.question, prop.choices, result);
		} 
	});
}


$('#submit').on('click', function() {
	var value = $('input:radio[name="user-answer"]:checked').val();
	console.log(quiz.questions[quiz.currentIndex]);
	if (quiz.questions[quiz.currentIndex]) {
		if (quiz.questions[quiz.currentIndex].correctChoice == value) {
			result = result + 1;
		}
	quiz.currentIndex += 1;
	iterateQuiz();
	if (quiz.currentIndex === quiz.questions.length) {
		console.log(quiz.currentIndex)
		console.log(quiz.questions.length)
		$('.quiz').html("");
		$('.congrats').removeClass('hide')
		$('.congrats').append('<p>You got ' + result + '/' + quiz.questions.length + '</p>')
		} 
	} 
})

$('.ready').on('click', function() {
	$('.start').hide()
	iterateQuiz();
})


