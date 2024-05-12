console.log(' \nStarting the program...\n\n  |------------------------------------|\n  |-----------SECTION 3----------------|\n  |------------- LOOPS ----------------|\n  |____________________________________|\n\n');

/*
EXCERCISE 
console.log(`10 x 1 = 10`);
console.log(`10 x 2 = 20`);
console.log(`10 x 3 = 30`);
console.log(`10 x 4 = 40`);
console.log(`10 x 5 = 50`);
 */
export let base = 10;
let limit = 50;
let result = 0;


//MY RESPONSE
for (let i = 1; result < limit; i++) {
  result = base * i;
  console.log(`${base} x ${i} = ${result}`);
}


/*
FOR
for (let i = 1; i <= limit; i++) {
  console.log(`${base} x ${i} = ${base * i}`);
}
*/
/* 
//WHILE
let i = 1;
while (i <= limit) {
  console.log(`${base} x ${i} = ${base * i}`);
  i++;
}
 */

/* 
//DO WHILE
let i = 1;
do {
  console.log(`${base} x ${i} = ${base * i}`);
  i++;
} while (i <= limit);
 */



console.log(`\nEnd of program...\n`);