import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AutEffects } from './aut.effects';

describe('AutEffects', () => {
  let actions$: Observable<any>;
  let effects: AutEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AutEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<AutEffects>(AutEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
