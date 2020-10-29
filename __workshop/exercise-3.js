// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  return new Promise ((resolve) => {

    setTimeout(() => {
      resolve(num * 2)
    }, 2000);
  })
  
  // 2. returns the double of the num
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  
  try {

let theSum = 0;

const result = await doublesLater(num);
theSum += result;
console.log(result);
const result2 = await doublesLater(result);
console.log(result2);
theSum += result2;
const result3 = await doublesLater(result2);
console.log(result3);
theSum += result3;
return theSum;

  } catch (err) {
    console.log(err);
  }
  


}


// 4. verification
handleSum(10).then((ans) => console.log(ans));
