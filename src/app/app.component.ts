import {Component, OnDestroy, OnInit} from '@angular/core';
import './summary/customer/customer.component';
import {PopoutService} from './services/popout.service';
import {POPOUT_MODAL_DATA, POPOUT_MODALS, PopoutData, PopoutModalName} from './services/popout.tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() { }
}
