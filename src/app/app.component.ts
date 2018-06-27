import { Component, ViewContainerRef, Inject } from '@angular/core';
import { Service } from './dynamic/service-loader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 5 SPA ';

constructor(service: Service, @Inject(ViewContainerRef) viewContainerRef){
  service.setRootViewContainerRef(viewContainerRef);
  service.addDynamicComponent();
}
}

