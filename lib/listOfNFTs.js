import dotenv, { parse } from 'dotenv'
import Moralis from 'moralis/node.js'

dotenv.config()
const serverUrl = process.env.SERVER_URL
const appId = process.env.APP_ID

let NFTS = [];


// initialize Moralis SDK
Moralis.start({ serverUrl, appId })

async function getListOfNFtsForSale() {
  const listedNFTs = Moralis.Object.extend('ZapNFTs')
  const query = new Moralis.Query(listedNFTs)

  // only grabbing NFTS that's listed for sale: Direct purchase or auction
  query.equalTo('Listed', true)
  const results = await query.find()
    for (let i = 0; i < results.length; i++){
      results[i] = results[i].toJSON()
    }
  return results
}


async function sortBy(attribute) {
  console.log('sorting by: ', attribute);
}


// const test = (async () => {
//   NFTS = await getListOfNFtsForSale()
//   return NFTS
// })()

export {getListOfNFtsForSale, sortBy}