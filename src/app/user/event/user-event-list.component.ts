import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserEvent } from './user-event';

@Component({
    templateUrl: './user-event-list.component.html',
    styleUrls: ['./user-event-list.component.css']
})
export class UserEventlistComponent implements OnInit {


    event: UserEvent;
    events: UserEvent[];

    constructor(private eventService: EventService,
        private route: Router) { }

    ngOnInit(): void {


        this.event = new UserEvent();
        this.eventService.findAll().subscribe((data) => {
            this.events = data;
            console.log(data);
        });


    }

    addNewEvents() {

        console.log("success");
        // this.event.eventPicture=document.getElementById("myfile").files[0].path;
        this.eventService.addNewEvent(this.event).subscribe((data) => {
            console.log(this.event);
            console.log("success");
            if (data != null) {
                alert("Registration is Sucessful.");
                this.route.navigate["/user/events"];
                var element = document.getElementById("addEvent");
                element.classList.remove("show");
                document.querySelector('.modal-backdrop').classList.remove("fade","modal-backdrop");
                
               

            }
        })
    }

    eventR(eventName:string){
        
        this.eventService.getEventByName(eventName).subscribe((data) =>{
            this.event = data;
        })
    }

    url:any;

    readUrl(files) {
        this.event.eventPicture = files[0];
    }
    
    
}
