import { StyledTodoContent } from "./todoContentStyled";
import todosState from "../../../store/TodosState";

interface Props {
  completed: boolean;
  heading: string;
  text: string;
  id: number;
  importantly: string
}

const TodoContent: React.FC<Props> = ({completed, heading, text, id, importantly}) => {
  return (
    <StyledTodoContent onClick={() => {todosState.changeTodo(heading, text, id, importantly)}}>
      <div>
        <h3 className={completed ? 'todoContent__heading todoCompleted' : 'todoContent__heading'}>{heading}</h3>
        <p className={completed ? 'todoContent__text todoCompleted' : 'todoContent__text'}>{text}</p>
      </div>
      <p className={importantly === "Очень важно" ? 'todoContent__importantly red' : 'todoContent__importantly'}>{importantly}</p>
    </StyledTodoContent>
  )
}
export default TodoContent