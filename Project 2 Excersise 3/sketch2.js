//Week6 LoadSounds Sketch -Modified by Christian Gomes Nov/13th/2021---Start

let song;

function setup() {
//Modified chnaged to assets_sounds_zig-zag.mp3 from assets/assets_sounds_squiggle.mp3
     
    //Sound used sourced from:W eek 6 LoadSounds--Start
  song = loadSound('music/assets_sounds_zig-zag.mp3');
    //Sound used sourced from:W eek 6 LoadSounds--End
    
   //Modified from 720,200 to 300, 300
  createCanvas(300, 300);
    
// Modified from 255,0,0 to 78,166,152
    background(78, 166, 152);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
      
  } else {
    song.play();
     
      //Added in another sound to play after iuts clicked the second time
      
      //Sound used sourced from:W eek 6 LoadSounds--Start
     song = loadSound('music/assets_sounds_timer.mp3');
       //Sound used sourced from:W eek 6 LoadSounds--End
      
      //Modified from 0,255,0 to 86,48,235
    background(86, 48, 235);
      
  }
}


//Week 6 LoadSounds Sketch Modified by Christian Gomes Nov/13th/2021---End

