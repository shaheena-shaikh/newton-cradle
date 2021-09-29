let x = [];
let vx = [];
let fx;
let m;
let dt; 
let N;
let d;

function setup() {  
  createCanvas(400, 400);
  N=10;
  dt = 0.001;
  dx = 0;
  d=0;
  fx=0;
  m=20;
  for (var i=0;i<N; i++){
  x[i] = 100+m*i;
  vx[i]=0;
  }
  x[0]=50;
  vx[0]=1000;
}

function draw() {
  
background(0,0,0,255);
fill(255,0,0,255);
text("Newton's Cradle",100,50);
text("Vary size and number of balls",100,80);
text("Extend to reflection at walls",100,110);
//Activate transfer of momentum at contact
  for (var i=0;i<N-1;i++){
  d = m-abs(x[i+1]-x[i]);
  if (d>0){
    fx = vx[i];
    vx[i]=vx[i]-fx;
    vx[i+1]=vx[i+1]+fx;
  }
    x[i]=x[i] + vx[i]*dt;
    x[i+1]=x[i+1] + vx[i+1]*dt;
  }
  for (var i=0;i<N;i++){
  fill(0,255,0,255);
  ellipse(x[i],200,m);
  }
  
}


