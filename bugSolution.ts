function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number | string): number {
  if (typeof b === 'string') {
    const parsedB = parseFloat(b);
    if (isNaN(parsedB)) {
      return a; // Or throw an error: throw new Error('Invalid input');
    }
    return a + parsedB;
  } else {
    return a + b;
  }
}

let result1 = add(1, 2); // Correct: 3
let result2 = addSafe(1, "2"); // Handles string input: 3
let result3 = addSafe(1, "abc"); // Handles non-numeric string input: 1