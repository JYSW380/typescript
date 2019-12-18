import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let myCircket = new CricketCoach();
let myGolf = new GolfCoach();

let myCoach: Coach[] = [];
myCoach.push(myCircket);
myCoach.push(myGolf);

for (let coach of myCoach) {
    console.log(coach.getDailyWorkout());
}