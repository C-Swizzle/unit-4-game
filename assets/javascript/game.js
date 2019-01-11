$(document).ready( function() {

var theirPoints2 = 0;
var win=0;
var lose=0;
var crystalNums =[];
var randNums =[];
// var randIntOne;
// var randIntTwo;
// var randIntThree;
// var randIntFour;
// var pointGoal;
$("#win").text(win);
$("#lose").text(lose);
// assignValues();
assignRandoms();
displayTheirPoints();
assignValues2();
$("#point-goal").text(pointGoal2);

// $("#img1").on("click", function() {
// theirPoints = theirPoints + randIntOne;
// dontGoOver();
// displayTheirPoints();

// });
// $("#img2").on("click", function() {
//     theirPoints = theirPoints + randIntTwo;
//     dontGoOver();
//     displayTheirPoints();
    
// });
// $("#img3").on("click", function() {
//     theirPoints = theirPoints + randIntThree;
//     dontGoOver();
//     displayTheirPoints();
    
// });
// $("#img4").on("click", function() {
//     theirPoints = theirPoints + randIntFour;
//     dontGoOver();
//     displayTheirPoints();
    
// });

function displayTheirPoints() {
    $("#their-points").text(theirPoints2);
    $("#point-goal").text(pointGoal2);
};


//-----------------------This block of code actually works, it's just ugly-------------------------------------
//assigning point values to 4 crystals

// function assignValues() {
//     randIntOne = Math.floor(Math.random() * 12) + 1;
//     randIntTwo = Math.floor(Math.random() * 12) + 1;
//     randIntThree = Math.floor(Math.random() * 12) + 1;
//     randIntFour = Math.floor(Math.random() * 12) + 1;
//     randIntFive = Math.floor(Math.random() * 10);
//     randIntSix = Math.floor(Math.random() * 10);
//     randIntSeven = Math.floor(Math.random() * 10);
//     randIntEight = Math.floor(Math.random() * 10);
//     pointGoal = randIntOne*randIntFive + randIntTwo*randIntSix + randIntThree*randIntSeven + randIntFour*randIntEight;

//    // console.log(randIntOne, randIntTwo, randIntThree, randIntFour);
//     if (pointGoal>120 || pointGoal<19) {
//         assignValues();
//         } 
// };

//------------------------------------------------------------------------------------------------------------------

function dontGoOver() {
    if (theirPoints2>pointGoal2) {
        lose++;
        $("#lose").text(lose);
        // assignValues();
        assignRandoms();
        assignValues2();
        theirPoints2=0;
    } else if (theirPoints2===pointGoal2) {
        win++;
        $("#win").text(win);
        // assignValues();
        assignRandoms();
        assignValues2();
        theirPoints2=0;
    }
};


function assignRandoms() {

for (var i=0; i<4; i++) {
    crystalNums[i] = Math.floor(Math.random() * 12) + 1 ;
    randNums[i] = Math.floor(Math.random() * 10);
}
} 


var pointGoal2;
function assignValues2() {
    //this line of code is ugly, there MUST be a better way to do this with a for loop
    pointGoal2 = crystalNums[0]*randNums[0] + crystalNums[1]*randNums[1] + crystalNums[2]*randNums[2] + crystalNums[3]*randNums[3];
    if (pointGoal2>120 || pointGoal2<19) {
        assignRandoms();
        assignValues2();
}
// for (var i=0; i<crystalNums.length; i++) {
//     pointGoal3 = crystalNums[i]*randNums[i];

// }
}



// console.log(pointGoal2);
// console.log(crystalNums);
// console.log(randNums);
$("#img1").on("click", function() {
    theirPoints2 = theirPoints2 + crystalNums[0];
    dontGoOver();
    displayTheirPoints();
    
    });

$("#img2").on("click", function() {
    theirPoints2 = theirPoints2 + crystalNums[1];
    dontGoOver();
    displayTheirPoints();
        
    });

$("#img3").on("click", function() {
    theirPoints2 = theirPoints2 + crystalNums[2];
    dontGoOver();
    displayTheirPoints();
            
    });
$("#img4").on("click", function() {
    theirPoints2 = theirPoints2 + crystalNums[3];
    dontGoOver();
    displayTheirPoints();
        
    });
});