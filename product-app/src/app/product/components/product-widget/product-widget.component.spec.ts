import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWidgetComponent } from './product-widget.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { Product } from '../../models/product';
import { PROP_METADATA } from '@angular/core/src/util/decorators';

fdescribe('ProductWidgetComponent', () => {
  let component: ProductWidgetComponent;
  let fixture: ComponentFixture<ProductWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports:[RouterModule.forRoot([]),
      SharedModule
    ],
      declarations: [ ProductWidgetComponent ],

      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWidgetComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display default product data',()=>{
    let product = new Product();
    product.id=100;
    product.name="google";
    product.price=15000;
    product.weight='200 g';
    product.year='2018';

    component.product=product;

    //apply data to template

    fixture.detectChanges();

    const element = fixture.nativeElement;

    expect(element.querySelectorAll('h2').length).toBe(1);
    expect(element.querySelectorAll('h2')[0].textContent).toBe("google");

    component.addToCart(product);
  });
});
