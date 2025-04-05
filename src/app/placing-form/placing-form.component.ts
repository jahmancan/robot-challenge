import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
   FormControl,
   FormGroup,
   FormsModule,
   ReactiveFormsModule,
   Validators,
} from '@angular/forms';
import { GridState } from '../+state';
import { Direction, GRID_DIMENSION } from '../shared';
import { UtilService } from '../grid/util.service';

interface GridForm {
   x: FormControl<number | null>;
   y: FormControl<number | null>;
   direction: FormControl<Direction | null>;
}

@Component({
   selector: 'app-placing-form',
   imports: [CommonModule, FormsModule, ReactiveFormsModule],
   templateUrl: './placing-form.component.html',
   styleUrl: './placing-form.component.scss',
})
export class PlacingFormComponent {
   readonly directions: any[];
   readonly form = new FormGroup<GridForm>({
      x: new FormControl(null, [
         Validators.required,
         Validators.min(0),
         Validators.max(GRID_DIMENSION - 1),
      ]),
      y: new FormControl(null, [
         Validators.required,
         Validators.min(0),
         Validators.max(GRID_DIMENSION - 1),
      ]),
      direction: new FormControl(null, [Validators.required]),
   });

   @Output()
   readonly onSubmit = new EventEmitter<GridState>();

   constructor() {
      this.directions = Object.keys(Direction).map((key: string) => ({
         value: key,
         name: key,
      }));
      console.log(this.directions);
   }

   submit() {
      if (!this.form.valid) {
         return;
      }

      const formValues = this.form.value;
      this.onSubmit.emit({
         x: UtilService.tryParse(formValues.x),
         y: UtilService.tryParse(formValues.y),
         direction: formValues.direction ?? null,
      });
   }
}
