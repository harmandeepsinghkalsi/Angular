//module is a logical collection of components,directives, pipes(filters) ,services(providers)


import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from "./shared/shared.module";
import{FormsModule} from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http'; 


// steps : 1 . configuration , url to component mapping
import {Routes, RouterModule} from '@angular/router';
import { AuthModule } from "./auth/auth.module";

//import { ProductModule } from "./product/product.module";

const routes : Routes =[

    {
        path :'',
        component : HomeComponent
    },{
        path :'cart',
        component : CartComponent 
    },
    {
        path : 'products',
        loadChildren:'app/product/product.module#ProductModule'
    },
    {
        path :'about',
        component : AboutComponent 
    },
    {
        path :'contact',
        component : ContactComponent 
    },
    {
        path :'**',
        component : NotFoundComponent
    }
]


@NgModule({

    imports: [
        //other module dependencies
        BrowserModule, 
        SharedModule,//CommonModule,CompilerModule refernced  within Browser Module -- in total 3 modules are imported .
        FormsModule,
       
       
        //apply routes to Angular

        RouterModule.forRoot(routes) , // forRoot is factory method

        //ProductModule  ,  // Todo : Lazy Loading

        HttpClientModule,
        AuthModule
    ],

    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent,
        CartComponent,
        NotFoundComponent
    ],

    bootstrap: [
        AppComponent
    ],

})

export class AppModule {

}