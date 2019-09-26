// Angular
import { Component, OnInit } from '@angular/core';

// ngrx
import { Store} from '@ngrx/store';

// app
import * as fromRoot from './store/reducers';
import * as authActions from './store/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NgRx-Tutorial2';

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.store.dispatch(new authActions.LoadAuths());
  }
}
