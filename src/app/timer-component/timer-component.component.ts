import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-component',
  templateUrl: './timer-component.component.html',
  styleUrls: ['./timer-component.component.scss']
})
export class TimerComponentComponent {

  initialTimevalue:any;
  timer=0
startTimer():void{

  this.initialTimevalue=setInterval(()=>this.timer++,1000);
  
  }

  updateTimer():void{
    let hours=Math.floor(this.timer++/3600)
    let minutes=(this.timer++)*60
    let seconds=()=>{if(hours>1)this.timer=0:hours}
  }

  displayTimer():void{

  }
}
