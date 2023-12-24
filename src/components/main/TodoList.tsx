import { observer } from "mobx-react-lite";
import { StyledTodoList } from "./todoListStyled";
import todosState from "../../store/TodosState";
import {textGeo} from "../../textLocalization";
import TodoItem from "./Todo/TodoItem";
import TodoSearch from "./TodoSearch";
// import { ReactComponent as SortIcon } from "../img/sortIcon.svg";

const TodoList = observer(() => {
  // console.log(todosState.todosSort)
  return (
    <StyledTodoList>
      <div className="todoList__header">
        <h3 className="todoList__heading">{todosState.isGeo ? textGeo.listHeading.eng : textGeo.listHeading.ru}</h3>
        <div className="todoList__sorts">
          <p className="todoList__sortsHeading">
            {todosState.isGeo ? textGeo.sortHeading.eng : textGeo.sortHeading.ru}
          </p>
          <button className="todoList__sort" onClick={()=>todosState.sortTodosName()}>
            {todosState.isGeo ? textGeo.sortName.eng : textGeo.sortName.ru}
          </button>
          <button className="todoList__sort" onClick={()=>todosState.sortTodosDate()}>
            {todosState.isGeo ? textGeo.sortDate.eng : textGeo.sortDate.ru}
          </button>
          <button className="todoList__sort" onClick={()=>todosState.sortTodosImportantly()}>
            {todosState.isGeo ? textGeo.sortImportantly.eng : textGeo.sortImportantly.ru}
          </button>
          <button className="todoList__sort" onClick={()=>todosState.sortTodosСompleted()}>
            {todosState.isGeo ? textGeo.sortChecked.eng : textGeo.sortChecked.ru}
          </button>
        </div>
      </div>
      <TodoSearch />
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