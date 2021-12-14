import dotenv from 'dotenv';
import moralis from 'moralis/node.js';

const {Moralis} = moralis;

dotenv.config();

const serverURL = process.env.SERVERURL
const appId = process.env.APPID

// console.log(serverURL)
// console.log(appId)

const server = {
    "a": serverURL,
    "b": appId
}

export {server}
