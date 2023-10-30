import { Component } from '@angular/core';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.css']
})
export class PractiseComponent {
   postArray: Array<string> = ['sreeja','lavanya','siddu','sasi','vamsi'];

   constructor() {
     for(let i=0;i<this.postArray.length;i++)
     {
       console.log(this.postArray[i]);
     }
   }

  additem() {
    this.postArray.push('mani');
  }

  deleteitem(post: string) {

    let index = this.postArray.indexOf(post);
    this.postArray.splice(index,1);
  }

   username:string="";
   firstname:string="";
   lastname:string="";
   user:Array<any>=[];

  formsubmit() {
this.user.push(
  {
    "username":this.username,
    "firstname":this.firstname,
    "lastname":this.lastname,
  }
);
    console.log(this.user);
  }

  deleteFormData(index: number) {
    this.user.splice(index,1);
  }
}
