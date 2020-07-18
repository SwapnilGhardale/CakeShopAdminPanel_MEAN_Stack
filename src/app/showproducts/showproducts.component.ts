import { Component, OnInit } from '@angular/core';
import{Product}from '../product.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {

  constructor(private http:HttpClient) { }
products:Product[];
  ngOnInit(): void {

    this.http.get<{[key:string]:Product}>(localStorage.getItem('url')+'/api/product')
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
  
       this.products = posts;
     })
  }

}
