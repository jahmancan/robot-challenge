import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
   FormControl,
   FormGroup,
   FormsModule,
   ReactiveFormsModule,
   Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { GridState } from '../+state';
import { Direction, GRID_DIMENSION } from '../shared';

interface PlaceForm {
   x: FormControl<number | null>;
   y: FormControl<number | null>;
   direction: FormControl<Direction | null>;
}

@Component({
   selector: 'app-placing-form',
   imports: [
      CommonModule,
      FormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      ReactiveFormsModule,
   ],
   templateUrl: './placing-form.component.html',
   styleUrl: './placing-form.component.scss',
})
export class PlacingFormComponent {
   readonly directions: any[];
   readonly maxValue = GRID_DIMENSION - 1;
   readonly form = new FormGroup<PlaceForm>({
      x: new FormControl(null, [
         Validators.required,
         Validators.min(0),
         Validators.max(this.maxValue),
      ]),
      y: new FormControl(null, [
         Validators.required,
         Validators.min(0),
         Validators.max(this.maxValue),
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
   }

   submit() {
      if (!this.form.valid) {
         return;
      }

      const formValues = this.form.value;
      this.onSubmit.emit({
         x: formValues.x ?? null,
         y: formValues.y ?? null,
         direction: formValues.direction ?? null,
      });
   }
}
