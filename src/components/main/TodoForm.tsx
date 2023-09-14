import { observer } from "mobx-react-lite";
import { StyledTodoForm } from "./todoFormStyled";
import todosState from "../../store/TodosState";
import {textGeo} from "../../textLocalization";

import { Todo } from "../../type"

const TodoForm = observer(() => {

  const handleSubmit = (e: React.FormEvent) => {
    
    let count = 0;
    todosState.todosSort.forEach((todo: Todo)=>{(todo.id > count) && (count = todo.id)}); // определение максимального занчения id в списке задач, для id новой задачи

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
        <legend className="todoForm__heading">
          {todosState.isChangeTodo ? 
            (todosState.isGeo ? textGeo.formHeading.fixEng : textGeo.formHeading.fixRu) : 
            (todosState.isGeo ? textGeo.formHeading.addEng : textGeo.formHeading.addRu)
          }
            {todosState.isGeo ? textGeo.formHeading.eng : textGeo.formHeading.ru}
        </legend>
        <input
          className="todoForm__inputName"
          value={todosState.heading}
          placeholder={todosState.isGeo ? textGeo.inputName.eng : textGeo.inputName.ru}
          minLength={1}
          maxLength={20}
          onChange={(e)=>{todosState.setHeading(e.target.value)}}
        />
        <input
          className="todoForm__inputText"
          value={todosState.text}
          placeholder={todosState.isGeo ? textGeo.inputText.eng : textGeo.inputText.ru}
          minLength={1}
          maxLength={50}
          onChange={(e)=>{todosState.setText(e.target.value)}}
        />
        <div className={`todoForm__buttons ${todosState.isChangeTodo ? "todoForm__buttons_end" : ""}`}>
          <button className="todoForm__buttonSubmit" onSubmit={handleSubmit}>
            {todosState.isGeo ? textGeo.buttonSubmit.eng : textGeo.buttonSubmit.ru}
          </button>
          {todosState.isChangeTodo && <button className="todoForm__buttonCancel" onSubmit={()=>{todosState.resetForm()}}>
            {todosState.isGeo ? textGeo.buttonCancel.eng : textGeo.buttonCancel.ru}
          </button>}
        </div>
      </fieldset>
    </StyledTodoForm>    
  )
})

export default TodoForm