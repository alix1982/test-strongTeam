import { makeAutoObservable } from "mobx";
import { Todo } from "../type"
import { todosDefault } from "../todosDefault";

class Todos {
    todos = todosDefault; // массив задач
    todosSort = todosDefault; // массив отфильтрованных задач
    heading = ''; // значение поля ввода названия задачи
    text = ''; // значение поля ввода текста задачи
    id = 0;
    importantly = ''; // значение важности задачи

    togglerCompleted = false; // переключатель направления сортировки по выполненным задачам
    togglerHeading = false; // переключатель направления сортировки по названию
    togglerCreateDate = false; // переключатель направления сортировки по дате
    togglerImportantly = false; // переключатель направления сортировки по важности

    checkedImportantly = false; // значение радио кнопки "Важно"
    checkedReallyImportantly = false; // значение радио кнопки "Очень важно"

    searchValue = ''; // значение поля поиска 

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
      this.importantly = '';
      this.checkedImportantly = false;
      this.checkedReallyImportantly = false;
    }

    // сабмит формы: добавление или редактирование выбранной задачи
    addTodo(e: React.FormEvent, todo: Todo) {
      e.preventDefault();
      console.log(todo);
      if (this.isChangeTodo) {
        (this.todosSort.map(todo=> (todo.id === this.id) && 
          (todo.heading = this.heading, todo.text = this.text, todo.importantly = this.importantly)
        ));
      } else {
        if (this.heading !== '' && this.text !== '') {
          this.todos.push(todo);
          this.todosSort.push(todo);
        }
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

    // управление установкой важности задачи
    setImportantly(importantly: any) {
      if (importantly.target.value === "Очень важно") {
        if (this.checkedReallyImportantly) {
          this.checkedReallyImportantly = !this.checkedReallyImportantly;
          this.importantly = ' ';
        } else {
          this.checkedReallyImportantly = true;
          this.checkedImportantly = false;
          this.importantly = importantly.target.value;
        }
      } else {
        if (this.checkedImportantly) {
          this.checkedImportantly = !this.checkedImportantly;
          this.importantly = ' ';
        } else {
          this.checkedReallyImportantly = false;
          this.checkedImportantly = true;
          this.importantly = importantly.target.value;
        }
      }
    };

    // внутренняя функция сортировки задач
    _sort = (
      a: {heading: string, importantly: string, completed: boolean, createDate: number},
      b: {heading: string, importantly: string, completed: boolean, createDate: number},
      field: string
    ) => {
        let x = field === 'completed' ? false : (field === 'createDate' ? 0 : '');
        let y = field === 'completed' ? false : (field === 'createDate' ? 0 : '');
        switch(field) {
          case 'heading':
            x = a.heading;
            y = b.heading;
          break;
          case 'importantly':
            x = a.importantly;
            y = b.importantly;
          break;
          case 'completed':
            x = a.completed;
            y = b.completed;
          break;
          case 'createDate':
            x = a.createDate;
            y = b.createDate;
          break;
          default:
            x = '';
            y = '';
          break;
        }
        if (x < y) {return -1}
        if (x > y) {return 1}
        return 0;
    }

    // сортировка списка задач выполненных
    sortTodosСompleted() {
      this.todosSort.sort((a, b) => this._sort(a, b, 'heading'))
      this.togglerCompleted ? 
        this.todosSort.sort((a, b) => this._sort(b, a, 'completed')) :
        this.todosSort.sort((a, b) => this._sort(a, b, 'completed'));
      this.togglerCompleted = !this.togglerCompleted;
    }

    // сортировка списка задач по названию
    sortTodosName() {
      this.togglerHeading ? 
        this.todosSort.sort((a, b) => this._sort(b, a, 'heading')) :
        this.todosSort.sort((a, b) => this._sort(a, b, 'heading'));
      this.togglerHeading = !this.togglerHeading;
    }

    // сортировка списка задач по дате
    sortTodosDate() {
      this.togglerCreateDate ? 
        this.todosSort.sort((a, b) => this._sort(b, a, 'createDate')) :
        this.todosSort.sort((a, b) => this._sort(a, b, 'createDate'));
      this.togglerCreateDate = !this.togglerCreateDate;
    }

    // сортировка списка задач по важности
    sortTodosImportantly() {
      this.todosSort.sort((a, b) => this._sort(a, b, 'createDate'))
      this.togglerImportantly ? 
        this.todosSort.sort((a, b) => this._sort(a, b, 'importantly')) :
        this.todosSort.sort((a, b) => this._sort(b, a, 'importantly'));
      this.togglerImportantly = !this.togglerImportantly;
    }

    // переключение формы на редактирование задачи
    changeTodo(heading:string, text:string, id:number, importantly: string)  {
      this.isChangeTodo = true;
      this.heading = heading;
      this.text = text;
      this.id = id;
      this.importantly = importantly;
      switch(this.importantly) {
        case ' ':
          return (
            this.checkedImportantly = false, 
            this.checkedReallyImportantly = false
          )
        case 'Важно':
          return (
            this.checkedImportantly = true, 
            this.checkedReallyImportantly = false
          )
        case 'Очень важно':
          return (
            this.checkedImportantly = false, 
            this.checkedReallyImportantly = true
          )
        default:
          return (
            this.checkedImportantly = false, 
            this.checkedReallyImportantly = false
          )
      }
    }

    // фильтрация по названию задачи
    setSearchValue(e: any) {
      this.searchValue = e.target.value;
      this.searchValue === '' ?
        this.todosSort = this.todos : 
        this.todosSort = this.todos.filter((todo) => todo.heading.toLowerCase().includes(e.target.value.toLowerCase()));

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
