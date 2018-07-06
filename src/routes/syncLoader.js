import syncComponent from "../components/SyncComponent";

export const Todo = syncComponent(require("./TodoList/TodoList"));
export const Test = syncComponent(require("./Test/Test"));
export const Animate = syncComponent(require("./animate/animate"));
export const NotFound = syncComponent(require("./NotFound/NotFound"));