import { StyledMain } from './mainStyled';
import TodoForm from './TodoForm';
import TodoList from "./TodoList";

const Main = () => {

  return (
    <StyledMain>
      <TodoForm />
      <TodoList />
    </StyledMain>
  )
}
export default Main