const fs = require("fs");

// const parm1 = process.argv[2];
// const parm2 = process.argv[3];

const choice = process.argv[2];
console.log(choice);

switch (choice) {
    case "concert":
        getConcert();
        break;
    case "movie":
        getMovie();
        console.log("get movie");
        break;
    case "music":
        getMusic();
        console.log("get music")
        break;
    case "song":
        getSong();
        console.log("get song")
        break;
    default:
        console.log("INVALID INPUT")
        break;
}


function total() {
    fs.writeFile("random.txt", "utf8", function (err, data) {
        console.log(data);
        // data is  now he string of all the numbers from the random.txt document
        // split make make each numer  a string 
        let result = data.split(", ").map(parseFloat).reduce(function (previous, current) {
            //map takees one format into anoher string to number orrr numb to string etc. 

            // --> parseFloattells program to turn it to a number
            // reduce take one item value at a time  
            return previous + current;
            // keep a running total and add the next number + the next number that was reduced
        }, 0);   // 0 is the starting point 
        //        --------------------OR------------------
        //    let array = data.split(",");
        //    let total = 0;
        //    for (let i = 0; i < array.length; i++) {
        //        let nextarray = +array[i];
        //        tatoal += nextarray;
        //    }
        console.log(result.toFixed(2));
        // converts number to ltwo decimal places

    });

}

function getConcert() {
    const resultData = process.argv[3];
    fs.appendFile("random.txt", `,${resultData}`, function (err) {

        if (err) {
            console.log(err);
        }
        console.log(`deposite successful $${resultData}`);
    });


}

    const resultData = process.argv[3];
    fs.appendFile("random.txt", `,-${resultData}`, function (err) {

        if (err) {
            console.log(err);
        }
        console.log(`Withdraw successful $${resultData}`);
    });

function getMovie() {}
function getMusic() {}

function getSong() {}