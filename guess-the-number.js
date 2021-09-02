// Your code goes in this file.

//An array to hold the users inputs
let playerInfo = []

//taking the users input
let playerName = prompt('Create a username.')
//putting the input into the array
playerInfo.push(playerName)
//welcomes the user to the game using their username
alert('welcome to the game ' + playerInfo)


//Getting a random number
const randomNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
alert(randomNum)


//a counter so the program will stop when the user has guessed 3 times
let counter = 0

//while the number of the guesses the user inputs does not equal 3 the loop will continue
while (counter != 3) {
    //user guesses the number
    let guess = prompt('pick a number between 1 and 20 inclusive.')
    //if the users input is a number it will continue into the next if statement
    if (!isNaN(guess)) {
        //If the user inputs a number it and will dictate if it is correct or not
        if (guess == randomNum) {
            //the number the user guessed is correct
            alert('CORRECT')
        } else {

            counter += counter + 1
        }

        //Else if the guess the user input not a number
    } else {
        alert('Error: Bad input.')
    }
}