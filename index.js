import chalk from 'chalk'
import clear from 'clear'
import figlet from 'figlet'

import {getListOfNFtsForSale} from './lib/listOfNFTs.js';
clear()

console.log(chalk.yellow(figlet.textSync('BBOT', { horizontalLayout: 'full' })))

async function main() {
    console.log(await getListOfNFtsForSale());
}


main()