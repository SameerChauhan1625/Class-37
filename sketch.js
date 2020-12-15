var database;
var gamestate =0;
var playercount;
var allplayers;
var form,game,player;
function setup(){
    createCanvas(500,500);
    database = firebase.database();

    game = new Game();
    game.getgamestate();
    game.start();

}

function draw(){
    if(playercount == 4){
        game.updateGamestate(1)
    }

    if(gamestate === 1){
        clear();
        game.play();
    }
}

    