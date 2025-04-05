import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GridService, GridState, GridStore } from '../+state';
import { Rotation } from '../shared/enums';
import { FieldComponent } from '../field/field.component';
import { PlacingFormComponent } from '../placing-form/placing-form.component';
import { GRID_DIMENSION } from '../shared';

@Component({
   selector: 'app-grid',
   imports: [CommonModule, FieldComponent, PlacingFormComponent],
   providers: [GridStore, GridService],
   templateUrl: './grid.component.html',
   styleUrl: './grid.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
   readonly store = inject(GridStore);
   readonly columns = [...Array(GRID_DIMENSION).keys()];
   readonly rows = [...Array(GRID_DIMENSION).keys()].reverse();

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

   report(): void {}
}
