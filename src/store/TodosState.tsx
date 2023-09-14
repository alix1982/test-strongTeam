import { makeAutoObservable } from "mobx";
import { Todo } from "../type"
import { todosDefault } from "../todosDefault";

class Todos {
    todosSort = todosDefault; // массив деволтных задач
    heading = ''; // значение поля ввода названия задачи
    text = ''; // значение поля ввода текста задачи
    id = 0;
    toggler = false; // переключатель направления сортировки
    isChangeTodo = false; // переключатель формы добавления или редактирования задачи
    isGeo = false; // переключатель языка приложения по IP пользователя
    country = 'ENG'; // язык приложения

    constructor () {
      makeAutoObservable(this);
    }

    // сброс формы редактирования
    resetForm() {
      this.heading = '';
      this.text = '';
      this.isChangeTodo = false;
      this.id = 0;
    }

    // сабмит формы: добавление или редактирование выбранной задачи
    addTodo(e: React.FormEvent, todo: Todo) {
      e.preventDefault();
      if (this.isChangeTodo) {
        (this.todosSort.map(todo=> (todo.id === this.id) && 
          (todo.heading = this.heading, todo.text = this.text)
        ))
      } else {
        ((this.heading !== '' && this.text !== '') && this.todosSort.push(todo));
      }
      this.resetForm();
    };

    // отметка выполнения задачи
    completedTodo(id: number) {
      this.todosSort = this.todosSort.map((item:Todo) => item.id === id ? {...item, completed: !item.completed} : item);
    }

    // удаление задачи
    removeTodo(id: number) {
      this.todosSort = this.todosSort.filter((item) => item.id !== id);
    }

    // управление полем ввода названия задачи
    setHeading(heading: string) {
      this.heading = heading;
    };

    // управление полем ввода текста задачи
    setText(text: string) {
        this.text = text;
    };

    // внутренняя функция сортировки задач по выполнению
    _sortCompleted = (
      a: {completed: boolean},
      b: {completed: boolean},
    ) => {
        let x = false;
        let y = false;
        x = a.completed;
        y = b.completed;
        if (x < y) {return -1}
        if (x > y) {return 1}
        return 0;
    }

    // внутренняя функция сортировки задач по названию
    _sortHeading = (
      a: {heading: string},
      b: {heading: string},
    ) => {
        let x = '';
        let y = '';
        x = a.heading;
        y = b.heading;
        if (x < y) {return -1}
        if (x > y) {return 1}
        return 0;
    }

    // сортировка списка задач
    sortTodos() {
      this.todosSort.sort((a, b) => this._sortHeading(a, b))
      this.toggler ? 
        this.todosSort.sort((a, b) => this._sortCompleted(b, a)) :
        this.todosSort.sort((a, b) => this._sortCompleted(a, b));
        this.toggler = !this.toggler;
    }

    // переключение формы на редактирование задачи
    changeTodo(heading:string, text:string, id:number)  {
      this.isChangeTodo = true;
      this.heading = heading;
      this.text = text;
      this.id = id;
    }

    // переключение языка приложения
    setLanguage() {
      this.isGeo = !this.isGeo;
    }

    // определение страны пользователя по IP
    setLocation(country:string) {
      this.country = country;
    }
}

export default new Todos();
