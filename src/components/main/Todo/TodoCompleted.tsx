import todosState from "../../../store/TodosState";
import { StyledTodoComleted } from "./todoCompletedStyled";

interface Props {
  completed: boolean;
  id: number;
}

const TodoCompleted: React.FC<Props> = ({completed, id}) => {
  return (
    <StyledTodoComleted type="checkbox" checked={completed} onChange={()=>todosState.completedTodo(id)}/>
  )
}
export default TodoCompleted