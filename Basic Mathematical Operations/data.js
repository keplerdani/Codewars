//https://www.codewars.com/kata/57356c55867b9b7a60000bd7/
//mysolution
function basicOp(operation, value1, value2)
{
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2
  } else if (operation === "*") {
    return value1 * value2
  } else if (operation === "/") {
    return value1 / value2
  }
}

//console.log(basicOp("*", 1, 2));

//best practice:

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}