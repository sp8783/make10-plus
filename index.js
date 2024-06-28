#!/usr/bin/env node

import { UserInterface } from "./userInterface.js";

const userInterface = new UserInterface();

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
