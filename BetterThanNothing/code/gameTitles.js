//Global variables
var displayTitle;
var displayInstruct;

//screen counter will be used to determine which screen to go to
var enterCounter = 0;

//Window rezise
//Will need to update actor resizing when they are implemented
window.addEventListener('resize', function(){
	console.log('resize');

	if (displayTitle == true){
		console.log('resize title');
	
		//must update the canvas size to change the image size drawn
		backgroundCan.width = window.innerWidth;
		backgroundCan.height = window.innerWidth*(9/16);
	
		//clear the canvas and redraw titleScreen
		backgroundCtx.clearRect(0, 0, backgroundCan.width, backgroundCan.height);
		backgroundCtx.drawImage(titleImage, 0, 0, backgroundCan.width, backgroundCan.height);
	}

	else if (displayInstruct == true){
		console.log('resize instruct');
	
		//must update the canvas size to change the image size drawn
		backgroundCan.width = window.innerWidth;
		backgroundCan.height = window.innerWidth*(9/16);
	
		//clear the canvas and redraw instruct screen
		backgroundCtx.clearRect(0, 0, backgroundCan.width, backgroundCan.height);
		backgroundCtx.drawImage(instructImage, 0, 0, backgroundCan.width, backgroundCan.height);
	}
	
	else{
		console.log('resize went wrong');
	}
}, false);

//User input code
//key codes for user input
var KEY_CODES = {
	13: 'enter',
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
/*
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
*/
//Use this eventListener to determine which screen to be on
//everytime enter is pressed the next screen will be brought up
//unless there are no more screen to go to
document.addEventListener('keydown', enter, false);

function enter(event){
	console.log('enter pressed');
	if(event.keyCode == 13){
		enterCounter++
	}
	if (enterCounter == 1){
		instructScreen();
	}
	else if (enterCounter == 2){
		lvlScreen();
	}
}
//end user input code









//Load everything necessary at runtime
window.onload = function loadGame(levels, display){
	//variables to keep track of the images loaded
	var numImgaes = 2;
	var numLoaded = 0;

	//Create necessary canvases
	//background canvas
		backgroundCan = document.createElement('canvas');
		backgroundCtx = backgroundCan.getContext('2d');
		backgroundCan.width = window.innerWidth;
		backgroundCan.height = window.innerWidth*(9/16);
		document.body.appendChild(backgroundCan);
	//level canvas
		lvlCan = document.createElement('canvas');
		lvlCanCtx = lvlCan.getContext('2d');
		lvlCan.width = window.innerWidth;
		lvlCan.height = window.innerWidth*(9/16);
		document.body.appendChild(lvlCan);
	//actor canvas
		actCan = document.createElement('canvas');
		actCanCtx = actCan.getContext('2d');
		actCan.width = window.innerWidth;
		actCan.height = window.innerWidth*(9/16);
		document.body.appendChild(actCan);

	//Load all the images
	titleImage = new Image();
	instructImage = new Image();

	titleImage.src = 'img/titleImage.jpg';
	instructImage.src = 'img/instructImage.jpg';


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





//The introductory screen
function titleScreen(){
	console.log('titleScreen');
	
	//This variable will be used for window resize purposes
	displayTitle = true;
	//Draw the titleScreen to the canvas background
	backgroundCtx.drawImage(titleImage, 0, 0, backgroundCan.width, backgroundCan.height);
}

//the instructions screen
function instructScreen(){
	console.log('instructScreen');
	
	//This variable will be used for window resize purposes
	displayTitle = false;
	displayInstruct = true;
	//draw the instruction screen to the canvas
	backgroundCtx.clearRect(0, 0, backgroundCan.width, backgroundCan.height);
	backgroundCtx.drawImage(instructImage, 0, 0, backgroundCan.width, backgroundCan.height);
}

//the game level screen
function lvlScreen(){
	console.log('lvlScreen');
	document.removeEventListener('keydown', enter, false);
	displayInstruct = false;
	backgroundCtx.clearRect(0, 0, backgroundCan.width, backgroundCan.height);
}



















