import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product.model';
import { map } from 'rxjs/operators';
import { Category } from '../category.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http:HttpClient) { }
category:Category[];
  ngOnInit(): void {

    this.http.get<{[key:string]:Product}>("http://localhost:3000/api/categories")
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
           
    })).subscribe(category =>{
        this.category = category;
     });
  }

}
