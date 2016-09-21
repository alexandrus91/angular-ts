import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class RestService {
    constructor(private http: Http) { }
    getData() {
        console.log('ApiService::getHeroes() -> Hero[]');
        return this.http.get('http://localhost:5000/test.json').map(this.extractData).catch(this.handleError);   
    }
    private extractData(res: Response) {
        console.log('ApiService::extractData(res: Response) -> Hero[]')
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        console.log('ApiService::handleError(error: any) -> Hero[]')
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
