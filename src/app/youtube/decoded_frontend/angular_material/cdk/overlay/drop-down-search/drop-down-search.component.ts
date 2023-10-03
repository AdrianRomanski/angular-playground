import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInput, MatInputModule} from "@angular/material/input";
import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  ConnectedPosition,
  OverlayModule, OverlayRef,
  ScrollStrategy, ScrollStrategyOptions
} from "@angular/cdk/overlay";
import {MAT_SELECT_SCROLL_STRATEGY_PROVIDER} from "@angular/material/select";
import {MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSlideToggleChange, MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatDividerModule} from "@angular/material/divider";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {delay, EMPTY, iif, mapTo, merge, Observable, startWith, switchMap} from "rxjs";
import {FocusMonitor} from "@angular/cdk/a11y";
import {filter, map} from "rxjs/operators";
import {ESCAPE} from "@angular/cdk/keycodes";

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-drop-down-search',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatDialogModule,
    OverlayModule
  ],
  providers: [
   {
    provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
    useValue: MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
   },
  ],
  templateUrl: './drop-down-search.component.html',
  styleUrls: ['./drop-down-search.component.scss']
})
export class DropDownSearchComponent implements OnInit{
  showPanel$: Observable<boolean>;

  states: State[] = [
    {
      name: 'Salzburg',
      population: '152.367K',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Salzburg_%28state%29.svg/1280px-Flag_of_Salzburg_%28state%29.svg.png',
    },
    {
      name: 'Kiev',
      population: '2.884M',
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_Kyiv_Kurovskyi.svg',
    },
    {
      name: 'Novopskov',
      population: '9,891K',
      flag:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_Novopskovskiy_Raion_in_Luhansk_Oblast.png/100px-Flag_of_Novopskovskiy_Raion_in_Luhansk_Oblast.png',
    },
  ];
  stateCtrl = new FormControl();
  filteredStates$: Observable<State[]>;
  isCaseSensitive: boolean = false;
  positions: ConnectedPosition[] = [
    {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top'
    },
    {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'bottom',
      panelClass: 'no-enough-space'
    },
  ]

  scrollStrategy: ScrollStrategy;

  @ViewChild(MatInput, { read: ElementRef, static: true })
  private inputEl: ElementRef;

  @ViewChild(CdkConnectedOverlay, { static: true })
  private connectedOverlay: CdkConnectedOverlay;

  private isPanelVisible$: Observable<boolean>;
  private isPanelHidden$: Observable<boolean>;
  private isOverlayDetached$: Observable<void>;

  constructor(private focusMonitor: FocusMonitor, private scrollStrategies: ScrollStrategyOptions) {}

  ngOnInit(): void {
    // @ts-ignore
    this.isPanelHidden$ = merge(
      this.connectedOverlay.detach,
      this.connectedOverlay.backdropClick.pipe(
      mapTo(false)
    ));

    this.isPanelVisible$ = this.focusMonitor.monitor(this.inputEl).pipe(
      filter((focused) => !!focused),
      mapTo(true)
    );
    this.showPanel$ = merge(this.isPanelHidden$, this.isPanelVisible$);

    this.filteredStates$ = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map((state) => (state ? this._filterStates(state) : this.states.slice()))
    );

    this.isOverlayDetached$ = this.isPanelVisible$.pipe(
      delay(0),
      switchMap(() => iif(
        () => !!this.connectedOverlay.overlayRef,
        this.connectedOverlay.overlayRef.detachments(),
        EMPTY
      ))
    )

    // this.scrollStrategy = this.scrollStrategies.block();
    // it does nothing
    // this.scrollStrategy = this.scrollStrategies.noop();
    // default
    //  this.scrollStrategy = this.scrollStrategies.reposition();
    // this.scrollStrategy = this.scrollStrategies.close({
    //   threshold: 100,
    // });

    this.scrollStrategy = new ConfirmScrollStrategy(this.inputEl);
  }

  setCaseSensitive({ checked }: MatSlideToggleChange) {
    this.isCaseSensitive = checked;
  }

  private _filterStates(value: string): State[] {
    const filterValue = this.caseCheck(value);

    return this.states.filter(
      (state) => this.caseCheck(state.name).indexOf(filterValue) === 0
    );
  }

  private caseCheck(value: string) {
    return this.isCaseSensitive ? value : value.toLowerCase();
  }
}

class ConfirmScrollStrategy implements ScrollStrategy {
  _overlay: OverlayRef;

  constructor(private inputRef: ElementRef) {
  }

  enable() {
    document.addEventListener('scroll', this.scrollListener);
  }

  attach(overlayRef: OverlayRef): void {
    this._overlay = overlayRef;
  }

  disable(): void {
    document.removeEventListener('scroll', this.scrollListener);
  }

  private scrollListener = () => {
    if(confirm('The overlay will be closed. Proceed?')) {
      this._overlay.detach();
      this.inputRef.nativeElement.blur();
      return;
    }
    this._overlay.updatePosition();
  }
}
