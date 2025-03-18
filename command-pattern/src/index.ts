import { Invoker } from "./classes/Invoker";
import { Light } from "./classes/Light";
import { LightBrightCommand } from "./classes/LightBrightCommand";
import { LightDimCommand } from "./classes/LightDimCommand";
import { LightOffCommand } from "./classes/LightOffCommand";
import { LightOnCommand } from "./classes/LightOnCommand";

const lightOne = new Light(1);
const on = new LightOnCommand(lightOne);
const off = new LightOffCommand(lightOne);
const dim = new LightDimCommand(lightOne);
const bright = new LightBrightCommand(lightOne);

const remote = new Invoker();

remote.executeCommand(on);
remote.executeCommand(dim);
remote.executeCommand(bright);
remote.executeCommand(off);

remote.undoLastCommand();
remote.undoLastCommand();
remote.undoLastCommand();
remote.undoLastCommand();
remote.undoLastCommand();
