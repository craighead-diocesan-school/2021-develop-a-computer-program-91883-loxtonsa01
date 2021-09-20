function play() {
    getName()
    playGame()
}

function getName() {
    //taking the users input
    let playerName = prompt('Create a username.')

    //welcomes the user to the game using their username
    alert('welcome to the game ' + playerName)
}


function playGame() {
    let rerun = 'yes'

    while (rerun == 'yes') {
        //Getting a random number
        const randomNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
        alert(randomNum) //////testing//////

        //a counter so the program will stop when the user has guessed 3 times
        let counter = 0
        const maxTries = 3

        //while the number of the guesses the user inputs does not equal 3 the loop will continue
        while (counter <= maxTries) {

            //user guesses the number
            let guess = prompt('pick a number between 1 and 20 inclusive.')
            //if the users input is a number it will continue into the next if statement
            if (!isNaN(guess)) {
                //If the users inputs a number it and will dictate if it is correct or not
                if (guess == randomNum) {
                    //the number the user guessed is correct
                    alert('CORRECT')

                    //adding maxtries to the counter, inturn finishing the game
                    counter += maxTries + 1

                } else {
                    //the counter goes up by one at every wrong answer
                    counter += counter + 1
                }

                //Else if the guess the user input not a number
            } else {
                alert('Error: Bad input.')
            }

            //asking the user if they want to play again
            rerun = prompt('Do you want to play again?')
        }

    }
}


