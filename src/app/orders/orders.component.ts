import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../order.model';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private http:HttpClient) { }
orders:Order[];
  ngOnInit(): void {
    
    this.http.get<{[key:string]:Order}>(localStorage.getItem('url')+'/api/orders')
    .pipe(map(
      responseData => 
      {
        const postArray =[];
        for (const key in responseData)
        {
            if(responseData.hasOwnProperty(key))
            {
                postArray.push({...responseData[key],id:key})
            }
        }

        //console.log(postArray);
        return postArray;

           
    })).subscribe(posts =>{
     //   console.log("array"+posts);
  
       this.orders = posts;
       //console.log(this.orders[0]);
    });

  }

}
