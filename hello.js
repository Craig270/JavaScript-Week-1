class Deck {
    constructor() {
      this.sealedDeck = [
        ["Two", 2], //0
        ["Three", 3], //1
        ["Four", 4], //2
        ["Five", 5], //3
        ["Six", 6], //4
        ["Seven", 7], //5
        ["Eight", 8], //6
        ["Nine", 9], //7
        ["Ten", 10], //8
        ["Jack", 11], //9
        ["Queen", 12], //10
        ["King", 13], //11
        ["Ace", 14], //12
      ];
      this.playDeck = [];
      this.arrowShuffle = arrowShuffle = (array) => shuffle(array);
    }
  }
  //Player Class
  class Player {
    constructor(name) {
      this.name = name;
      this.hand = []; //eq1mpty array for players current held cards
      //properties of player
    }
  }
  
  class Menu {
    constructor() {
      //Menu Constructor
      this.player1Picked = " ";
      this.player2Picked = " ";
    }
  
    startApp() {
      let selection = this.showMainMenu();
      while (selection != 0) {
        switch (selection) {
          case "1":
            this.createPlayers();
            break;
          case "2":
            this.startWar();
            break;
          case "3":
            this.alertPlayers();
            break;
          default:
            selection = 0;
        }
        selection = this.showMainMenu();
      }
      alert(`Thank you for visiting this virtual War-Card Game simulator`);
    }
  
    showMainMenu() {
      return prompt(`
    ---Welcome to this Virtual War-Card Game Simulator---
      0) Exit
      1) Add Players for a new Game
      2) Start War-Card Game
      3) Alert Player1 and Player2 Names. 
      `);
    }
  
    alertPlayers() {
      if (this.player1Picked == " " && this.player2Picked == " ") {
        alert(`You must first add players names with menu option 1!`);
      } else
        alert(`
    Player1: ${this.player1Picked.name} 
    & 
    Player2: ${this.player2Picked.name} `);
    }
  
    createPlayers() {
      let player1 = prompt(`Enter the name for Player1: `);
      let player2 = prompt(`Enter the name for Player2: `);
      this.player1Picked = new Player(player1);
      this.player2Picked = new Player(player2);
      return this.startWar();
    }
    startWar() {
      alert(`The start war function has been called`);
    }
  }
  
  let startThis = new Menu();
  startThis.startApp();
  