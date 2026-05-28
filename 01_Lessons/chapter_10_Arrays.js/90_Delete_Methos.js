//delete: used remove items from array but output will be shown <1 empty item> 
let fruits = ['mango', 'orange', 'apple'];
delete fruits[1];
console.log(delete fruits[1]);//true
console.log(fruits);//[ 'mango', <1 empty item>, 'apple' ]