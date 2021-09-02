// Your code goes in this file.

//An array to hold the users inputs
let playerInfo = [

]

//taking the users input
let playerName = prompt('Create a username.')
//putting the input into the array
playerInfo.push(playerName)

alert('welcome to the game ' + playerInfo)

//Getting a random number
const randomNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
alert(randomNum)

