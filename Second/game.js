//Global variables
var displayTitle;
var displayInstruct;
var displayLvl = false;
var displayAct = false;
var displayScene = false;

//I don't fully understand the code having to do with keys
//key codes for user input
var KEY_CODES = {
	13: 'enter',
	37: 'left',
	38: 'up',
	39: 'right',
};

//Status of each key code

KEY_STATUS = {};
//set each key to default
for (code in KEY_CODES){
	console.log('ran key status');
	KEY_STATUS[KEY_CODES[code]] = false;
}

//listen for an onkeydown event
//when a key is pressed set the key code to true
//this way which key is pressed is known
document.onkeydown = function(event){
	console.log('keyDown');
	//Firefox and Opera use charCode
	var keyCode = (event.keyCode) ? event.keyCode : e.charCode;
	if (KEY_CODES[keyCode]){
		event.preventDefault();
		KEY_STATUS[KEY_CODES[keyCode]] = true;
	}
}

//listen ofr onkeyup events
//when a key is released set the key code to false
//this way which key is released is known
document.onkeyup = function(event){
	console.log('keyUp');
	//Firefox and Opera use charCode
	var keyCode = (event.keyCode) ? event.keyCode : e.charCode;
	if(KEY_CODES[keyCode]){
		event.preventDefault();
		KEY_STATUS[KEY_CODES[keyCode]] = false;
	}
}

//Window rezise
window.addEventListener('resize', function(){
	console.log('resize');

	if (displayLvl == true && displayAct == true && displayScene == true){
		console.log('resize lvl act scene');
	
		//must update the canvas size to change the image size drawn
		lvlCan.width = window.innerWidth;
		lvlCan.height = window.innerWidth*(9/16);
		actCan.width = window.innerWidth;
		actCan.height = window.innerWidth*(9/16);
		background.width = window.innerWidth;
		background.height = window.innerWidth*(9/16);
	
		//clear each canvas
		lvlCanCtx.clearRect(0, 0, lvlCan.width, lvlCan.height);
		actCanCtx.clearRect(0, 0, actCan.width, actCan.height);
		backgroundCtx.clearRect(0, 0, background.width, background.height);
	
		//redraw the actors, level, and scene
		backgroundCtx.drawImage(sceneImage, 0, 0, background.width, background.height);
	}

	else if (displayTitle == true){
		console.log('resize title');
	
		//must update the canvas size to change the image size drawn
		background.width = window.innerWidth;
		background.height = window.innerWidth*(9/16);
	
		//clear the canvas and redraw titleScreen
		backgroundCtx.clearRect(0, 0, background.width, background.height);
		backgroundCtx.drawImage(titleImage, 0, 0, background.width, background.height);
	}

	else if (displayInstruct == true){
		console.log('resize instruct');
	
		//must update the canvas size to change the image size drawn
		background.width = window.innerWidth;
		background.height = window.innerWidth*(9/16);
	
		//clear the canvas and redraw instruct screen
		backgroundCtx.clearRect(0, 0, background.width, background.height);
		backgroundCtx.drawImage(instructImage, 0, 0, background.width, background.height);
	}
	
	else{
		console.log('resize went wrong');
	}
}, false);





//Load ecerything necessary at runtime
window.onload = function runGame(levels, display){
	//variables to keep track of the images loaded
	var numImgaes = 5;
	var numLoaded = 0;

	//Create necessary canvases
	//background canvas
		background = document.createElement('canvas');
		backgroundCtx = background.getContext('2d');
		background.width = window.innerWidth;
		background.height = window.innerHeight;
		document.body.appendChild(background);
	//level canvas
		lvlCan = document.createElement('canvas');
		lvlCanCtx = lvlCan.getContext('2d');
		lvlCan.width = window.innerWidth;
		lvlCan.height = window.innerHeight;
		document.body.appendChild(lvlCan);
	//actor canvas
		actCan = document.createElement('canvas');
		actCanCtx = actCan.getContext('2d');
		actCan.width = window.innerWidth;
		actCan.height = window.innerHeight;
		document.body.appendChild(actCan);

	//Load all the images
	titleImage = new Image();
	instructImage = new Image();
	playerImage = new Image();
	hazardImage = new Image();
	sceneImage = new Image();

	titleImage.src = 'images/titleImage.jpg';
	instructImage.src = 'images/instructImage.jpg';
	playerImage.src = 'images/player.jpg';
	hazardImage.src = 'images/hazard.jpg';
	sceneImage.src = 'images/scene.jpg';

	titleImage.onload = function(){
		console.log('titleImage loaded');
		//call the imageLoaded function to update the numLoaded var
		imageLoaded();
	}
	instructImage.onload = function(){
		console.log('instructImage loaded');
		//call the imageLoaded function to update the numLoaded var
		imageLoaded();
	} 
	playerImage.onload = function(){
		console.log('playerImage loaded');
		//call the imageLoaded function to update the numLoaded var
		imageLoaded();
	}
	hazardImage.onload = function(){
		console.log('hazardImage loaded');
		//call the imageLoaded function to update the numLoaded var
		imageLoaded();
	}
	sceneImage.onload = function(){
		console.log('sceneImage loaded');
		//call the imageLoaded function to update the numLoaded var
		imageLoaded();
	}

	//ensure all images are loaded before preceeding
	function imageLoaded(){
		//For every image loaded numLoaded increases by one
		numLoaded++;
		//When numLoaded equals numImages then proceed to the next function
		if (numLoaded == numImgaes){
			titleScreen();
		}
	}
}



function titleScreen(){
	console.log('titleScreen');
	//This variable will be used for window resize purposes
	displayTitle = true;
	//Draw the titleScreen to the canvas background
	backgroundCtx.drawImage(titleImage, 0, 0, background.width, background.height);
}

function instructScreen(){
	console.log('instructScreen');
	//This variable will be used for window resize purposes
	displayTitle = false;
	displayInstruct = true;
	//draw the instruction screen to the canvas
	backgroundCtx.clearRect(0, 0, background.width, background.height);
	backgroundCtx.drawImage(instructImage, 0, 0, background.width, background.height);
}