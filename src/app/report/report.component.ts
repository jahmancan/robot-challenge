import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
   MAT_DIALOG_DATA,
   MatDialogActions,
   MatDialogClose,
   MatDialogContent,
   MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { GridState } from '../+state';

@Component({
   selector: 'app-report',
   imports: [
      CommonModule,
      MatButtonModule,
      MatDialogTitle,
      MatDialogContent,
      MatDialogActions,
      MatDialogClose,
   ],
   templateUrl: './report.component.html',
   styleUrl: './report.component.scss',
})
export class ReportComponent {
   readonly state = inject<GridState>(MAT_DIALOG_DATA);
}
