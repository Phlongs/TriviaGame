
var pos = 0, test, yes, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var timeleft = 40;
var timesup = "Game Over";
var downloadTimer;
var questions = [
    [ "What player has caught the most passes in a single Superbowl?", "Jerry Rice 49ers", "Michael Irvin Cowboys", "James White Patriots", "C" ],
	[ "What year was USA Basketball's first Dream Team assembled?", "1990", "1992", "1989", "B" ],
	[ "Who led the first USA Dream Team in scoring?", "Michael Jordan", "Larry Bird", "Charles Barkley", "C" ],
	[ "What team did Kobe Bryant play against when he scored 81 pts?", "NY Knicks", "Toronto Raptors", "Dallas Mavericks", "B" ],
	[ "Who did Muhammad Ali fight in the 'Rumble in the Jungle'?", "Joe Frazier", "Sonny Liston", "George Foreman", "C" ],
	[ "What quarterback took over a 1-4 Broncos team to a magical season and a playoff win in 2011?", "Tim Tebow", "John Elway", "Peyton Manning" ],
	[ "Who has won the most majors in PGA history", "Tiger Woods", "Jack Nicklaus", "Phil Mickelson", "B" ],
	[ "Who is Brazil's all time World Cup Goal scorer leader?", "Pele", "Ronoldo", "Neymar", "B"],
	[ "What lake did the Minnesota Vikings have their famous sex party?", "Lake Mich", "Lake Minnetonka", "Lake Lanier", "B" ],
	[ "What popular grocery store chain did NFL QB, Jameis Winston, steal crab legs from?", "Publix", "Krogers", "Whole Foods", "A"]
];


function renderQuestion(){
	
	test = $("#test");
	if(pos >= questions.length){

		test.html("<h2>You got "+correct+" of "+questions.length+" questions correct!</h2>");
		$("#test_status").html("Test Completed");
		pos = 0;
		correct = 0;
		timeleft = 0;
		$("#countdowntimer").text(timesup);
		return false;
	}
	$("#test_status").html("Question "+(pos+1)+" of "+questions.length);
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.html("<h3>"+question+"</h3>");
	test.append("<input type='radio' id='choices' value='A'> "+chA+"<br>");
	test.append("<input type='radio' id='choices' value='B'> "+chB+"<br>");
	test.append("<input type='radio' id='choices' value='C'> "+chC+"<br><br>");
	test.append("<button onclick='checkAnswer()'>Submit Answer</button>");
	
}
	function checkAnswer(){
		choices = $("#choices");
		for(var i=0; i<choices.length; i++){
			if(choices[i].checked){
				choice = choices[i].value;
			}
		}
		if(choice == questions[pos][4]){
			correct++;
		}
		pos++;
		renderQuestion();
		
		
}

timer();

function timer(){
var outOfTime = "You have no time remaining!"
var downloadTimer = setInterval(function(){
	    timeleft--;
	    $("#countdowntimer").text(timeleft + " seconds remaining");
	    if(timeleft <= 0){
	        clearInterval(downloadTimer);
	        $("#countdowntimer").text(outOfTime);
	        $("#test").html("<h2>You got "+correct+" of "+questions.length+" questions correct!</h2>");
	        $("#test_status").html("Test Completed");
	        
	    }

}, 1000);
};

window.addEventListener("load", renderQuestion, false);
