import { CommonModule } from '@angular/common';
import {
   ChangeDetectionStrategy,
   Component,
   Inject,
   inject,
} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { GridService, GridState, GridStore } from '../+state';
import { GRID_DIMENSION, Rotation } from '../shared';
import { FieldComponent } from '../field/field.component';
import { PlacingFormComponent } from '../placing-form/placing-form.component';
import { ReportComponent } from '../report/report.component';

@Component({
   selector: 'app-grid',
   imports: [
      CommonModule,
      FieldComponent,
      MatButtonModule,
      MatDialogModule,
      PlacingFormComponent,
   ],
   providers: [
      GridStore,
      GridService,
      { provide: GRID_DIMENSION, useValue: 5 },
   ],
   templateUrl: './grid.component.html',
   styleUrl: './grid.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
   readonly store = inject(GridStore);
   readonly dialog = inject(MatDialog);

   readonly columns: Array<number>;
   readonly rows: Array<number>;

   constructor(
      @Inject(GRID_DIMENSION)
      private readonly gridDimension: number
   ) {
      this.columns = [...Array(GRID_DIMENSION).keys()];
      this.rows = [...Array(GRID_DIMENSION).keys()].reverse();
   }

   left(): void {
      this.store.rotate(Rotation.left);
   }

   right(): void {
      this.store.rotate(Rotation.right);
   }

   move(): void {
      this.store.move();
   }

   place(state: GridState): void {
      this.store.place(state);
   }

   report(): void {
      this.dialog.open(ReportComponent, {
         data: {
            x: this.store.x(),
            y: this.store.y(),
            direction: this.store.direction(),
         },
      });
   }
}
