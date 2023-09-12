import { makeAutoObservable } from "mobx";
import { Todo } from "../type"
import { todosDefault } from "../todosDefault";

class Todos {
    // todosSort: Todo[];
    todosSort = todosDefault;
    heading = '';
    text = '';
    id = 0;
    toggler = false;
    isChangeTodo = false;

    constructor () {
      makeAutoObservable(this);
    }

    resetForm() {
      this.heading = '';
      this.text = '';
      this.isChangeTodo = false;
      this.id = 0;
    }

    addTodo(e: React.FormEvent, todo: Todo) {
      e.preventDefault();
      if (this.isChangeTodo) {
        (this.todosSort.map(todo=> (todo.id === this.id) && 
          // {...todo, heading: this.heading, text: this.text}
          (todo.heading = this.heading, todo.text = this.text)
        ))
      } else {
        ((this.heading !== '' && this.text !== '') && this.todosSort.push(todo));
      }
      this.resetForm();
    };

    completedTodo(id: number) {
      this.todosSort = this.todosSort.map((item:Todo) => item.id === id ? {...item, completed: !item.completed} : item);
    }

    removeTodo(id: number) {
      this.todosSort = this.todosSort.filter((item) => item.id !== id);
    }

    setHeading(heading: string) {
      this.heading = heading;
    };
    
    setText(text: string) {
        this.text = text;
    };

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

    sortTodos() {
      // console.log(to)
      // let toggler = false;
      this.todosSort.sort((a, b) => this._sortHeading(a, b))
      this.toggler ? 
        this.todosSort.sort((a, b) => this._sortCompleted(b, a)) :
        this.todosSort.sort((a, b) => this._sortCompleted(a, b));
        this.toggler = !this.toggler;
    }
    changeTodo(heading:string, text:string, id:number)  {
      console.log('ok');
      this.isChangeTodo = true;
      this.heading = heading;
      this.text = text;
      this.id = id;
    }
}

export default new Todos();
