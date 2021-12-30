import chalk from 'chalk'
import clear from 'clear'
import figlet from 'figlet'

import {getListOfNFtsForSale, sortBy} from './lib/listOfNFTs.js';
clear()

console.log(chalk.yellow(figlet.textSync('BBOT', { horizontalLayout: 'full' })))

async function main() {
    const NFTs = await getListOfNFtsForSale();
    console.log(NFTs);
    await sortBy("Views");
}


main()