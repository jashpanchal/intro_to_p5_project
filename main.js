function setup(){
video=createCapture(VIDEO);
video.size(255,255);
video.position(315,200);

canvas=createCanvas(640,480);
canvas.position(110,100);

fill(255,0,0)
rect(30,7.5,580,15);
rect(30,457.5,580,15);
rect(7.5,30,15,420);
rect(617.5,30,15,420);

fill(0,1,255);
    
circle(15,15,30);
circle(625,15,30);
circle(15,465,30);
circle(625,465,30);

}

