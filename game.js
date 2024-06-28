import fs from "fs";
import { evaluate } from "mathjs";

const jsonFilePath = "./problems.json";

export class Game {
  async pickRandomProblem(difficulty) {
    const problems = await this.loadProblems();
    const randomProblem =
      problems[difficulty][
        Math.floor(Math.random() * problems[difficulty].length)
      ];
    return randomProblem;
  }

  async loadProblems() {
    try {
      const jsonData = fs.readFileSync(jsonFilePath, "utf8");
      const problems = JSON.parse(jsonData);
      return problems;
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  }

  async isCorrect(userInput) {
    try {
      return evaluate(userInput) === 10;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}
