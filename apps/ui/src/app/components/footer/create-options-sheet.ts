import { Component } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { MatDialog } from "@angular/material/dialog";
import { config } from "rxjs";
import { CreatepostComponent } from '../create/createpost/createpost.component';
import { CreatesubredditComponent } from '../create/createsubreddit/createsubreddit.component';

@Component({
  selector: 'create-options-sheet',
  templateUrl: './create-options-sheet.html',
  styles: [`
  .close-toolbar{ justify-content: center }
  .create-toolbar{ justify-content: space-around }
  `]
})
export class CreateOptionsSheet {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<CreateOptionsSheet>,
    public dialog: MatDialog
  ) { }

  close() {
    this._bottomSheetRef.dismiss();
  }

  createPost() {
    const dialogRef = this.dialog.open(CreatepostComponent, { width: '100vw', height: '100vh', maxWidth: '100vw' });
    this._bottomSheetRef.dismiss();
  }

  createSubreddit() {
    const dialogRef = this.dialog.open(CreatesubredditComponent, { width: '100vw', height: '100vh', maxWidth: '100vw' });
    this._bottomSheetRef.dismiss();
  }
}
