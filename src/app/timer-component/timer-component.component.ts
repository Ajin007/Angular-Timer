import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timer-component',
  templateUrl: './timer-component.component.html',
  styleUrls: ['./timer-component.component.scss']
})


/*
OnDestroy is an Angular lifecycle hook interface that provides a lifecycle method ngOnDestroy() which is called just before the directive or component is destroyed.
Purpose of ngOnDestroy()

    Cleanup Actions: It's a good place to perform cleanup tasks like unsubscribing from observables, detaching event handlers, or freeing resources to prevent memory leaks.

    Unsubscribing Observables: Especially in cases where your component or directive subscribes to observables (like in the case of using RxJS), unsubscribing from those observables is important to avoid memory leaks when the component is destroyed. Not unsubscribing could lead to subscriptions lingering and potentially causing memory issues.
*/
export class TimerComponentComponent  {
   MILLISECONDS_PER_SECOND: number = 100;
 SECONDS_PER_MINUTE: number = 60;
 MINUTES_PER_HOUR: number = 60;

  title = 'stopclock';
  millisec:number=0;
  second:number=0;
  minutes:number=0;
  hour:number=0;
  interval:any;
  mincolor:boolean=false;
  hourcolor:boolean=false;
  timerPassed:boolean=false;
  timerRunning:boolean=false;
  status!: string;
  totalTiming!:string;

  

  

  startTimer(){
    if (!this.timerRunning) {
      this.timerRunning = true;
    this.interval= setInterval(()=>{
      this.millisec++;
      if(this.millisec>=100){
        this.second++;
        this.millisec=0;
      }
      if(this.second==60){
        this.minutes++;
        this.second=0;
        this.mincolor=true;
      }
      if(this.minutes==60){
        this.hour++;
        this.minutes=0;
        this.hourcolor=true;
      } 
    },10);  
    this.status="RUNNING";
  }}

  stopTimer():void{
    clearInterval(this.interval);
    this.timerRunning = false;
    this.status="STOP"; 
    this.timerPassed=true;
  }

  restartTimer(){
    this.millisec=0;
    this.second=0;
    this.minutes=0;
    this.hour=0;
    clearInterval(this.interval);
    this.timerRunning = false;
    this.status="RESTART";
  }
}


//   stopTimer() {
//       //clearing the interval stops the execution of code that was last set with the setInterval() method.
//       //It does not remove any intervals previously set.
// if(this.timeInterval){
//   clearInterval(this.timeInterval);
//   this.isRunning=false;
// }
  
//     }








// Creating an observable that emits numbers 1, 2, and 3 sequentially every second
const numbersObservable = new Observable<number>(subscriber => {
  let count = 1;
  const intervalId = setInterval(() => {
    subscriber.next(count);
    if (count === 3) {
      subscriber.complete(); // Complete the observable after emitting 3
      clearInterval(intervalId);
    } else {
      count++;
    }
  }, 1000);
});

// Subscribe to the observable






function startTimer() {
  throw new Error('Function not implemented.');
}

function resetTimer() {
  throw new Error('Function not implemented.');
}
// Unsubscribe to prevent memory leaks
//subscription.unsubscribe();
