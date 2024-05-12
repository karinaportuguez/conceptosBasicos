console.log(' \nStarting the program...\n\n  |------------------------------------|\n  |-----------SECTION 3----------------|\n  |------------ SWITCH  ---------------|\n  |____________________________________|\n\n');

export let weekDay: number = 3;

switch (weekDay) {
  case 1:
    console.log(`It's Monday`);
    break;
  case 2:
    console.log(`It's Tuesday`);
    break;
  case 3:
    console.log(`It's Wednesday`);
    break;
  case 4:
    console.log(`It's Thursday`);
    break;
  case 5:
    console.log(`It's Friday`);
    break;
  case 6:
    console.log(`It's Saturday`);
    break;
  case 7:
    console.log(`It's Sunday`);
    break;

  default:
    console.log(`Entrer a week number between 1 - 7\n\n`);
    throw new Error(`day of the week not allowed`);
}

console.log(`\nEnd of program...\n`);
