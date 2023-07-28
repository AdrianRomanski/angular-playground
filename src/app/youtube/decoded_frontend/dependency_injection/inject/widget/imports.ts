import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const COMMON_WIDGET_DEPS = [MatCardModule, MatIconModule];

export const READONLY_WIDGET_DEPS = [...COMMON_WIDGET_DEPS]
export const INTERACTIVE_WIDGET_DEPS = [...COMMON_WIDGET_DEPS, MatButtonModule]