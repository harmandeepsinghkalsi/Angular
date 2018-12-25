import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import {Product} from './../models/product';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import {Brand} from './../models/brand';

console.log("ENV",environment);

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) {
}


//GET /api/products
getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(`${environment.apiEndPoint}/api/products`);
   }

  // GET /api/products/100
   getProduct(id:any): Observable<Product>{
    return this.http.get<Product>(`${environment.apiEndPoint}/api/products/${id}`);
 }

 //Cache: 1 . In memory JS[on refresh , removed]
 //2. Browser storage :sessionStorage , per tab based , works on refresh . 
 //Closing tab wil remove the sessionStorge
 //Option 3: Browser storage : localStorage:persistent, remains active on closing browser , shutdown systems


 storage:Storage = window.localStorage;

 getBrands(): Observable<Brand[]>{

  //check if cache is present,serve the cache
let brandsJson=this.storage.getItem("brands");

if(brandsJson){
  console.log("Serving brands from cache");
  //convert to observable

  let brands : Brand[]= <Brand[]> JSON.parse(brandsJson);
  Observable.of(brands);
  return ;
}

  console.log("Serving from cache");
  return this.http.get<Brand[]>(`${environment.apiEndPoint}/api/brands`)
  .map(brands => {
    console.log("caching brands");
    //caching:

    this.storage.setItem("brands",JSON.stringify(brands));
    return brands;
  })
}

  // update existing product
  // PUT /api/products/12345
  // {{product json data}}
  // response
  // updated product data 


  // to create new  product
  // POST /api/products
  // {{product json data without id}}
  // response
  // updated product data with id 

  saveProduct(product: Product):Observable<Product> {
    if (product.id) { // update
      return this.http
            .put<Product>(`${environment.apiEndPoint}/api/products/${product.id}`,
                          product);
    } else { //create
      return this.http
      .post<Product>(`${environment.apiEndPoint}/api/products`,
                    product);
    }
  }

}
