const { getDadJoke } = require("./__workshop/exercise-4.1");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");
const { getGeekJoke } = require("./__workshop/exercise-4.3");

const handleJoke =  async (jokeType) => {
let greatJoke;

// if(jokeType === "dad") { greatJoke = await getDadJoke }
// else if(jokeType === "tronald") { greatJoke = await getTronaldDumpQuote }
// else if(jokeType === "geek") {greatJoke = await getGeekJoke}
// else {greatJoke = getGeekJoke};

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
// ******************

// const handleJoke = async (type) => {
//     // const typeOfJoke = ["tronald", "dad", "geek"];
//     let joke;
 
//      switch (type) {
//       case "tronald":
//         joke = await getTronaldDumpQuote();
//         break;
//       case "dad":
//         joke = await getDadJoke();
//         break;
//       case "geek":
//         joke = await getGeekJoke();
//         break;
//       default:
//         throw "Invalid type.";
//     }
//     return joke;
//   };




// handleJoke("dad").then(joke => {console.log("THIS IS THE OUTCOME: ",joke)});


module.exports = { handleJoke };