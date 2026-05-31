/*Simulate a simple text editor action history.
 When a user types a new word,
  it gets added to the front of the history array. 
  If the history grows larger than 3 items,
   the oldest action at the back should be removed.*/
let history = ['OPened App'];
// 2, 3, 4: Add new actions to the front
history.unshift("Hello");
history.unshift("World");
history.unshift("!");
console.log(history);//[ '!', 'World', 'Hello', 'OPened App' ]
history.pop();
//After remove last elements from array..
console.log(history);//[ '!', 'World', 'Hello' ]
history.shift();
//After remove first elements from array..
console.log(history);//[ 'World', 'Hello' ]