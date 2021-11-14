//Week7 Posenet Sketch9 -Modified by Christian Gomes Nov/13th/2021---Start
let video;
let pose;
let skeleton;
let angle=0;
let history = [];

function setup(){
   
/////////////////////////////////
    
    
frameRate(10);  
    
    //Modified from 640,480 to 400,400
createCanvas(400, 400);

noStroke();    

video = createCapture(VIDEO);
video.size(width,height);    

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses) 
video.hide(); 
   
    
/////////////////////////////////
    
    
rectMode(CENTER);  
angleMode(DEGREES);
    
    
}
////////////////////////////////////////////

function modelLoaded(){
    console.log("modelLoaded function has been called so this work!!!!");
};



function gotPoses(poses){
    //console.log(poses);
    if( poses.length > 0 ){
        pose = poses[0].pose;
        skeleton = poses[0].skeleton; 
    } 
    
} 





function draw(){
   
////////////////////////////////////////////////
    
image(video, 0, 0,width,height);
//TRESHOLD 0 is white - 1 is black
filter(THRESHOLD,1);    

    
    if(pose){
        //noStroke();
    noFill();    
    stroke(255,0,0);
    

        
        
    let d = dist(pose.leftEye.x,pose.leftEye.y, pose.rightEye.x,pose.rightEye.y);
        
    triangle(pose.nose.x, pose.nose.y, d*3);
    
        let v = createVector(pose.nose.x,pose.nose.y);
        
        history.push(v);
        //console.log("history.length " + history.length);
        let head = history[history.length-1].copy();
        history.push(head);
        //console.log("head " + );
        //head.x += pose.nose.x;
        //head.y += pose.nose.y;
        history.shift();
        
        //if(history.length > 50){
        
        for(let i = 0; i < history.length-1; i++){
            //console.log("history[i].y " + history[i].y);
            //ellipse(history[i].x, history[i].y, d*3);
            //console.log("i");
            drawHeadSpace(history[i].x,history[i].y);
            
        }
   
   
    ////////////////////////////////////////////////////////////// 
        
    for(let i=0; i < pose.keypoints.length;i++){
    //for(let i=0; i < 5;i++){
    let x = pose.keypoints[i].position.x;
    let y = pose.keypoints[i].position.y;
    
    //Modified from RECT to Triangle
    triangle(x,y,20,20);
    //angle+=0.01;  
        
        //pop();
    //ellipse(x,y,120,120);
      //box(x,y,50);  
        
    for(let i = 0; i < skeleton.length; i++){
        let a = skeleton[i][0];
        let b = skeleton[i][1];
      
        // Modified stroke weight from 2 to 4
        strokeWeight(4);
        
        //Modified stroke from 255 to 45
        stroke(45);
        line(a.position.x, a.position.y,b.position.x, b.position.y );
        fill(127);
        }    
    }
}   
}
function drawHeadSpace(x,y){
    
    //Modified from 0,0,255 to 255,255,255     
    fill(255,255,255);
    
    //Modified from a ellipse to a square
        square(x, y,100);
        //console.log("drawHeadSpace " + x);
        //history.splice(0,1); 
    if(history.length > 20){
        console.log("more than 20");
        history.splice(0,1);
        }
    }

/////////////////////////////////////////////////////////////

//Week7 Posenet Sketch9 Modified by Christian Gomes Nov/13th/2021---End