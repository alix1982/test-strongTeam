import { observer } from "mobx-react-lite";
import todosState from "../../store/TodosState";
import { StyledTodoSearch } from "./todoSearchStyled";

// interface Props {
//   completed: boolean;
//   id: number;
// }

const TodoSearch = observer(() => {
    // console.log(todosState.searchValue)
  return (
    <StyledTodoSearch>
        <label className="todoSearch__inputBlock">
            <p className="todoSearch__inputText">Поиск: </p>
            <input
                className="todoSearch__input"
                type="text"
                value={todosState.searchValue}
                onChange={(e)=> {todosState.setSearchValue(e)}}
            />
        </label>
    </StyledTodoSearch>
  )
})
export default TodoSearch