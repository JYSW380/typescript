let reviews: number[] = [5,6,7,8,9,1,3];

// for (let i=0; i<reviews.length; i++){
//     console.log(reviews[i]);
// }

let sum: number = 0;
for (let i=0; i<reviews.length ; i++){
   sum += reviews[i];
}

console.log(sum);

let sports: string[] = ["golf", "swimming", "tennis"];
// for (let sport of sports){
//     console.log(sport);
// }

sports.push("baseball");
sports.push("football");
// for (let sport of sports){
//     console.log(sport);
// }

for (let sport of sports) {
    if(sport == "tennis") {
        console.log(sport + " << this is my favorite sport!")
    }
    else {
        console.log(sport);
    }
}


