const inputValue = document.querySelector(".input-value");
const submit = document.querySelector(".submit")
const start = document.querySelector(".start")
const form = document.querySelector(".form")
const result = document.querySelector(".result");
const allguesses = document.querySelector(".all-guesses")
// const random = Math.floor(Math.random()*101)
const ArraysG = [];


function a(){
    const random = Math.floor(Math.random()*101)
submit.addEventListener("click",(e) =>{
    e.preventDefault();
    const userInput = parseInt(inputValue.value);
      Game(userInput ,random);
})


function Game (userInput , random){
    // console.log(userInput);
    if(userInput===random){
        // console.log("Equal" );
        result.innerText = "Equal"
        submit.disabled = true;
        start.disabled = false;
    }else if (userInput>random){
        console.log("To Low");
        result.innerText = "To Low"
    }else{
        result.innerText="To High"
    }
  
    ArraysG.push(userInput);
    allguesses.innerText = 'Guess All : ' + ArraysG.join(',')
}
}

a();

