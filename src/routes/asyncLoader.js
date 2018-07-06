import asyncComponent from "../components/AsyncComponent";

export const Todo = asyncComponent(() => import("./TodoList/TodoList"));
export const Test = asyncComponent(() => import("./Test/Test"));
export const Animate = asyncComponent(() => import("./animate/animate"));
export const NotFound = asyncComponent(() => import("./NotFound/NotFound"));