// arrays can hold values of the same type
let rainbowColours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let lotteryNumbers = [6, 11, 17, 34, 40, 43];
// or different types
let favouriteThings = ['Gin', 2019, true];

// we can check the length of the array
console.log(rainbowColours.length);

// we can access the item at a position with bracket notation
console.log(rainbowColours[0]);
console.log(rainbowColours[6]);

// we can change an item in an array
favouriteThings[2] = false;
console.log(favouriteThings)

// we can to arrays
favouriteThings.push('cats');
console.log(favouriteThings);

// iterating through arrays
for (let i = 0; i < rainbowColours.length; i++) {
    console.log(rainbowColours[i]);
}
