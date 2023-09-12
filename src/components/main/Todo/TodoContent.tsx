import { StyledTodoContent } from "./todoContentStyled";
import todosState from "../../../store/TodosState";

interface Props {
  completed: boolean;
  heading: string;
  text: string;
  id: number;
}

const TodoContent: React.FC<Props> = ({completed, heading, text, id}) => {
  return (
    <StyledTodoContent onClick={() => {todosState.changeTodo(heading, text, id)}}>
      <h3 className={completed ? 'todoContent__heading todoCompleted' : 'todoContent__heading'}>{heading}</h3>
      <p className={completed ? 'todoContent__text todoCompleted' : 'todoContent__text'}>{text}</p>
    </StyledTodoContent>
  )
}
export default TodoContent