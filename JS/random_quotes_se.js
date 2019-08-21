/* 
Step 1: Random quotes - done

- Quotes are generated in the browser's console

- The quotes are generated randomly one by one with each JavaScript call - done

- Each quote is a combination of at least 3 sentence fragments(it 's up to you to create these sentence fragments: beginning, middle, and end) - done

- The quotes should be relatively coherent(no exclamation points in the middle of a sentence, for example) - done

- The program can simply display each result in the JavaScript console. - done

------------------------------------------------------------------------------------

Step 2: More customized quotes

- Select the number of quotes generated (between 1 and 5) - done

- Choose between 2 types of quote generators (accordingly, you'll need two different sets of sentences) - done

- Once the quotes are generated, have the program generate new quotes or quit the program - done

*/


// Quotes database =>
var quotes = {
    default: {
        first: [
            "Start by doing what's necessary",
            "Believe you can",
            "It does not matter how slowly you go",
            "Always remember that",
            "A day without sunshine is like",
            "I believe that",
            "Always forgive your enemies",
            "Two things are infinite"
        ],
        middle: [
            "do what's possible",
            "as long as you do not stop",
            "these are the keys",
            "you are absolutely unique",
            "you know",
            "everything happens for a reason",
            "the universe and human stupidity",
            "and at times"
        ],
        last: [
            "and suddenly you are doing the impossible.",
            "and you're halfway there.",
            "that will unlock the door to personal excellence.",
            "just like everyone else.",
            "nothing annoys them so much.",
            "only light can do that.",
            "only love can do that.",
            "and I'm not sure about the universe."
        ]
    },

    love: {
        first: [
            "Him that I love",
            "In the end",
            "Love must be",
            "Love yourself",
            "Love is a battle",
            "Each time you love"
        ],
        middle: [
            "I wish to be free",
            "we discover that to love and let go",
            "as much a light",
            "then forget it",
            "love is a war",
            "love as deeply"
        ],
        last: [
            "even from me.",
            "can be the same thing.",
            "as it is a flame.",
            "then love the world.",
            "love is a growing up.",
            "as if it were forever."
        ]
    }

};

// Getting a random part =>
function getPart () {
    return this[Math.floor(Math.random(this.length) * this.length)];
};

// Assemble quotes =>
function quote () {
    return getPart.call(quotes.default.first) + ", " + getPart.call(quotes.default.middle) + ", " + getPart.call(quotes.default.last);
};

// Assemble love quotes =>
function loveQuote () {
    return getPart.call(quotes.love.first) + ", " + getPart.call(quotes.love.middle) + ", " + getPart.call(quotes.love.last);
};



// Start of program =>
console.log("Welcome to your quote generator!");

function startProgram() {
    console.log("Choose an option:");
    console.log("1, Generate a quote");
    console.log("2, Generate a love quote");
    console.log("3, Quit");
    var usersChoice = Number(prompt("Choose an option:\n 1, Generate a quote\n 2, Generate a love quote\n 3, Quit"));
    var num = 1;

    if (usersChoice === 1) {
        var userInput2 = Number(0);
        while (userInput2 < 1 || userInput2 > 5) {
            userInput2 = Number(prompt("How many quotes would you like to get? Choose a number between 1 and 5."));
        }
        console.log("Your quote(s):");

        // List quotes
        for (var i = 0; i < userInput2; i++) {
            console.log(num + ". " + quote());
            num++;
        }
        console.log("Thank you!");
        startProgram();

    } else if (usersChoice === 2) {
        var userInput3 = Number(0);
        while (userInput3 < 1 || userInput3 > 5) {
            var userInput3 = Number(prompt("How many love quotes would you like to get? Choose a number between 1 and 5."));
        }
        console.log("Your love quote(s):");

        // List love quotes
        for (var i = 0; i < userInput3; i++) {
            console.log(num + ". " + loveQuote());
            num++;
        }
        console.log("Thank you!");
        startProgram();

    } else if (usersChoice === 3 || usersChoice === 0) {
        console.log("Thank you for using the quote generator. Good bye!");
    } else {
        console.log("Your selection is not valid. Please, enter a valid number. Choose between 1, 2 or 3.");
        startProgram();
    }
};

startProgram();