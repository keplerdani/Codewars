//best practice
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}


function lovefunc2(flower1, flower2){
  let result = 0;
  result = result + (flower1 % 2);
  result = result + (flower2 % 2);
  if (result % 2) {
    return true;
  }
  return false;
}
