// break "stopper"
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      break; // exit the loop when i === 3
    }
    console.log(i);
  }

// continue "skipper"
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      continue; // skip the current iteration when i === 3
    }
    console.log(i);
  }

// both in a while loop
let i = 1;

while (i <= 5) {
  if (i === 3) {
    console.log("skipping 3");
    i++;
    continue; 
  }

  if (i === 4) {
    console.log("breaking at 4");
    break;
  }

  console.log(i);
  i++;
}