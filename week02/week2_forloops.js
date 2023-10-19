for (let number = 1; number <= 5; number++) {
  console.log(`I baked ${number} cakes.`);
}
console.log('\n', '\n');

const fruits1 = ['apple', 'banana', 'cherry', 1];
//const fruits2 = { fruit: 'apple', fruit: 'banana' };
for (const fruit of fruits1) {
  console.log(fruit);
}
console.log('\n', '\n');

const message = 'Hello';
for (const char of message) {
  console.log(char);
}
console.log('\n', '\n');


const shows = ['Breaking Bad', 'Peaky Blinders', 'Snowpiercer'];
shows.forEach(function (show, index) {
  console.log(`Favourite show #${index}: ${show}`);
});

//array methods
