import asyncComponent from "../components/AsyncComponent";

export const Todo = asyncComponent(() => import(
  /* webpackChunkName: "TodoList" */
  "./TodoList/TodoList"
));
export const Test = asyncComponent(() => import(
  /* webpackChunkName: "Test" */
  "./Test/Test"
));
export const Animate = asyncComponent(() => import(
  /* webpackChunkName: "animate" */
  "./animate/animate"
));
export const NotFound = asyncComponent(() => import(
  /* webpackChunkName: "NotFound" */
  "./NotFound/NotFound"
));