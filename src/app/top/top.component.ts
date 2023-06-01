import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged,map } from 'rxjs/operators';

@Component({
  selector: 'top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {


  public keyup=new Subject<KeyboardEvent>()
  constructor() {
    this.keyup
    .pipe(
      map((event:any)=>event?.target?.value),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(()=>{this.functchildEmit()})
   }

  ngOnInit(): void {
  }
// 1-emit the search word
  searchV : string=''
@Output() clickHandler=new EventEmitter<string>();
functchildEmit(){
  this.clickHandler.emit(this.searchV)
}
}
