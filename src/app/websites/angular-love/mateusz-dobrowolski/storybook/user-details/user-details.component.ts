import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiUserDetails} from "../UiUserDetails";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
 @Input()
 user?: UiUserDetails;
 @Input()
 notificationCount = 0;
}
