import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';
import { Timer } from './timer.model';

@Component({
  selector: 'app-visual-timer',
  templateUrl: './visual-timer.component.html',
  styleUrls: ['./visual-timer.component.css']
})
export class VisualTimerComponent implements OnInit, OnDestroy {
  @Input() goal: String;
  @Input() time: number;
  @ViewChild('myCanvas') canvasRef: ElementRef;
  private running: boolean;

  canvas: HTMLCanvasElement;
  height: number;
  width: number;
  
  timer: Timer;

  constructor() {
  }

  ngOnInit() {
    this.canvas = this.canvasRef.nativeElement;
    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this.timer = new Timer(this.time);
    this.running = true;
    this.paint();
  }

  ngOnDestroy() {
    this.running = false;
  }

  private paint() {
    if (!this.running) {
      return;
    }else if (!this.timer.isValid()) {
      return;
    }
    // Paint current frame
   let ctx: CanvasRenderingContext2D = this.canvas.getContext('2d');
   
   // clear old frame
   ctx.fillStyle = '#FFFFFF';
   ctx.fillRect(0, 0, this.width, this.height);

   // set up style
   ctx.lineWidth = 20;
   ctx.strokeStyle = "RGBA(253, 36, 75, 1.00)";

   // draw
   ctx.beginPath();
   ctx.arc(this.width/2, this.height/2, 125,0, ((this.timer.endTime - this.timer.getCurrentTime())/this.timer.timeLength) * 2 * Math.PI);
   ctx.stroke();
   
   // timer text
   ctx.font = "20px Helvetica";
   ctx.fillStyle = "black";
   ctx.fillText(this.timer.remainingTimeString(), this.width/2, this.height/2);
   ctx.textAlign = "center";
   ctx.textBaseline = 'middle';

   // draw next frame
   requestAnimationFrame(() => this.paint());
  }

}