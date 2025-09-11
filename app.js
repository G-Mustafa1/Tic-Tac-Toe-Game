let btn = document.querySelectorAll('.btn');
let meinBox = document.querySelector('.mein-box');
let mein = document.querySelector('main')
let showMessage1 = document.getElementById('Show-Disply');
let massages1 = document.querySelector('#massages');
let newGame = document.getElementById('new-game');
let resetGame = document.getElementById('reset-game');
let flag = true;

// Winning combinations
let Arry = [
   [0, 1, 2],
   [0, 4, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [2, 4, 6],
   [3, 4, 5],
   [6, 7, 8],
];

// Sound effects
let sound1 = new Audio("sound/sound1.wav");
let sound2 = new Audio("sound/sound2.wav");
let sound3 = new Audio("sound/sound3.wav");

// Function to play sound
function playSound(audio) {
  audio.currentTime = 0; 
  audio.play();
}

// Event listener for new game button
newGame.addEventListener("click", () => {
   playSound(sound1);
   showMessage1.style.display = "none"
   mein.style.display="flex"
   for (const tic of btn) {
      tic.classList.remove("box1")
      tic.disabled = false
      tic.innerText=""
   }
   flag = true
})

function computerMove(){
   let emptyBoxes = [];
   btn.forEach((box, index) => {
      if (box.innerText === "") {
         emptyBoxes.push(index);
      }
   })
   // Make a random move for the computer
   if (emptyBoxes.length > 0) {
      let randomIndex = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];
      let box = btn[randomIndex];
      playSound(sound1);
      box.classList.add("box1");
      box.innerText = 'O';
      box.disabled = true;
      flag = true;

   }
}

// Event listeners for each button
btn.forEach((box) => {
   box.addEventListener("click", () => {
      if (flag) {
         playSound(sound1);
         box.innerText = 'X';
         box.disabled = true;
         flag = false;

         if (!winnerGame()){
            draw();
            setTimeout(() => {
               computerMove();
               winnerGame();
               draw();
            }, 500);
         }
      }
   });
});


// Function to check for a winner
function winnerGame() {
   for (const winner of Arry) {
      let winner1 = btn[winner[0]].innerText;
      let winner2 = btn[winner[1]].innerText;
      let winner3 = btn[winner[2]].innerText;

      if(winner1 !== "" && winner2 !== "" && winner3 !== ""){
         if(winner1 == winner2 && winner2 == winner3){
            console.log("Winner" , winner3)
            mein.style.display = "none"
            playSound(sound2);
            showMessage(winner3)

            btn.forEach((box) => box.disabled = true);

            return true
         }
      }
   }
};

// Function to check for a draw
function draw() {
   let allField = [...btn].every((box) => box.innerText !== "");
   if(allField){
      mein.style.display="none"
      playSound(sound3);
      drawMessage("Draw 🤝")
   }
}

// Function to display the draw message
function drawMessage(draw){
   showMessage1.style.display = "flex"                                                                                                                                                                                                                              
   massages1.innerHTML=`<span> ${draw}</span>`
}


// Function to display the winner message
function showMessage(game){
   showMessage1.style.display = "flex"                                                                                                                                                                                                                              
   massages1.innerHTML=`<span> 🎉 Congratulation</span>,🎉 Winner is ${game}`
}

// Event listener for reset game button
resetGame.addEventListener('click', () => {
   for (const resetgame of btn) {
      if(resetgame.innerHTML!= ""){
         playSound(sound3);
      }
      resetgame.classList.remove('box1')
      resetgame.disabled =  false
      resetgame.innerText = ""
   }
   flag = true;
})
