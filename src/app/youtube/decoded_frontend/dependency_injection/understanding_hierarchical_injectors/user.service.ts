import { Component } from '@angular/core';

// services are singletons in scope of injector
class UserService {
  sayHi() {
    console.log('hi!');
  }
}

class ComponentTest {
  constructor(public user: UserService) {}
}

/** Types of Injectors*/

/** Module Injectors */

/** Child Injector
 *  This injector is being created for every lazy loaded module
 */

/** Root Injector
 *  Services which were configured in non-lazy @ngModule
 *  and in @Injectable() annotations
 */

/** Platform Module
 *  Created when we call method platformBrowserDynamic()
 */

/** Null Injector
 *  it throws error if Angular tries to find service here
 */

class Injector {
  private _container = new Map();

  constructor(private _providers: any[] = []) {
    this._providers.forEach((service) =>
      this._container.set(service, new service()),
    );
  }

  get(service: any) {
    const serviceInstance = this._container.get(service);
    if (!serviceInstance) {
      throw Error('No provider found');
    }
    return serviceInstance;
  }
}

// Somewhere in application
const injector = new Injector([UserService]);

const component = new ComponentTest(injector.get([UserService]));

component.user.sayHi();

/** Element Injector
 Services which were configured in @Component
 and in @Directive() annotations
 */
@Component({
  selector: 'app-root-di',
  template: `<app-child-di></app-child-di>`,
  providers: [UserService],
  styleUrls: ['./app.component.scss'],
})
export class RootComponent {}

/** Child Element Injector
 This injector is a child injector for root component and parent
 injector for Grand Child Component
 */
@Component({
  selector: 'app-child-di',
  template: `<app-grand-child-di></app-grand-child-di>`,
  styleUrls: ['./app.component.scss'],
})
export class ChildComponent {}

/** Grand Child Element Injector
 This injector is a child injector for child-component
 */
@Component({
  selector: 'app-grand-child-di',
  template: ``,
  styleUrls: ['./app.component.scss'],
})
export class GrandChildComponent {
  constructor(private userService: UserService) {}
}
