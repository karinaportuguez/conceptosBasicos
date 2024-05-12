console.log(' \nStarting the program...\n\n  |------------------------------------|\n  |-----------SECTION 3----------------|\n  |-------- IF ELSE  GREADE ---------|\n  |____________________________________|\n\n');

/* 
Create a program that shows the student's grade as A, B, C, D, F. 
where:
A>=90
B>=80
C>=70
D>=60
F< 60
 */

export let grade: number = 98;

if (grade >= 93) {
  console.log(`The student's grade is A \n`);
} else if (grade >= 90) {
  console.log(`The student's grade is A-\n`);
} else if (grade >= 87) {
  console.log(`The student's grade is B+\n `);
} else if (grade >= 83) {
  console.log(`The student's grade is B\n `);
} else if (grade >= 80) {
  console.log(`The student's grade is B-\n `);
} else if (grade >= 77) {
  console.log(`The student's grade is C+ \n`);
} else if (grade >= 73) {
  console.log(`The student's grade is C \n`);
} else if (grade >= 70) {
  console.log(`The student's grade is C- \n`);
} else if (grade >= 67) {
  console.log(`The student's grade is D+\n`);
} else if (grade >= 60) {
  console.log(`The student's grade is D\n`);
} else {
  console.log(`The student's grade is F \n`);
}

console.log(`\nEnd of program...\n`);

/* 
OTHER SOLUTION
let gradeLetter:string;

if (grade >= 93) {
  gradeLetter = 'A';
} else if (grade >= 90) {
    gradeLetter = 'A'-;
}...
  console.log(`The student's grade is ` gradeLetter);

 */