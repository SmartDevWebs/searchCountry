import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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
      debounceTime(1000)
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
