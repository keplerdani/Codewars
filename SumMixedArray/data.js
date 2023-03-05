//best practice
function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }

function sumMix(x){
  let number = 0;
  for (let i = 0; i < x.length; i++) {
    number = number + Number(x[i]);
  }
  return number;
}
