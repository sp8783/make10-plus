import Enquirer from "enquirer";

export class UserInterface {
  constructor() {
    this.enquirer = new Enquirer();
  }

  async showTitleScreen() {
    const response = await this.enquirer.prompt({
      type: "select",
      name: "choice",
      message: "What would you like to do?",
      choices: ["play", "quit"],
    });

    return response.choice;
  }

  async playGame() {
    console.log("Playing the game...");
  }
}
