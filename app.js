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

newGame.addEventListener("click", () => {
   // showMessage1.classList.add('hide-box')
   let sound = new Audio("sound/sound1.wav");
      sound.play();
   showMessage1.style.display = "none"
   mein.style.display="block"
   for (const tic of btn) {
      tic.classList.remove("box1")
      tic.disabled = false
      tic.innerText=""
   }
})

btn.forEach((box) => {
   box.addEventListener("click", () => {
      let sound = new Audio("sound/sound1.wav");
      sound.play();
      // sound.src = "sound/sound1.wav"
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
   // console.log('hy')
   for (const winner of Arry) {
      // console.log(winner[0],winner[1],winner[2])
      let winner1 = btn[winner[0]].innerText;
      let winner2 = btn[winner[1]].innerText;
      let winner3 = btn[winner[2]].innerText;

      if(winner1 !== "" && winner2 !== "" && winner3 !== ""){
         if(winner1 == winner2 && winner2 == winner3){
            console.log("Winner" , winner3)
            mein.style.display = "none"
            // meinBox.classList.add('mein-box1')
            let sound = new Audio("sound/sound2.wav");
            sound.play()
            showMessage(winner3)
         }
      }
   }
};

function showMessage(game){
   // showMessage1.classList.remove('hide-box')
   showMessage1.style.paddingTop = "250px"
   showMessage1.style.display = "block"
   // showMessage1.style.marginTop = "100px"
   massages1.innerHTML=`<span>Congratulation</span>, Winner is ${game}`
}

resetGame.addEventListener('click', () => {
   for (const resetgame of btn) {
      if(resetgame.innerHTML!= ""){
         let sound = new Audio("sound/sound3.wav");
            sound.play();
      }
      resetgame.classList.remove('box1')
      resetgame.disabled =  false
      resetgame.innerText = ""
   }
})
