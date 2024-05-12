console.log(' \nStarting the program...\n\n  |------------------------------------|\n  |-----------SECTION 3----------------|\n  |------------- LOOPS ----------------|\n  |____________________________________|\n\n');
// FOR
export let limite = 40;
for (let i = 1; i <= limite; i++) {

  if (i === 5) {
    continue; // Jump
  }

  console.log(`let i: ${i}`);


  if (i === 5) {
    break;
  }

}

console.log(`\nEnd of program...\n`);