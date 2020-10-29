const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  
const options = {
  uri: " https://api.tronalddump.io/random/quote",
  headers: { "Accept": "application/json", "User-Agent": "Request-Promise"},
  json: true
}

try {
  const result = await request(options) ;
  return result.value ;

} catch (err) {console.log(err)}



};


getTronaldDumpQuote().then(data => console.log(data));


module.exports = { getTronaldDumpQuote };