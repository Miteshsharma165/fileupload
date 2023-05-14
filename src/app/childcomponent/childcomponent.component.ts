import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, Output } from '@angular/core';
import { Subject, delay, interval } from 'rxjs';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnDestroy {
   @Output()
   subjectEmmiter=new Subject<any>();

   private usersSubscription$=this.http.get("https://jsonplaceholder.typicode.com/users");

   constructor(private http:HttpClient){}
  ngOnDestroy(): void {
    
  }


   startSubject(){
      this.usersSubscription$.subscribe();
   }

}
