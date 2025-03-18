import { Project } from "./classes/Project";
import { Todo } from "./classes/Todo";

/*
     6
    /  \
   /    \
  4      5
 / \    /
1   2  3
*/

const leafOne = new Todo("1");
const leafTwo = new Todo("2");
const leafThree = new Todo("3");

const projectFourChildren = [leafOne, leafTwo];
const projectFour = new Project("4", projectFourChildren);

const projectFiveChildren = [leafThree];
const projectFive = new Project("5", projectFiveChildren);

const projectSixChildren = [projectFour, projectFive];
const projectSix = new Project("6", projectSixChildren);

const html = projectSix.getHtml();
console.log(html);
