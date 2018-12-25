import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs/Subscription';
import{Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  // products: Product[] = [];
  // subscription: Subscription;

  products$:Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit() {

      this.products$=this.productService.getProducts();
      
    // this.subscription = this.productService.getProducts()
    //   .subscribe(products => {
    //     this.products = products;
    //     console.log("Got the product lists", products.length)
    //   });


  }

  ngOnDestroy() {
    console.log("List Destroyed");
    //this.subscription.unsubscribe();
  }
}




