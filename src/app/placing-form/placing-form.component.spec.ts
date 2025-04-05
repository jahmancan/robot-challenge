import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacingFormComponent } from './placing-form.component';
import { GRID_DIMENSION } from '../shared';

describe('PlacingFormComponent', () => {
   let component: PlacingFormComponent;
   let fixture: ComponentFixture<PlacingFormComponent>;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         imports: [PlacingFormComponent],
         providers: [
            PlacingFormComponent,
            {
               provide: GRID_DIMENSION,
               useValue: 5,
            },
         ],
      }).compileComponents();

      fixture = TestBed.createComponent(PlacingFormComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});
