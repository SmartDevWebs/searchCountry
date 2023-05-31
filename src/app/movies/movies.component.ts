import { Component, Input, OnInit } from '@angular/core';
import { countryInfo } from '../countryInfo';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
@Input() searchV:string=''
  constructor(public apicaller:HttpClient) { }
myCountry:countryInfo[]=[]

  ngOnInit(): void {
    this.getHttpRest()
  }

getHttpRest(){
this
.apicaller
.get("https://restcountries.com/v3.1/all")
.subscribe((json:any)=>{
  for (let i = 0; i < json.length; i++) {
    let c = new countryInfo()
    c.name=json[i].name.common
    c.capital=json[i].capital
    c.flag=json[i].flags.png
    c.population=json[i].population
    this.myCountry.push(c)
  }

})
}
}
