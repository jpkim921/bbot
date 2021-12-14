import dotenv from 'dotenv';
import Moralis from 'moralis/node.js';

dotenv.config();

const serverUrl = process.env.SERVER_URL
const appId = process.env.APP_ID

Moralis.start({serverUrl, appId})

// const getListOfNFtsForSale = async() => {
//     const listedNFTs = Moralis.Object.extend("ZapNFTs");
//     const query = new Moralis.Query(listedNFTs);
//     query.equalTo("Listed", true);
//     const results = await query.find();
//     // console.log(results)
//     console.log("Successfully retrieved " + results.length + " collections.");
//     return results;
// }
// let nfts;
// getListOfNFtsForSale()
// .then(res => nfts = res)
// console.log(nfts)

