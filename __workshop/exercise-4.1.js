const { json } = require("body-parser");
const request = require("request-promise");


// getDadJoke

const getDadJoke = async () => {
    const options = {
        uri: "https://icanhazdadjoke.com/",
        headers: {"Accept": "application/json", "User-Agent" : "Request-Promise"},
        json: true
    };

    try {
     const result = await request(options);
   return result.joke ;
    } 
    catch (err) {console.log(err)}

};

// 4.1
getDadJoke().then((data) => console.log(data));


module.exports = {getDadJoke} ;