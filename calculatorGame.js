// codeline for the Prompt-sync module
const prompt = require('prompt-sync')();

// The code of the Program start here
let player_points = 0
console.log(`Welcome to the MATHEMATICAL MENTAL GAME!`)
console.log(`Please enter "1" or "2" to select a MODE - 1.|Max Score| or 2.|Three-Out|:`)
let mode = Number(prompt(`Please select a mode: `))


while(mode !== 1 && mode !== 2 ){
    console.log(`IS ONE OR TWO!:`)
    mode = Number(prompt(`Please select a mode: `))
}


console.log(`Now choose the difficulty - 1.|Easy| or 2.|Medium| or 3.|Hard|`)
let difficulty = Number(prompt(`Please select a difficulty LEVEL: `))
while(difficulty !== 1 && difficulty !== 2 && difficulty !==3){
    console.log(`IS ONE, TWO, OR THREE!`)
    difficulty = Number(prompt(`Please select a difficulty LEVEL: `))
}


function level(){
    var operations = Math.floor(Math.random()*5) + 1
    var first = Math.floor(Math.random() * 11)
    var second = Math.floor(Math.random() * 11)
    var correctAnswer 
    var symbol
    if(difficulty === 1){
        operations = Math.floor(Math.random()*2) + 1
        first = Math.floor(Math.random() * 10)
        second = Math.floor(Math.random() * 10)
            if(operations === 1){
                symbol = "+"
                correctAnswer = first + second
            }
            else if (operations === 2){
                symbol = "-"
                correctAnswer = first - second
            }
    }
    
    else if(difficulty === 2){
        first = Math.floor(Math.random() * 100)
        second = Math.floor(Math.random() * 100)
            if(operations === 1){
                symbol = "+"
                correctAnswer = first + second
            }
            else if (operations === 2){
                symbol = "-"
                correctAnswer = first - second
            }
            else if (operations === 3){
                first = Math.floor(Math.random() * 10)
                second = Math.floor(Math.random() * 10)
                symbol = "x"
                correctAnswer = first * second
            }
            else if (operations === 4){
                first = Math.floor(Math.random() * 9)+1
                second = Math.floor(Math.random() * 9)+1
                symbol = "/"
                correctAnswer = first / second
            }
            else{
                first = Math.floor(Math.random() * 9)+1
                second = Math.floor(Math.random() * 9)+1
                symbol = "%"
                correctAnswer = first % second
            }
            }
    
    else if(difficulty === 3){
        first = Math.floor(Math.random() * 1000)
        second = Math.floor(Math.random() * 1000)
            if(operations === 1){
                symbol = "+"
                correctAnswer = first + second
            }
            else if (operations === 2){
                symbol = "-"
                correctAnswer = first - second
            }
            else if (operations === 3){
                first = Math.floor(Math.random() * 90)+10
                second = Math.floor(Math.random() * 10)
                symbol = "x"
                correctAnswer = first * second
            }
            else if (operations === 4){
                first = Math.floor(Math.random() * 99)+1
                second = Math.floor(Math.random() * 9)+1
                symbol = "/"
                correctAnswer = first / second
            }
            else{
                first = Math.floor(Math.random() * 99)+1
                second = Math.floor(Math.random() * 9)+1
                symbol = "%"
                correctAnswer = first % second
            }
            }
    else{
        console.log(`Please select a difficulty!`)
    }
    return { first, second, symbol, correctAnswer }
}

// The function for the questions on the max mode  Las funciones para las preguntas de max mode
function questions_max(){
    var questions = level()
    var answerText = prompt(`${questions.first} ${questions.symbol} ${questions.second} =  `)
    var ans = Number(answerText)
    
    if(answerText !== "" && ans === questions.correctAnswer){
        player_points = player_points + 10
        console.log(`CORRECT!! You have ${player_points} points`)
    }
    else if (isNaN(ans) || answerText === ""){
        console.log(`You skip this question!! You have ${player_points}`)
    }
    else {
        player_points = player_points - 5
        console.log(`BAD TO BAD!! You have ${player_points} points`)
    }


}

//Same function with max, but with othe mode....
function questions_threeout(){
    var questions = level()
    var answerText = prompt(`${questions.first} ${questions.symbol} ${questions.second} =  `)
    var ans = Number(answerText)
    if(answerText !== "" && ans === questions.correctAnswer){
        player_points = player_points + 10
        return "correct"
    }
    else if (isNaN(ans) || answerText === ""){
        return "skip"
    }
    else {
        return "wrong"
    }
}

// Max score
function max_score(){
    for(let i = 1; i<=20; i++){
        questions_max()
    }
    console.log(`This is your final Score ${player_points}`)
  
}

//Three out
function three_out(){
    var lifes = 3
    while(lifes > 0){
        var result = questions_threeout()
        if(result === "wrong"){
            lifes = lifes - 1
            console.log(`WRONG... You have ${lifes} lives! and ${player_points} points`)
        }
        else if(result === "skip"){
            lifes = lifes - 1
            console.log(`DID YOU NOW THE NUMBERS?... Your have ${lifes} lives!`)       
        }
        else{
            console.log(`GOOD! You still have ${lifes} lives! and ${player_points} points`)
        }
    }
    console.log(`GAME OVER!`)
    console.log(`Your final score is ${player_points}`)
    
}


// The slection of the game....
function selection(){
    if (mode === 1){
        console.log(`This is Max Score | Try to get the 200 points!!!!`)
        max_score()
    }
    else if (mode === 2){
        console.log(`This is Three-Out | Try don't get 3 questions wrong!!!!`)
        three_out()
    }
}
selection()