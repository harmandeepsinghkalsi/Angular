import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Brand } from '../../models/brand';

import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product();

  brand$: Observable<Brand[]>;

  @ViewChild("productForm")
  form:NgForm

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {

    //to read url/matrix parameters
    // product/edit/:id;source=list

    const id = this.route.snapshot.params['id'];

    const source = this.route.snapshot.params['source'];

    console.log("ID is ", id, "Source is ", source);

    
  

    if (id) {
      //edit 
      this.productService.getProduct(id)
        .subscribe(product => {
          this.product = product;
        })
    }

    this.brand$ = this.productService.getBrands();
  }

  goToList(){
    this.router.navigateByUrl('/products');
    //this.router.navigate(['/products','list']);   same as above
  }

  saveProduct() {


    if (this.form.invalid) {
      alert('Invalid form, cannot save');
      return;
    }

    if (this.form.pristine) {
      alert('no changes found');
      return;
    }
    this.productService
      .saveProduct(this.product)
      .subscribe(savedProduct => {
        console.log("product Saved",savedProduct);

//option 1 : go to list page:

//this.goToList();

//option 2: continue working on the same form , update the id given by server , then you put method
        this.form.reset(savedProduct);
        this.product=savedProduct;

      })
  }
}
