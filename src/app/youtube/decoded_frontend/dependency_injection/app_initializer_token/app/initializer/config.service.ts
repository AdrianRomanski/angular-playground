import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface Endpoints {
  api: string;
  licenseCheck: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private endpoints = new BehaviorSubject<Endpoints | null>(null);

  readonly api$ = this.endpoints.asObservable().pipe(
    filter((endpoints) => !!endpoints),
    map((endpoints) => endpoints?.api),
  );

  constructor(private http: HttpClient) {}

  fetchEndpoints() {
    this.http
      .get(
        `http:://localhost:5001/decoded-license-server/us-central1/endpoints`,
      )
      .subscribe({
        // @ts-ignore
        next: (endpoints) => this.endpoints.next(endpoints),
      });
  }
}
