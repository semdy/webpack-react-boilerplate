import asyncComponent from "../components/AsyncComponent";

export const Todo = asyncComponent(() => import("../containers/TodoList"));
export const Test = asyncComponent(() => import("../containers/Test"));
export const NotFound = asyncComponent(() => import("../containers/NotFound"));