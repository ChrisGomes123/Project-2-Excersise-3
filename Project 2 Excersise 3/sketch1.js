//Sprint 1 -Click screnn and text to speech

//Yasmine Abdelrahman helped me code this---Start

//I coded this--Start
let text = "Why do all the carrots have to be orange like why dont we call oranges carrots like why man, anyways charles do you understand what Im talking about cause youve been on your phone for hours now.";
//I coded this--Start


var speech = new p5.Speech();

function setup() {
	createCanvas(windowWidth,windowHeight);
	// new P5.Speech object
    
    //This was updated from US female Voice to UK English Male 
	speech.setVoice("Google UK English Male");
}

function draw() {
}

function mouseClicked() {
	console.log("clicked");
	speech.speak(text);
}

//Yasmine Abdelrahman helped me code this---End