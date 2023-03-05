function pattern(n){
  let output = ['1'];
//   if (n === 1) {
//     return output;
//   }


  let element = ['1'];

  for (let i = 1; i < n + 1; i++) {
    element.push(element.fill('*').join('') + i);
    output.push(element.join(''));
  }


 return output;
}

console.log(pattern(2));


/*
input: interger
output: string
example:
pattern(10)

1
1*2
1**3
1***4
1****5
1*****6
1******7
1*******8
1********9
1*********10

create output

*/
