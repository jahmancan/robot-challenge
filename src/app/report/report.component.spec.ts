import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponent } from './report.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Direction } from '../shared';

describe('ReportComponent', () => {
   let component: ReportComponent;
   let fixture: ComponentFixture<ReportComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [ReportComponent],
         providers: [
            ReportComponent,
            {
               provide: MAT_DIALOG_DATA,
               useValue: { x: 0, y: 0, direction: Direction.east },
            },
         ],
      }).compileComponents();

      fixture = TestBed.createComponent(ReportComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
