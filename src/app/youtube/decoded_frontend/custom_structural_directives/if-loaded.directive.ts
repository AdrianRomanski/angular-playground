import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export type Loaded<T> = { type: 'loaded'; data: T };
export type Loading = { type: 'loading' };
export type LoadingState<T> = Loaded<T> | Loading;

export interface Person {
  name: string;
}

@Directive({
  selector: '[ifLoaded]',
})
export class IfLoadedDirective<T> {
  @Input('ifLoaded') set state(state: LoadingState<T>) {
    this.loadingState = state;
    if (this.loadingState.type === 'loaded') {
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.tpl);
    }
  }

  @Input('ifLoadedOr')
  set placeholder(ref: TemplateRef<any> | null) {
    if (this.loadingState.type === 'loading') {
      this.viewContainerRef.clear();
      if (ref) {
        this.viewContainerRef.createEmbeddedView(ref);
      }
    }
  }
  loadingState!: LoadingState<T>;

  static ngTemplateGuard_ifLoaded<T>(
    dir: IfLoadedDirective<T>,
    expr: LoadingState<T>,
  ): expr is Loaded<T> {
    return true;
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private tpl: TemplateRef<any>,
  ) {}
}
