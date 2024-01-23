import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos: string[] = ['Comprare il cibo per il cane', "Buttare l'immondizia"];
  newTodo: string = '';
  selectedItems: number[] = [];

  addToList() {
    if (this.newTodo) {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    } else {
      throw new Error('Item cannot be empty!');
    }
  }

  deleteItem(i: number) {
    this.todos.splice(i, 1);
  }

  selectItem(index: number) {
    if (this.selectedItems.includes(index)) {
      for (let i = 0; i < this.selectedItems.length; i++) {
        if (this.selectedItems[i] == index) {
          this.selectedItems.splice(i, 1);
        }
      }
    } else {
      this.selectedItems.push(index);
    }
    console.log(this.selectedItems);
  }
}
