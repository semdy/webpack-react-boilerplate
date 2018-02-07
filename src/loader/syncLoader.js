import syncComponent from "../components/SyncComponent";

export const Todo = syncComponent(require("../containers/TodoList"));
export const Test = syncComponent(require("../containers/Test"));
export const NotFound = syncComponent(require("../containers/NotFound"));