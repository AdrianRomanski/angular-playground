import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Platform } from '@angular/cdk/platform';
import { map } from 'rxjs/operators';
import {DialogComponent} from "./youtube/decoded_frontend/angular_material/cdk/overlay/dialog/dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-cdk-lessons';
  isWideScreen$: Observable<boolean>;

  constructor(
    private overly: Overlay,
    private positionBuilder: OverlayPositionBuilder,
    public platform: Platform,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    if (this.breakpointObserver.isMatched('(max-width: 600px)')) {
      console.info('The screen width is less than 600px');
    }

    this.breakpointObserver.observe(['(max-width: 600px)']).subscribe(console.log)

    this.isWideScreen$ = this.breakpointObserver
      .observe([Breakpoints.HandsetLandscape])
      .pipe(map(({ matches }) => matches));
    this.isWideScreen$.subscribe(console.log);
  }

  createDialog() {
    const overlayRef = this.overly.create({
      hasBackdrop: true,
      positionStrategy: this.positionBuilder
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
    const dialogPortal = new ComponentPortal(DialogComponent);
    overlayRef.attach(dialogPortal);
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());
  }
}

