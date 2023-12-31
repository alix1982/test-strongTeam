import { StyledTodoItem } from "./todoItemStyled";
import TodoCompleted from "./TodoCompleted";
import TodoRemove from "./TodoREmove";
import TodoContent from "./TodoContent";


interface Props {
  id: number;
  completed: boolean;
  heading: string;
  text: string;
  importantly: string,
}

const TodoItem: React.FC<Props> = ({id, completed, heading, text, importantly }) => {

  return (
    <StyledTodoItem key={id} >
      <div className={`todoItem__point ${completed ? "todoItem__point_completed" : ""}`}>
         <div className="todoItem__buttons">
          <TodoCompleted completed={completed} id={id} />
          <TodoRemove id={id}/>
        </div>
        <TodoContent completed={completed} heading={heading} text={text} id={id} importantly={importantly} />
      </div>
    </StyledTodoItem>
  )
}
export default TodoItem
