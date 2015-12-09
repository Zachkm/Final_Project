//Global Variables
var canvas;
var context;



//On load function
window.onload = function(){
	console.log('onload');
	
	//Fetch the canvas
	canvas = document.createElement('canvas');
	context = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	document.body.appendChild(canvas);
	
	openingScreen();
}

//Opening Screens
//Title screen presented on load
function openingScreen(){
	console.log('openingScreen');
	
	//Opening screen image
	var titleImageReady = false;
	var titleImage = new Image();
	titleImage.src = 'images/titleImage.jpg';
	titleImage.onload = function(){
		titleImageReady = true;
		context.drawImage(titleImage, 0, 0, canvas.width, canvas.height);
	};
	
	//Controls to progress to the next screen
	addEventListener('keydown', function(){
		if (event.keyCode == 13){
			//run the instructions screen
			instructionScreen();
		}
		else
			console.log('other key pressed');
	}, false);
}

//Instruction screen
function instructionScreen(){
	console.log('instructions');
	
	//Load and draw the game instructions
	var instructImageReady = false;
	var instructImage = new Image();
	instructImage.src = 'images/instructImage.jpg';
	instructImage.onload = function(){
		instructImageReady = true;
		context.drawImage(instructImage, 0, 0, canvas.width, canvas.height);
	};
	
	//Controls to progress to the next screen
	addEventListener('keydown', function(){
		if (event.keyCode == 13)
			runGame();
		else
			console.log('other key pressed');
	}, false);
}



//Functions for running the game
function runGame(){
	console.log('runGame');
}











