import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from "@angular/router";

@Component({
  selector: 'app-data-dialog',
  templateUrl: './data-dialog.component.html',
  styleUrls: ['./data-dialog.component.css']
})
export class DataDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DataDialogComponent>,
    private router: Router
  ) {
  }

  closeDialog(): void {
    this.dialogRef.close();
    this.router.navigate(['/signIn']);
  }
}
