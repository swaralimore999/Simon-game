var c1 = "green";
var c2 = "red";
var c3 = "yellow";
var c4 = "blue";

var rbtn = [c1,c2,c3,c4];

let comSeq = [];
let humanSeq = [];
let level = 0;
var started = false;

$(".btn").click(function(event){
    var i = event.target.id;
    humanSeq.push(i);
    playSound(i);       
    clickBtn(i);
    answer(humanSeq.length-1);
});

function answer(currentLevel){
    if(comSeq[currentLevel] === humanSeq[currentLevel]){
        if(comSeq.length==humanSeq.length){
            setTimeout(function(){
                nextSequence();

            },500);
            
        }
    
    }else {
        $("h1").text("Game over,Press any key to start again");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startOver();
    }

}


$(document).keypress(function(){
    if (!started){
        nextSequence();
        started=true;

    }
    
});  


function nextSequence(){
    humanSeq=[];
    level++;
    $("h1").text("Level "+ level);
    
    var ri=(Math.floor(Math.random()*4));
    var rcolor = rbtn[ri];
    comSeq.push(rcolor);
    animationFade(rcolor);
    playSound(rcolor);

}

function playSound(name){
    var audio = new Audio("sounds/"+ name + ".mp3");
    audio.play();

}

function startOver(){
    level =0;
    comSeq =[];
    started=false;
}
  



function clickBtn(i){
        $("."+i).addClass("pressed");

        setTimeout(function(){
            $("."+i).removeClass("pressed");


        },60);
}

function animationFade(animation){
        $("." + animation).fadeOut(100).fadeIn(100);
 }






    

 
    
    
    


