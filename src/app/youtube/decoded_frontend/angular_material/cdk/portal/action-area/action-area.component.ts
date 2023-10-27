import { PortalBridgeService } from '../portal-bridge.service';
import {ComponentPortal, DomPortal, TemplatePortal} from '@angular/cdk/portal';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

export type Portal = TemplatePortal | ComponentPortal<any> | DomPortal;

@Component({
  selector: 'app-action-area',
  templateUrl: './action-area.component.html',
  styleUrls: ['./action-area.component.scss'],
})
export class ActionAreaComponent implements OnInit {
  portal$: Observable<Portal>;

  constructor(private portalBridge: PortalBridgeService) {}

  ngOnInit(): void {
    this.portal$ = this.portalBridge.portal$;
  }
}
