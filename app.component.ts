import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Normal String
  Name: string= 'Vinit Suryarao';
  // Normal Number
  Number: number = 1234;

  //Method Call
  GetName(): string{
    return 'Vinit Avinash Suryarao'
  };

  // Method With Parameter
  GetSquare(data:number): number {
    return data * data;
  };

  // Array
  City = ['Thane','Mumbai','Navi Mumbai'];

  // Object
  Exchange={
    ExNo : 1,
    ExCode:'NSE',
    ExName : 'National Stock Exchange',
    src:'https://images.unsplash.com/photo-1630523628239-576bc71b6f69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
    alt:'Profile Pic'
  };
}
