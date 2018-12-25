// bootstrap angular module into browser
import "rxjs/Rx";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app/app.module';

platformBrowserDynamic()
    .bootstrapModule(AppModule) 