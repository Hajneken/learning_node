
const dummyBoolean = true

// crate a function that returns a promise 
const promisyFunc = (someData) => {
    // can be alternatively async function
    return new Promise((resolve, reject) => {
        console.log('inputted someData :>> ', someData);
        if (dummyBoolean) {
            resolve("The function has resolved completely fine!");
        } else {
            reject("There has been an error!")
        }
    })
}

console.log(promisyFunc("Inputted Data"));

