$(document).ready( function() {

var theirPoints = 0;
var win=0;
var lose=0;
var randIntOne;
var randIntTwo;
var randIntThree;
var randIntFour;
var pointGoal;

$("#img1").on("click", function() {
theirPoints = theirPoints + randIntOne;

displayTheirPoints();
});
$("#img2").on("click", function() {
    theirPoints = theirPoints + randIntTwo;
    
    displayTheirPoints();
});
$("#img3").on("click", function() {
    theirPoints = theirPoints + randIntThree;
    
    displayTheirPoints();
});
$("#img4").on("click", function() {
    theirPoints = theirPoints + randIntFour;
    
    displayTheirPoints();
});

function displayTheirPoints() {
    $("#their-points").text(theirPoints);
};

//assigning point values to 4 crystals
function assignValues() {
    randIntOne = Math.floor(Math.random() * 12);
    randIntTwo = Math.floor(Math.random() * 12);
    randIntThree = Math.floor(Math.random() * 12);
    randIntFour = Math.floor(Math.random() * 12);
    randIntFive = Math.floor(Math.random() * 10);
    randIntSix = Math.floor(Math.random() * 10);
    randIntSeven = Math.floor(Math.random() * 10);
    randIntEight = Math.floor(Math.random() * 10);
    pointGoal = randIntOne*randIntFive + randIntTwo*randIntSix + randIntThree*randIntSeven + randIntFour*randIntEight;

};

assignValues();
$("#point-goal").text(pointGoal);


});