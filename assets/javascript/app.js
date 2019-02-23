// One question at a time. So question space will need to be replaced each time, for each question, and for both Correct and Incorrect results, and then for final results.
// How to store the questions? Array seems to be the way, but that's a LOT of information to put into an array. Plus we're not being asked to randomize the questions. But I might want to just do that anyway for the challenge.
// Reserve variables for: 
    // Correct Answers
    // Incorrect Answers








function findAvg (inArray) {
    let total = 0;
 // takes an array, plugs it into the function.
 // add to find the total of all array elements, make sure it's an integer.
    for (let i = 0; i < inArray.length; i++) {
        // total = total + inArray[i];
        total += inArray[i];
    }
    return total / inArray.length;
 // divide by array.length.
};

findAvg(console.log([1, 4, 7]));
findAvg(console.log([10, 5]));
findAvg(console.log([1.5, 3, 2.5, 1]))

// This wasn't completely working. Need to figure out why.
// Proably a ParseInt situation, since I was receiving NaN.
// parameter not an array, another variable.