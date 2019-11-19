import { Component } from '@angular/core';

import { LabelConstant } from './label.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = LabelConstant.ABORT;
}
