var canvas,bg;

var playerCount;
var allPlayers;
var database;

var form,player,game;

var p1,p2,p3,p4;


function preload(){
    p1 = loadImage('images/player1.png');
    p2 = loadImage('images/player2.png');
    p3 = loadImage('images/player3.png');
    p4 = loadImage('images/player4.png');
    
}





function setup(){
canvas =  createCanvas(displayWidth - 20,displayHieght - 30);
database = firebase.database();
game = new Game
game.getStatic();
game.start();   
}

function draw(){
 if(playerCount === 4){
     game.update(1);
 }  
 if(gameState === 1){
     clearInterval();
     game.play();
     if(gameState === 2){
         game.end();
     }
 }
}