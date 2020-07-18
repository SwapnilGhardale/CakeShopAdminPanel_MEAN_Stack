import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

addCategoryClicked(form:NgForm){
 
  const category=form.value.category;
  const categorydata = { name :category};


  this.http.post(localStorage.getItem('url')+'/api/category/create',categorydata).pipe(map(response=>{return response}))
  .subscribe(responseData => {
    //console.log(responseData);
    if(responseData){
      alert("Category Added");
    }
      });
  form.reset();
}
}
