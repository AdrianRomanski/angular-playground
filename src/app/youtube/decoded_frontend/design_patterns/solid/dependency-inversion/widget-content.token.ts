import {InjectionToken} from "@angular/core";
import {Reloadable} from "../interface-segregation-prinicple/widget-content";

export const RELOADABLE_CONTENT = new InjectionToken<Reloadable>('reloadable-content');
