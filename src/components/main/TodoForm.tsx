import { observer } from "mobx-react-lite";
import { StyledTodoForm } from "./todoFormStyled";
import todosState from "../../store/TodosState";
import { Todo } from "../../type"

const TodoForm = observer(() => {

  const handleSubmit = (e: React.FormEvent) => {
    
    let count = 0;
    todosState.todosSort.forEach((todo: Todo)=>{(todo.id > count) && (count = todo.id)});

    todosState.addTodo(e, {
      id: count+1,
      heading: String(todosState.heading),
      text: String(todosState.text),
      completed: false,
    })
  }

  return (
    <StyledTodoForm onSubmit={handleSubmit}>
      <fieldset className={`todoForm__inputs ${todosState.isChangeTodo ? "todoForm__inputs_add" : ""}`}>
        <legend className="todoForm__heading">{todosState.isChangeTodo ? "Изменить" : "Добавить"} задачу:</legend>
        <input
          className="todoForm__inputName"
          value={todosState.heading}
          placeholder="Название"
          minLength={1}
          maxLength={20}
          onChange={(e)=>{todosState.setHeading(e.target.value)}}
        />
        <input
          className="todoForm__inputText"
          value={todosState.text}
          placeholder="Описание"
          minLength={1}
          maxLength={50}
          onChange={(e)=>{todosState.setText(e.target.value)}}
        />
        <div className={`todoForm__buttons ${todosState.isChangeTodo ? "todoForm__buttons_end" : ""}`}>
          <button className="todoForm__buttonSubmit" onSubmit={handleSubmit}> Сохранить </button>
          {todosState.isChangeTodo && <button className="todoForm__buttonCancel" onSubmit={()=>{todosState.resetForm()}}> Отменить </button>}
        </div>
      </fieldset>
    </StyledTodoForm>    
  )
})

export default TodoForm