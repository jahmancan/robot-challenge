import { Component, Input } from '@angular/core';
import { Direction } from '../shared/enums';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-field',
   imports: [CommonModule],
   templateUrl: './field.component.html',
   styleUrl: './field.component.scss',
})
export class FieldComponent {
   readonly Direction = Direction;

   @Input()
   direction: Direction | null = null;

   @Input()
   isSelected: boolean = false;
}
