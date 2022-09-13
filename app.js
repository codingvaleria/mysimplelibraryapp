const prompt = require('prompt-sync')({ sigint: true });
const listOfBooks = [
    {
        Name: "Becoming Mitchelle Obama",
        Author: "ABCD",
        Copies: "3"
    },

    {
        Name: "The Subtle Of Not Giving a Fuck",
        Author: "EFGH",
        Copies: "5"
    },

    {
        Name: "Rich Dad, Poor Dad",
        Author: "IJKL",
        Copies: "7"
    },

    {
        Name: "The sex Lives of African Women",
        Author: "MNOP",
        Copies: "0"
    }
]

const menu = ["Show Books", "Add Books", "Lease Book", "Return Book", "Log out"];

let tries = "true"
const welcomeMessage = (`
> ------------ SOMA LIBRARY  ------------ <
Welcome to the Soma Library. Choose one to continue:
1. View Books 
2. Login as librarian
`);
console.log(welcomeMessage);

let choice = prompt(" Enter your Option:");

if (choice === "1") {
    console.log(`\n------List of Books----\n`)
    for (let elem in listOfBooks) {
        console.log(elem, listOfBooks[elem]);
    }
}
// else if (choice === "2") {
//     let input = prompt(" Enter your password: "); {

//         let password = "wxyz";
//         if (input === password) {
//             console.log("login successful!");

//             console.log(`> ------------ MENU ------------ <`)
//             for (let i = 0; i < menu.length; i++) {
//                 console.log(`${i + 1} ${menu[i]}`)
//             }
//         }
//         else {
//             console.log("log-in unsucessful please try again!")
//         }

//     }

//     console.log(welcomeMessage);

// }




