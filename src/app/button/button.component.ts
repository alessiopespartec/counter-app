import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  counter: number = 0;

  add() {
    this.counter++;
  }

  remove() {
    this.counter--;
  }
}
