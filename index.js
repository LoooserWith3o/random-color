// Import Dependancies

import chalk from 'chalk';
import randomColor from 'randomcolor';

// Console Output if no specific input
const randomCol = '#' + Math.floor(Math.random() * 16777215).toString(16);
const block = `################################
################################
####                        ####
####         ${randomCol}        ####
####                        ####
####                        ####
################################
################################`;
// If input is provided
if (process.argv < 2) {
  console.log(chalk.hex(randomCol).bold(block));
} else {
  console.log(
    chalk.hex(
      randomColor({
        luminosity: process.argv[3],
        hue: process.argv[2],
      }),
    )(block),
  );
}
