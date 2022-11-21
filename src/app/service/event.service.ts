import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventsUrl: string = "https://nettuts.hu/jms/feladat/events";

  constructor(
    private http: HttpClient) {
  }

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl);
  }

  get(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.eventsUrl}/${id}`);
  }

  update(event: Event): Observable<Event> {
    return this.http.patch<Event>(
      `${this.eventsUrl}/${event.id}`,
      event,
    );
  }

  create(event: Event): Observable<Event> {
    return this.http.post<Event>(
      `${this.eventsUrl}`,
      event,
    );
  }

  remove(event: Event): Observable<Event> {
    return this.http.delete<Event>(
      `${this.eventsUrl}/${event.id}`
    );
  }


  /*************************** */

  /* create(event:Event):Observable<Event>{
      return this.http.post<Event>(
        `${this.eventsUrl}/${event.id}`,
        event,
      );
   }/*
 
   /*create(event: Event): Promise<void> {
     return new Promise((resolve, reject) => {
       if (!event.id) {
         this.getAll().forEach(events => {
           let id = events[events.length - 1].id;
           this.http.post<Observable<any>>(this.eventsUrl, event)
             .forEach(res => {
               resolve();
             });
         });
       } else {
         this.http.post<Observable<any>>(this.eventsUrl, event)
           .forEach(res => {
             resolve();
           });
       }
     });
   }/*
 
   /*remove(event: any): Observable<any> {
     event = event.id ? event.id : event;
     return this.http.delete(`${this.eventsUrl}/${event}`);
   } */
}
