import { Post } from "./classes/Post";
import { User } from "./classes/User";

const u = new User("Lewis");
u.save();

const p = new Post();
p.save();
