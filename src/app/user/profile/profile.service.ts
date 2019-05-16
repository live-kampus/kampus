import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from './profile';



@Injectable()
export class ProfileService{


    baseUrl = "http://localhost:8087/profile/";

    constructor(private httpclient:HttpClient){}

    getprofile():Observable<UserProfile[]>{
        return this.httpclient.get<UserProfile[]>(this.baseUrl);
    }

    findProfileByEmail(): Observable<UserProfile> {      
        let emailId=JSON.parse(sessionStorage.getItem('user')); 
        return this.httpclient.get<UserProfile>(this.baseUrl + emailId.email);
    }

    
}