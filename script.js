//intern name
const internName = "Chinaza Nnamani";
let studentName = `Student name; ${internName}`;
console.log(studentName);
//Task scores
const taskOne = 9;
const taskTwo = 9.5;
const taskThree = 9;
let taskScores = `Each subject score;
Task one = ${taskOne}
Task two = ${taskTwo}
Task three = ${taskThree}`;
console.log(taskScores);
//Total and average scores
let scores = [taskOne, taskTwo, taskThree];
let totalScore = scores[0] + scores[1] + scores[2];
let averageScore = (totalScore / scores.length).toFixed(2);
let average = `Average = ${averageScore}`;
console.log(average);
//Grade determination
let grades = ['A', 'B', 'C', 'D', 'E'];
if (averageScore >= 9) {
  grade = grades[0];
} else if (averageScore >= 8) {
  grade = grades[1];
} else if (averageScore >= 7) {
  grade = grades[2];
} else if (averageScore >= 6) {
  grade = grades[3];
} else if (averageScore < 6) {
  grade = grades[4];
}
let finalGrade = `Final Grade = ${grade}`;
console.log(finalGrade);

//switch statement
switch (grade) {
  case 'A':
    message = "Excellent performance!";
    break;
  case 'B':
    message = "Great job! Keep aiming high.";
    break;
  case 'C':
    message = "Good effort. Try to improve.";
    break;
  case 'D':
    message = "You're close. Keep working at it.";
    break;
  case 'E':
    message = "Don't give up. You can do better next time.";
    break;
  default:
    message = "Invalid grade";    
}
console.log(`${message}`);
