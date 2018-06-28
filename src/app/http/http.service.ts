import {Injectable} from '@angular/core';

//Angular 5.0/6.0 way
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

//Angular 6.0
//import {Observable} from 'rxjs';


const httpOptions = {
    headers: new HttpHeaders(
        { 'Content-Type': 'application/json' })
};

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {
    }

    // NOTE: all API calls in this file use simple endpoints served by
    // an Express app in the file server.js in  root folder. 
    base_url = 'http://localhost:3000';

    // Uses http.get() to load data from a single API endpoint
    getFoods(){
        return this.http.get(this.base_url + '/api/food')
        .pipe(map((data:any) => {
            console.log(data);
            return data;
        }));
    }


    // send a POST request to the API to create a new data object
    createFood(food) {
        let body = JSON.stringify(food);
        return this.http.post(this.base_url + '/api/food/', body, httpOptions);
    }

    // send a PUT request to the API to update a data object
    updateFood(food) {
        let body = JSON.stringify(food);
        return this.http.put(
            this.base_url + '/api/food/' + food.id, body, httpOptions);
    }

    // send a DELETE request to the API to delete a data object
    deleteFood(food) {
        return this.http.delete(this.base_url+'/api/food/' + food.id);
    }
}
