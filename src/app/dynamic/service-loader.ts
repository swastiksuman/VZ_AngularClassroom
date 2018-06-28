import {
    ComponentFactoryResolver,
    Injectable,
    Inject
  } from '@angular/core';
// Angular 4 uses RelectiveInjector to instantiate object internally
// Angular 5 uses StaticInjector to instaitate Object internally

import { DynamicComponent } from './dynamic.component';
import { ViewContainerRef } from '@angular/core';

  @Injectable()
  export class Service {
      factoryResolver: ComponentFactoryResolver;
      rootViewContainer: ViewContainerRef;

    //Since ComponentFactoryResolver isn't @Injectable
    constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
      this.factoryResolver = factoryResolver
    }

    setRootViewContainerRef(viewContainerRef) {
      this.rootViewContainer = viewContainerRef
    }

    addDynamicComponent() {
      const factory = this.factoryResolver
                          .resolveComponentFactory(DynamicComponent)
      const component = factory
        .create(this.rootViewContainer.parentInjector);
        this.rootViewContainer.insert(component.hostView);
    }
  }