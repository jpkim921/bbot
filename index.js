import chalk from 'chalk'
import clear from 'clear'
import figlet from 'figlet'

// const server = require("./lib/node.js");
import {server} from "./lib/node.js";

clear()

console.log(chalk.yellow(figlet.textSync('BBOT', { horizontalLayout: 'full' })))
console.log(server);