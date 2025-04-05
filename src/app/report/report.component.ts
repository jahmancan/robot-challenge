import { Component, Input } from '@angular/core';
import { Direction } from '../shared';

@Component({
   selector: 'app-report',
   imports: [],
   templateUrl: './report.component.html',
   styleUrl: './report.component.scss',
})
export class ReportComponent {
   @Input()
   x: number | null = null;

   @Input()
   y: number | null = null;

   @Input()
   direction: Direction | null = null;
}
