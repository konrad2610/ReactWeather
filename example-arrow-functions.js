// Challenge Area
function add (a, b) {
  return a + b;
}

//addStatement
var addStatement = (a, b) => {
  return a + b;
}

//addExpression
var addExpression = (a, b) => a + b;

console.log(add(1,2));
console.log(add(4,8));
console.log(addExpression(1,2));
console.log(addExpression(4,8));
console.log(addStatement(1,2));
console.log(addStatement(4,8));
