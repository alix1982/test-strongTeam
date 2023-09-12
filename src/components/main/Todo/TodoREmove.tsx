import todosState from "../../../store/TodosState";
import { StyledTodoRemove } from "./todoRemoveStyled";
import { ReactComponent as CloseIcon } from "../../img/icon-close.svg";

interface Props {
  id: number;
}

const TodoRemove: React.FC<Props> = ({id}) => {
  return (
    <StyledTodoRemove onClick={()=>todosState.removeTodo(id)}>
      <CloseIcon/>
    </StyledTodoRemove>
  )
}
export default TodoRemove
