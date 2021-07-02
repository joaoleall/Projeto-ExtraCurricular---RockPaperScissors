const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";

        //assim quando acaba uma partida, a animacao acaba e pode recomecar do 0
      });
    });
    //Computer options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(
          Math.random() * 3
        ); /*Numero aleatorio entre 0 e 3, e o metodo math.floor faz com que o numero seja inteiro, exemplo:2.00000000123213, ficava 2 */
        const computerChoice = computerOptions[computerNumber];
        //here is where we call compare hands
        setTimeout(() => {
          compareHands(this.textContent, computerChoice);
          //Update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //estas duas linhas a seguir fazem com que a animação aconteca, mas so uma vez
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };
  const compareHands = (playerChoice, computerChoice) => {
    //update text
    const winner = document.querySelector(".winner");
    //checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      checkScore();
      return;
    }
    //check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        checkScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        checkScore();
        return;
      }
    }
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        checkScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        checkScore();
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        checkScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        checkScore();
        return;
      }
    }
  };
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };
  const checkScore = () => {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

    if (pScore == 1) {
      winner.textContent = "Player Wins the Game!";
      introScreen.classList.add("fadeIn");
      match.classList.add("FadeOut");
    } else if (cScore == 1) {
      winner.textContent = "Computer Wins the Game!";
      introScreen.classList.add("fadeIn");
      match.classList.add("FadeOut");
    }
  };
  //const restartGame = () => {
  //const playButton = document.querySelector(".intro button");
  //const introScreen = document.querySelector(".intro");
  //const match = document.querySelector(".match");

  //playButton.addEventListener("click", () => {
  //if (pScore == 10) {
  //winner.textContent = "Player Wins the Game!";
  //introScreen.classList.add("fadeIn");
  //match.classList.add("fadeOut");
  //} else if (cScore == 10) {
  //winner.textContent = "Computer Wins the Game!";
  //introScreen.classList.add("fadeIn");
  //match.classList.add("fadeOut");
  // }
  //});

  //Its call all the inner function

  startGame();
  playMatch();
};
//start the game function

game();
