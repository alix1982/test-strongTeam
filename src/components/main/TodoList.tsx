import { observer } from "mobx-react-lite";
import { StyledTodoList } from "./todoListStyled";
import todosState from "../../store/TodosState";
import TodoItem from "./Todo/TodoItem";
import { ReactComponent as SortIcon } from "../img/sortIcon.svg";

const TodoList = observer(() => {

  return (
    <StyledTodoList>
      <div className="todoList__header">
        <h3 className="todoList__heading">Мои задачи:</h3>
        <button className="todoList__sort" onClick={()=>todosState.sortTodos()}><SortIcon/></button>
      </div>
      <ul className="todoList__list">
        {todosState.todosSort.map((item) => 
          <TodoItem
            key={item.id}
            {...item}
          />
        )}
      </ul>
    </StyledTodoList>
  
  )
})
export default TodoList