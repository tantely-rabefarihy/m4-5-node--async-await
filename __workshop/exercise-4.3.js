const request = require('request-promise');


const getGeekJoke = async () => {
  const options = {
    url : "https://geek-jokes.sameerkumar.website/api?format=json",
    method: "GET",
    json:true
  }

try {
const result = await request(options);
return result.joke;
} catch (err) {console.log(err)};
};


getGeekJoke().then(joke =>{console.log(joke)});


module.exports = {getGeekJoke};