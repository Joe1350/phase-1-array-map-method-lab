  // make our own function

// const students = ["harry", "ron", "hermione", "ginevra"];
// const rollCall = [];

// for(let student of students) {
//   rollCall.push(student + " the wizard");
// }

// console.log(students);
// console.log(rollCall);

  // use map method

// function studentRollCall(student) {
//   return student + " the wizard";
// }

// const students = ["harry", "ron", "hermione", "ginevra"];
// const rollCall = students.map(studentRollCall);

// console.log(rollCall);

  // use map methods with an anonymous function declaration

// const students = ["harry", "ron", "hermione", "ginevra"];
// const rollCall = students.map(function(student) {
//   return student + " the wizard";
// })

// console.log(rollCall)

  // now, turn it into an arrow function

const students = ["harry", "ron", "hermione", "ginevra"];
const rollCall = students.map(student => student + " the wizard");

  // map with complex data structures

const robots = [
  {name: 'Johnny 5', modes: 5, isActivated: false,},
  {name: 'C3PO', modes: 3, isActivated: false,},
  {name: 'Sonny', modes: 2.5, isActivated: false,},
  {name: 'Baymax', modes: 1.5, isActivated: false,},
]

const activatedRobots = robots.map(robot => {
  return Object.assign({}, robot, {
    modes: robot.modes * 2,
    isActivated: true,
  });
});

console.table(activatedRobots)

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(sentence => {
    console.log(sentence)
    const words = sentence.split(" ")
    console.log(words)
    const upperCased = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    console.log(upperCased)
    const newArray = upperCased.join(" ")
    console.log(newArray)
    return newArray
  })
}