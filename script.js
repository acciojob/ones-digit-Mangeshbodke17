function onesDigit(n) {
  // Check if input is a number and a positive integer
  if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
    throw new Error("Input must be a positive integer");
  }

  // Return the ones digit
  return n % 10;
}

// Do not change the code below
const n = prompt("Enter Number:");
 alert(onesDigit(Number(n)));
