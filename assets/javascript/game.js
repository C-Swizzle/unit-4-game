$(document).ready( function() {

var theirPoints = 0;
var win=0;
var lose=0;
var randIntOne;
var randIntTwo;
var randIntThree;
var randIntFour;
var pointGoal;
$("#win").text(win);
$("#lose").text(lose);
assignValues();
displayTheirPoints();

$("#img1").on("click", function() {
theirPoints = theirPoints + randIntOne;
dontGoOver();
displayTheirPoints();

});
$("#img2").on("click", function() {
    theirPoints = theirPoints + randIntTwo;
    dontGoOver();
    displayTheirPoints();
    
});
$("#img3").on("click", function() {
    theirPoints = theirPoints + randIntThree;
    dontGoOver();
    displayTheirPoints();
    
});
$("#img4").on("click", function() {
    theirPoints = theirPoints + randIntFour;
    dontGoOver();
    displayTheirPoints();
    
});

function displayTheirPoints() {
    $("#their-points").text(theirPoints);
    $("#point-goal").text(pointGoal);
};

//assigning point values to 4 crystals
function assignValues() {
    randIntOne = Math.floor(Math.random() * 12) + 1;
    randIntTwo = Math.floor(Math.random() * 12) + 1;
    randIntThree = Math.floor(Math.random() * 12) + 1;
    randIntFour = Math.floor(Math.random() * 12) + 1;
    randIntFive = Math.floor(Math.random() * 10);
    randIntSix = Math.floor(Math.random() * 10);
    randIntSeven = Math.floor(Math.random() * 10);
    randIntEight = Math.floor(Math.random() * 10);
    pointGoal = randIntOne*randIntFive + randIntTwo*randIntSix + randIntThree*randIntSeven + randIntFour*randIntEight;

   // console.log(randIntOne, randIntTwo, randIntThree, randIntFour);
    if (pointGoal>120 || pointGoal<19) {
        assignValues();
        } 
};

function dontGoOver() {
    if (theirPoints>pointGoal) {
        lose++;
        $("#lose").text(lose);
        assignValues();
        theirPoints=0;
    } else if (theirPoints===pointGoal) {
        win++;
        $("#win").text(win);
        assignValues();
        theirPoints=0;
    }
};
var crystalNums =[];
var randNums =[];
function assignRandoms() {

for (var i=0; i<4; i++) {
    crystalNums[i] = Math.floor(Math.random() * 12) + 1 ;
    randNums[i] = Math.floor(Math.random() * 10);
}
} 
assignRandoms();

var pointGoal2;
function newFunction() {
    pointGoal2 = crystalNums[0]*randNums[0] + crystalNums[1]*randNums[1] + crystalNums[2]*randNums[2] + crystalNums[3]*randNums[3];
    if (pointGoal2>120 || pointGoal2<19) {
        assignRandoms();
        newFunction();
}
console.log(crystalNums, randNums);
}


newFunction();
console.log(pointGoal2);
});