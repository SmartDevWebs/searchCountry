import { Component, Output ,EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'search';
constructor(){
}
ngOnInit(): void {
  // this.functEmitApp()
}

searchV1:string=''
// @Output() handleClick2 = new EventEmitter<string>()
  functRecChild(data:string){
    this.searchV1=data
  }
  // functEmitApp(){
  //   this.handleClick2.emit(this.searchV1)
  // }
}
