import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './initializer/config.service';

@Component({
  selector: 'app-initializer',
  templateUrl: './app-initializer.component.html',
  styleUrls: ['./app-initializer.component.scss'],
})
export class AppInitializerComponent {
  title = 'angular-app-initializer-example';
}
