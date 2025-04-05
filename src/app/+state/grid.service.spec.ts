import { TestBed } from '@angular/core/testing';
import { GridService } from './grid.service';
import { Direction, GRID_DIMENSION, Rotation } from '../shared';

describe('GridService', () => {
   let service: GridService;

   beforeEach(() => {
      TestBed.configureTestingModule({
         providers: [
            GridService,
            {
               provide: GRID_DIMENSION,
               useValue: 5,
            },
         ],
      });
      service = TestBed.inject(GridService);
   });

   it('should be created', () => {
      expect(service).toBeTruthy();
   });

   describe('canPlace method', () => {
      it('should be false if column is not set', () => {
         const result = service.canPlace({ x: null, y: 2 });
         expect(result).toBeFalse();
      });

      it('should be false if row is not set', () => {
         const result = service.canPlace({ x: 0, y: null });
         expect(result).toBeFalse();
      });

      it('should be false if column is smaller than 0', () => {
         const result = service.canPlace({ x: -1, y: 2 });
         expect(result).toBeFalse();
      });

      it('should be false if column is bigger than upper boundary', () => {
         const result = service.canPlace({ x: 6, y: 2 });
         expect(result).toBeFalse();
      });

      it('should be false if row is smaller than 0', () => {
         const result = service.canPlace({ x: 0, y: -1 });
         expect(result).toBeFalse();
      });

      it('should be false if row is bigger than upper boundary', () => {
         const result = service.canPlace({ x: 2, y: 6 });
         expect(result).toBeFalse();
      });
   });

   describe('move method', () => {
      it('should return undefined if given state properties are null', () => {
         const result = service.move({ x: null, y: null, direction: null });
         expect(result).toBeUndefined();
      });

      it('should return undefined if given row is 0 and direction is west', () => {
         const result = service.move({ x: 0, y: 2, direction: Direction.west });
         expect(result).toBeUndefined();
      });

      it('should return undefined if given row is boundary and direction is east', () => {
         const result = service.move({ x: 4, y: 2, direction: Direction.east });
         expect(result).toBeUndefined();
      });

      it('should return undefined if given column is boundary and direction is north', () => {
         const result = service.move({
            x: 3,
            y: 4,
            direction: Direction.north,
         });
         expect(result).toBeUndefined();
      });

      it('should return valid coordinates if given row is 0 and direction is east', () => {
         const result = service.move({ x: 0, y: 2, direction: Direction.east });
         expect(result).toEqual({ x: 1, y: 2 });
      });

      it('should return valid coordinates if robot is in origin and direction is north', () => {
         const result = service.move({
            x: 0,
            y: 0,
            direction: Direction.north,
         });
         expect(result).toEqual({ x: 0, y: 1 });
      });

      it('should return valid coordinates if robot is in origin and direction is south', () => {
         const result = service.move({
            x: 4,
            y: 4,
            direction: Direction.south,
         });
         expect(result).toEqual({ x: 4, y: 3 });
      });
   });

   describe('rotate method', () => {
      it('should be undefined if direction is not set', () => {
         const result = service.rotate(Rotation.left, null);
         expect(result).toBeUndefined();
      });

      it('should be north if rotation is left direction is east', () => {
         const result = service.rotate(Rotation.left, Direction.east);
         expect(result).toBe(Direction.north);
      });

      it('should be east if rotation is left direction is south', () => {
         const result = service.rotate(Rotation.left, Direction.south);
         expect(result).toBe(Direction.east);
      });

      it('should be north if rotation is right direction is west', () => {
         const result = service.rotate(Rotation.right, Direction.west);
         expect(result).toBe(Direction.north);
      });

      it('should be east if rotation is right direction is north', () => {
         const result = service.rotate(Rotation.right, Direction.north);
         expect(result).toBe(Direction.east);
      });
   });
});
