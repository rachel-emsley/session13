// objects let us store properties

var user = {
    hometown: 'Colchester',
    hair: 'Auburn',
    likes: ['knitting', 'crochet', 'code'],
    birthday: { 
        month: 10,
        day: 17
    }
};

var userHometown = user.hometown;
var userHair = user['hair'];
console.log(userHometown, userHair);

// we can change the properties
user.hair = 'Red';
user['hometown'] = 'Leeds';

console.log(user.hair)
console.log(user.hometown);

// add new properties
user.married = true;
console.log(user['married']);

// and delete properties
delete user.birthday;
console.log(user);

// arrays can hold objects
var users = [
    {name: 'Jolene', age: 21},
    {name: 'Alexa', age: 34}
]

for (var i = 0; i < users.length; i++) {
    let user = users[i];
    console.log(`${user.name} is ${user.age}`);
}

// objects can be passed to functions
var jolene = {
    age: 21,
    hairColour: 'Auburn',
    likes: ['pizza', 'tacos'],
    birthday: {day: 12, month: 3, year: 1990}
}

function describe(user) {
    console.log(`You are ${user.age} years old, with ${user.hairColour} hair, and you were born in ${user.birthday.year}`);
}

describe(jolene);

// objects can also hold functions
var alexa = {
    age: 34,
    hairColour: 'black',
    talk: function() {
        console.log('I am listening');
    },
    eat: function(food) {
        console.log(`Yum, I love ${food}`);
    }
};

alexa.talk();
alexa.eat('pizza');