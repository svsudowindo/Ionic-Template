
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloaderService implements PreloadingStrategy {

  preload(route: Route, load): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
  }

}
