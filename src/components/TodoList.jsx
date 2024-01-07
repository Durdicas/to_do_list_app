import { ListItem } from "./ListItem.jsx";
import "./TodoList.css";

export const TodoList = ({ todos, removeTodo }) => {
  return (
    <div className="todo-list">
      {/*<ListItem text="item 1" />
      <ListItem text="item 2" />
      <ListItem text="item 3" />*/}
      {todos.map((todo, idx) => {
        return (
          <ListItem text={todo} key={idx} removeTodo={() => removeTodo(idx)} />
        );
      })}
    </div>
  );
};