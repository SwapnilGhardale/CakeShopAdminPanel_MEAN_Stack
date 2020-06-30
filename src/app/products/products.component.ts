import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product.model';
import { map } from 'rxjs/operators';
import { Category } from '../category.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http:HttpClient) { }
category:Category[];
selectedFile:File;
  ngOnInit(): void {

    this.http.get<{[key:string]:Category}>("http://localhost:3000/api/categories")
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
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  addProductClicked(form:NgForm){

    var formData:any=new FormData();
    formData.append("name",form.value.name);
    formData.append("description",form.value.description);
    formData.append("price",form.value.price);
    formData.append("stock",form.value.stock);
    formData.append("veg",form.value.veg);
    formData.append("category",form.value.category);
    formData.append("productImage",this.selectedFile,form.value.productImagePath);//this.selectedFile.name in place of form.value.productImagePath
    
    this.http.post<any>("http://localhost:3000/api/product/create",formData)
    .subscribe(responseData=>{
    console.log(responseData);
    if(responseData.product!=null)
    alert("Successfully Added Product");
    });
    
  }

}
