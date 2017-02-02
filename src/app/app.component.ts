import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  setupComplete: Boolean;
  goal: String;
  time: number;

  constructor() {
    this.setupComplete = false;
  }

  startClicked(g: HTMLInputElement, t: HTMLInputElement) {
    this.extractInput(g, t);
    this.setupComplete = true;
  }

  extractInput(g: HTMLInputElement, t: HTMLInputElement) {
    this.goal = g.value;
    this.time = parseFloat(t.value);
    console.log(this.goal + " " + this.time);
  }

  cancel() {
    this.setupComplete = false;
  }
}
