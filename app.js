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

const menu = ["Show Books", "Add Books", "View list of Books", "Log out"];
const welcomeMessage = (`
> ------------ SOMA LIBRARY  ------------ <
Welcome to the Soma Library. Choose one to continue:
1. View Books 
2. Login as librarian
`);

let showLibrary = true;
while (showLibrary) {
    console.log(welcomeMessage);
    let choice = prompt(" Choose your Option:");
    if (choice === "1") {
        console.log(`\n------List of Books----\n`)
        let i = 1;
        for (const book in listOfBooks) {
            console.log(i, listOfBooks[book]);
            i++;
        }
    }
    else if (choice === "2") {
        const password = "wxyz";
        for (let tries = 0; tries < 3; tries++) {
            let input = prompt(" Enter your password: ");
            if (input === password) {
                console.log("login successful!");
                console.log(`> ------------ MENU ------------ <`)
                for (let i = 0; i < menu.length; i++) {
                    console.log(`${i + 1} ${menu[i]}`)
                }
                let service = prompt(" What service would you like to do? ")
                if (service === "1") {
                    console.log(menu[0]);
                }
                else if (service === "2") {
                    console.log(menu[1]);
                }
                else if (service === "3") {

                    console.log(menu[2])
                }
                else if (service === "4") {
                    console.log(menu[3]);
                }
                break;
            }
            else {
                console.log("log-in unsucessfull please try again!")

            }
        }
    }
    else {
        console.log("Invalid option ");
    }
}
