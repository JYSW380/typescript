"use strict";
var reviews = [5, 6, 7, 8, 9, 1, 3];
// for (let i=0; i<reviews.length; i++){
//     console.log(reviews[i]);
// }
var sum = 0;
for (var i = 0; i < reviews.length; i++) {
    sum += reviews[i];
}
console.log(sum);
var sports = ["golf", "swimming", "tennis"];
// for (let sport of sports){
//     console.log(sport);
// }
sports.push("baseball");
sports.push("football");
// for (let sport of sports){
//     console.log(sport);
// }
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    if (sport == "tennis") {
        console.log(sport + " << this is my favorite sport!");
    }
    else {
        console.log(sport);
    }
}
