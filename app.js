let btn = document.querySelectorAll('.btn');
let meinBox = document.querySelector('.mein-box');
let mein = document.querySelector('main')
let showMessage1 = document.getElementById('Show-Disply');
let massages1 = document.querySelector('#massages');
let newGame = document.getElementById('new-game');
let resetGame = document.getElementById('reset-game');
let flag = true;

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

let sound1 = new Audio("sound/sound1.wav");
let sound2 = new Audio("sound/sound2.wav");
let sound3 = new Audio("sound/sound3.wav");

function playSound(audio) {
  audio.currentTime = 0; 
  audio.play();
}


newGame.addEventListener("click", () => {
   playSound(sound1);
   showMessage1.style.display = "none"
   mein.style.display="flex"
   for (const tic of btn) {
      tic.classList.remove("box1")
      tic.disabled = false
      tic.innerText=""
   }
})

btn.forEach((box) => {
   box.addEventListener("click", () => {
      playSound(sound1);
      console.log('Click')
      if (flag) {
         box.classList.add("box1")
         box.innerText = 'O'
         flag = false
      }
      else {
         box.innerText = 'X'
         flag = true
      }
      box.disabled = true
      winnerGame()
   })
})

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
         }
      }
   }
};

function showMessage(game){

   showMessage1.style.display = "flex"                                                                                                                                                                                                                              
   massages1.innerHTML=`<span> 🎉 Congratulation</span>,🎉 Winner is ${game}`
}

resetGame.addEventListener('click', () => {
   for (const resetgame of btn) {
      if(resetgame.innerHTML!= ""){
         playSound(sound3);
      }
      resetgame.classList.remove('box1')
      resetgame.disabled =  false
      resetgame.innerText = ""
   }
})
