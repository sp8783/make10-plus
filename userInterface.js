import Enquirer from "enquirer";

export class UserInterface {
  constructor(game) {
    this.game = game;
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
    const difficulty = await this.selectDifficulty();
    const { problem, example_answer } =
      await this.game.pickRandomProblem(difficulty);

    console.log(`Solve the following equation to make 10: ${problem}`);
    console.log("(Type 'give up' to see the answer)");

    while (true) {
      const userInput = await this.getUserInput();

      if (userInput === "give up") {
        console.log(`The example answer is: ${example_answer}`);
        return;
      }

      if (await this.game.isCorrect(userInput)) {
        console.log("Correct!");
        return;
      } else {
        console.log("Incorrect! Try again.");
      }
    }
  }

  async selectDifficulty() {
    const response = await this.enquirer.prompt({
      type: "select",
      name: "difficulty",
      message: "Choose a difficulty level:",
      choices: ["Easy", "Normal", "Hard"],
    });

    return response.difficulty;
  }

  async getUserInput() {
    const response = await this.enquirer.prompt({
      type: "input",
      name: "input",
      message: "Enter your answer:",
    });

    return response.input;
  }
}
