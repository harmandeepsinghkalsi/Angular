import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductWidgetComponent } from './components/product-widget/product-widget.component';

import {Routes,RouterModule} from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { SharedModule } from '../shared/shared.module';
import { SaveAlertGuard } from './guards/save-alert.guard';
import { CanEditGuard } from './guards/can-edit.guard';

// Example of nested routing
const routes : Routes=[
  {
    //path:'products',
    path:'',
    component : ProductHomeComponent,

    children: [
     
      {
        path:'',
        component: ProductListComponent
      },
      {
        path:'create',
        component: ProductEditComponent,
        canDeactivate : [SaveAlertGuard]
      },
      {
        path:'edit/:id',
        component: ProductEditComponent,
        canActivate:[CanEditGuard],
        canDeactivate : [SaveAlertGuard]

      },
      {
        path:'search',
        component: ProductSearchComponent
      }
    ]
  }
  

]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    //SharedModule
  ],
  declarations: [ProductHomeComponent, 
    ProductListComponent, 
    ProductEditComponent, 
    ProductSearchComponent,
     ProductWidgetComponent],

     providers :[ProductService,CanEditGuard,SaveAlertGuard]
})
export class ProductModule { }
