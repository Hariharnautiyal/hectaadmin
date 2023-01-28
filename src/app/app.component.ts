

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hecta';
  constructor(public http:HttpClient){

  }
get(){
this.http.get('./api/user').subscribe(res=>{
  console.log(res);
},err=>{
  console.log(err);
});
}
post(){
const data={
hello:'nou'
};
  this.http.post('./api/user',data).subscribe(res=>{
    console.log(res);
  },err=>{
    console.log(err);
  });
  }
}
