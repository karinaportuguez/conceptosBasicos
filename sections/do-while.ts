console.log(' \nStarting the program...\n\n  |------------------------------------|\n  |-----------SECTION 3----------------|\n  |------------- LOOPS ----------------|\n  |____________________________________|\n\n');

//FOR

for (let variable = 1; variable <= 10; variable++) {
  console.log(variable);
}
/* 
//WHILE
let gasTank: number = 50;

while (gasTank > 0) {
  console.log(`Remaining gasoline ${gasTank}`);
  gasTank--;
}

console.log(`\nFinished fuell\n`);



console.log(`\nEnd of program...\n`);

 */

//DO WHILE
//Always runs 1 time
export let gasTank: number = 0;

do {
  console.log(`Remaining gasoline ${gasTank}`);
  gasTank--;
} while (gasTank > 0)

console.log(`\nFinished fuell\n`);

console.log(`\nEnd of program...\n`);