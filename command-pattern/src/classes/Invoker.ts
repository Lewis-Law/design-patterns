import { ICommand } from "../interfaces/ICommand";

export class Invoker {
  private commandHistory: ICommand[] = [];

  executeCommand(command: ICommand): void {
    command.execute();
    this.commandHistory.push(command);
  }

  undoLastCommand(): void {
    const command = this.commandHistory.pop();
    if (command) {
      command.unexecute();
    } else {
      console.log("No commands to undo");
    }
  }
}
