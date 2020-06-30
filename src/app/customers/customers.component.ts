import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {


  constructor(private http:HttpClient) { }
users:User[];
  ngOnInit(): void {

    this.http.get<{[key:string]:User}>("http://localhost:3000/api/users")
    .pipe(map(responseData => {
        const postArray =[];
        for (const key in responseData)
        {
          if(responseData.hasOwnProperty(key))
            {
                postArray.push({...responseData[key],id:key})
            }
        }

        return postArray;
           
    })).subscribe(users =>{
        this.users = users;
     });
  }

}
