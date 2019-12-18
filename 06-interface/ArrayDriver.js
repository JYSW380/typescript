"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var myCircket = new CricketCoach_1.CricketCoach();
var myGolf = new GolfCoach_1.GolfCoach();
var myCoach = [];
myCoach.push(myCircket);
myCoach.push(myGolf);
for (var _i = 0, myCoach_1 = myCoach; _i < myCoach_1.length; _i++) {
    var coach = myCoach_1[_i];
    console.log(coach.getDailyWorkout());
}
