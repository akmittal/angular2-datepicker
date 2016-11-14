import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'bootstrap/dist/css/bootstrap.css';
// App component
import { SampleDateAppModule } from "./sample-date-app/index";

platformBrowserDynamic().bootstrapModule(SampleDateAppModule);
