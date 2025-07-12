const args = process.argv.slice(2);
const input = args[0];

// Use parseInt and check if result is NaN
const number = parseInt(input, 10);

if (input !== undefined && !isNaN(number)) {
  console.log(`My number: ${number}`);
} else {
  console.log("Not a number");
}
