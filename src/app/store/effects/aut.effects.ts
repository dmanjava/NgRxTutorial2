import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as authActions from '../actions/auth.actions';
import {switchMap, map} from 'rxjs/operators';

@Injectable()
export class AutEffects {
  constructor(private actions$: Actions,
              private http: HttpClient) {}


  @Effect()
  loadAuth$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.LoadAuths),
    switchMap(() => {
      return this.http.get<string>('login')
        .pipe(
          map((userName) => {
            return new authActions.SetAuths(userName);
          })
        )
    })
  );
}
