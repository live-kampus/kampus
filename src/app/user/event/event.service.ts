import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserEvent } from './user-event';

@Injectable()
export class EventService{
    
    baseUrl = "http://localhost:8085/";

    constructor(private http:HttpClient){}

    // findBookBycatagory(category:string):Observable<Event[]>{
    //     return this.http.get<Event[]>(this.baseUrl +"books/"+category);
    // }

    
    findAll(): Observable<UserEvent[]> {
        return this.http.get<UserEvent[]>(this.baseUrl + "event");
    }

    addNewEvent(event:UserEvent):Observable<UserEvent>{
        return this.http.post<UserEvent>(this.baseUrl + "event",event);
    }

    getEventByName(eventName:string):Observable<UserEvent>{
        return this.http.get<UserEvent>(this.baseUrl + "event/" + eventName) 
    }

    

}   