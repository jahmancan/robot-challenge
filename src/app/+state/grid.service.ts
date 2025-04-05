import { Inject, Injectable } from '@angular/core';
import { Direction, GRID_DIMENSION, Rotation } from '../shared';
import { Coordinates, GridState } from './models';

@Injectable()
export class GridService {
   constructor(
      @Inject(GRID_DIMENSION)
      private readonly gridDimension: number
   ) {}

   canPlace(coordinates: Coordinates): boolean {
      return (
         coordinates.x !== null &&
         coordinates.y !== null &&
         coordinates.x >= 0 &&
         coordinates.y >= 0 &&
         coordinates.x < this.gridDimension &&
         coordinates.y < this.gridDimension
      );
   }

   move(currentState: GridState): Coordinates | undefined {
      if (currentState.x === null || currentState.y === null) {
         return undefined;
      }
      if (!currentState.direction) {
         return undefined;
      }

      switch (currentState.direction) {
         case Direction.north:
            return currentState.y < this.gridDimension - 1
               ? { x: currentState.x, y: currentState.y + 1 }
               : undefined;
         case Direction.east:
            return currentState.x < this.gridDimension - 1
               ? { x: currentState.x + 1, y: currentState.y }
               : undefined;
         case Direction.south:
            return currentState.y > 0
               ? { x: currentState.x, y: currentState.y - 1 }
               : undefined;
         case Direction.west:
            return currentState.x > 0
               ? { x: currentState.x - 1, y: currentState.y }
               : undefined;
      }
   }

   rotate(
      rotation: Rotation,
      direction: Direction | null
   ): Direction | undefined {
      if (!direction) {
         return undefined;
      }
      const orderedDirections = [
         Direction.north,
         Direction.east,
         Direction.south,
         Direction.west,
      ];
      const currentPosition = orderedDirections.indexOf(direction);
      if (rotation > 0) {
         return currentPosition < orderedDirections.length - 1
            ? orderedDirections[currentPosition + rotation]
            : orderedDirections[0];
      }
      return currentPosition > 0
         ? orderedDirections[currentPosition + rotation]
         : orderedDirections[orderedDirections.length - 1];
   }
}
