export class Timer {
  startTime: number; 
  endTime: number;
  timeLength: number;

  getCurrentTime(): number {
    return new Date().getTime();
  }

  remainingTimeString(): string {
    var mins = Math.floor((this.endTime - this.getCurrentTime()) / 60000);
    var seconds = Math.floor((Math.abs(mins - ((this.endTime - this.getCurrentTime()) / 60000)) * 60));
    return "" + mins + "\' " + seconds + "\"" ;
  }

  isValid(): boolean {
    if (this.getCurrentTime() > this.endTime) {
      return false;  
    }
    return true;
  }

  constructor(mins: number) {
    this.timeLength = mins * 60000;
    this.startTime = this.getCurrentTime();
    this.endTime = this.startTime + this.timeLength;
  }
}