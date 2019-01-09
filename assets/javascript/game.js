$(document).ready( function() {
var theirPoints = 0;
var win=0;
var lose=0;
var randIntOne;
var randIntTwo;
var randIntThree;
var randIntFour;
$("#img1").on("click", function() {
theirPoints = theirPoints + randIntOne;
console.log(theirPoints);
});


//assigning point values to 4 crystals
function assignValues() {
    var randIntOne = Math.floor(Math.random() * 10);
    var randIntTwo = Math.floor(Math.random() * 10);
    var randIntThree = Math.floor(Math.random() * 10);
    var randIntFour = Math.floor(Math.random() * 10);

};

assignValues();
console.log(randIntFour);



});