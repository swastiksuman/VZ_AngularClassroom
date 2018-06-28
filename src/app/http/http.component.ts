import {Component} from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-http',
  template:`
  <h3 style="text-align:center;background:orange">
      Angular 5 HttpClient Demo App by Murthy
  </h3>
 
  <h3>Foods (CRUD Demo)</h3>
  <ul>
    <li *ngFor="let food of foods">
    <input type="text" name="food-name" [(ngModel)]="food.name">
    <button (click)="updateFood(food)">Update</button> 
    <button (click)="deleteFood(food)">Delete</button></li>
  </ul>
 
  <p>Create a new food: 
  <input type="text" name="food_name" [(ngModel)]="food_name">
  <button (click)="createFood(food_name)">Save</button></p>  
  `
})
export class HttpComponent {

  public foods:any;
  public food_name:any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getFoods();
  }

  getFoods() {
    this._httpService.getFoods().subscribe(
      // the first argument is a function which runs on success/Resolve
      (data) => { this.foods = data},
      // the second argument is a function which runs on error/Reject
      (err) => console.error(err),
      // the third argument is a function which runs on completion/Notify
      () => console.log('done loading foods')
    );
  }
}
