const { getDadJoke } = require("./__workshop/exercise-4.1");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");
const { getGeekJoke } = require("./__workshop/exercise-4.3");

const handleJoke =  async (jokeType) => {
let greatJoke;

        switch (jokeType) {
            case "dad":
                greatJoke =  await getDadJoke() ;
                break;
            case "tronald":
                greatJoke =  await getTronaldDumpQuote() ;
                break;
            case "geek":
                greatJoke =  await getGeekJoke() ;
                break;
            default:
                greatJoke = "We are out of jokes for today!";
        }
       return greatJoke;

};


// handleJoke("dad").then(joke => {console.log("THIS IS THE OUTCOME: ",joke)});


module.exports = { handleJoke };