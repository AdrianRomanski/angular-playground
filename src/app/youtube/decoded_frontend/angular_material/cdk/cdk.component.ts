import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {DropDownSearchComponent} from "./overlay/drop-down-search/drop-down-search.component";
import {Overlay, OverlayPositionBuilder} from "@angular/cdk/overlay";
import {ComponentPortal} from "@angular/cdk/portal";
import {DialogComponent} from "./overlay/dialog/dialog.component";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-cdk',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, DropDownSearchComponent, MatButtonModule],
  templateUrl: './cdk.component.html',
  styleUrls: ['./cdk.component.scss']
})
export class CdkComponent {

  constructor(private overlay: Overlay, private positionBuilder: OverlayPositionBuilder) {
  }

  createDialog() {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.positionBuilder
        .global()
        .centerHorizontally()
        .centerVertically()
    })
    const dialogPortal = new ComponentPortal(DialogComponent);
    overlayRef.attach(dialogPortal);
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());
  }
}
