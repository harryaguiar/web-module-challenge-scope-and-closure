// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 uses closure while counter2 uses global variable
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * coounter1 as everything is inside the function, it does not need a variable outside the function to be accessed.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 variable is private, protected from mutation. <-
 * count2 if needs to have multiple things adding to the counter <-
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

console.log(counter1());

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

console.log(counter2());


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

  let points = Math.floor(Math.random() * 3)
  return points;
}

console.log("Task 2:" , inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, numberInnings){

let finalScore = {};
let homeScore = 0;
let awayScore = 0;


for (let i = 0; i <= numberInnings; i++) {
  awayScore = awayScore + callback();
  homeScore = homeScore + callback();
  
}
  
  finalScore.Home = homeScore;
  finalScore.Away = awayScore;
  

  return finalScore;

}

console.log("Task 3:" , finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

/*  */

function getInningScore(numberInningCB){
  let home = 0;
  let away = 0;
  return function (){
    home += numberInningCB();
    away += numberInningCB();
    // console.log({Home: home, Away: away});
    return {Home: home, Away: away};
    
  }
}

function scoreboard(getInningScoreCB, inningCB, numberInnings) {

  const scoreByInning = [];
  const temp = getInningScoreCB(inningCB);

for (let i = 0; i < numberInnings; i++) {
  scoreByInning.push(temp())

  console.log(`Inning ${i + 1} : Home ${scoreByInning[i].Home} - Away ${scoreByInning[i].Away}`);
  
}

// console.log("Final Score: Home" , scoreByInning[8].Home , "- Away", scoreByInning[8].Away);
console.log(`Final Score: Home ${scoreByInning[8].Home} - Away ${scoreByInning[8].Away}`);


}

console.log(scoreboard(getInningScore, inning, 9));
// console.log(object);
