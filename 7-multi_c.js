const arg = process.argv[2];
const count = parseInt(arg);

if (isNaN(count)) {
  console.log("Missing number of occurrences");
} else if (count > 0) {
  for (let i = 0; i < count; i++) {
    console.log("C is fun");
  }
}
// For zero or negative numbers, do nothing (no output)

