// WEEK 2 - School of Code Mentoring Review
// LOOPS info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// FOR LOOPS
/*
for (initialization, condition, afterthought) {
    statement (task)
}

initialization: set things up first, for example declare a variable
condition: check if condition evaluates to true or false, if true, do the task, if false, stop
afterthought: after doing the task, do some changes or updates, then check if the condition is still true and stop or continue
*/

for (let i = 1; i <= 5; i++) {
  console.log(`I baked ${i} cakes.`);
}

// FOR...OF LOOPS (iterable objects only)
/*
for (variable of object) {
    statement
}
*/

const fruits1 = ['apple', 'banana', 'cherry', 'date'];
const fruits2 = { fruit: 'apple', fruit: 'banana' };
for (const fruit of fruits1) {
  console.log(fruit);
}

const message = 'Hello World!';
for (const char of message) {
  console.log(char);
}

// Special mention: FOR...EACH LOOPS (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
/*
Foreach loops are special because they're not a standalone function of JavaScript like while loops or for...of loops
Foreach is an array method, meaning it's designed to be used only with arrays.

array.forEach(function(currentValue, index, array){
    statement
}
*/

const shows = ['Breaking Bad', 'Peaky Blinders', 'Snowpiercer'];
shows.forEach(function (show, index) {
  console.log(`Favourite show #${index}: ${show}`);
});

/*-----------------------------------------------------------------*/
// WHILE LOOPS

/*
while (condition) {
  statement
}

this will run the task inside the loop while the condition evaluates to true, until it evaluates to false
WARNING: if there are no conditions to break the loop and it evaluates to true, it can run forever!
*/

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}

/*-----------------------------------------------------------------*/
// BREAK, CONTINUE
/*
break and continue are syntax that allows you to either stop the loop or skip forward if you meet a condition.
you can use them inside an if statement within your loops
*/

// in a for loop
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // exit the loop when i === 3
  }
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // skip the current iteration when i === 3
  }
  console.log(i);
}

// in a while loop
let i = 1;

while (i <= 5) {
  if (i === 3) {
    console.log('skipping 3');
    i++;
    continue;
  }

  if (i === 4) {
    console.log('breaking at 4');
    break;
  }

  console.log(i);
  i++;
}
