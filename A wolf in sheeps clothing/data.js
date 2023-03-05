https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/solutions/javascript

function warnTheSheep(queue) {
// look for the position of wolf
// display warning to sheep on n +1

  if (queue[queue.length - 1] === 'wolf') { // if wolf is last display go away
    return 'Pls go away and stop eating my sheep';
  }

  const position = queue.indexOf('wolf');
  return `Oi! Sheep number ${  queue.length - position - 1  }! You are about to be eaten by a wolf!`;
}

console.log(warnTheSheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']));

/*
input: array with string of sheep and wolf
output: string("Oi! Sheep number 3! You are about to be eaten by a wolf!")
example: ["sheep", "sheep", "sheep", "wolf", "sheep"] => "Oi! Sheep number 1! You are about to be eaten by a wolf!"
*/
