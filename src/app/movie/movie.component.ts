import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
@Input() name :string =''
@Input() capital :string =''
@Input() flag :string =''
@Input() population :number =0
  constructor() { }

  ngOnInit(): void {
  }
  @Input() searchV3:string='yalla search'

}
