#!/usr/bin/env node

import { Game } from "./game.js";
import { UserInterface } from "./userInterface.js";

const game = new Game();
const userInterface = new UserInterface(game);

async function main() {
  console.log("Welcome to the game!");

  while (true) {
    const choice = await userInterface.showTitleScreen();
    if (choice === "play") {
      await userInterface.playGame();
    } else if (choice === "quit") {
      console.log("Thanks for playing!");
      break;
    }
  }
}

main();
