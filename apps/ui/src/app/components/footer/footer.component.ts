import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CreateOptionsSheet } from './create-options-sheet';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private _bottomSheet: MatBottomSheet) { }



  showCreateOptions() {
    this._bottomSheet.open(CreateOptionsSheet);
  }

}

