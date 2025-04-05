import { Injectable } from '@angular/core';
import { Direction, GRID_DIMENSION, Rotation } from '../shared';
import { Coordinates, GridState } from './models';

@Injectable()
export class GridService {
   canPlace(x: number | null, y: number | null): boolean {
      return (
         !!x &&
         !!y &&
         x > 0 &&
         y > 0 &&
         x < GRID_DIMENSION &&
         y < GRID_DIMENSION
      );
   }

   move(state: GridState): Coordinates | undefined {
      if (state.x === null || state.y === null) {
         return undefined;
      }
      if (!state.direction) {
         return undefined;
      }

      switch (state.direction) {
         case Direction.north:
            return state.y < GRID_DIMENSION - 1
               ? { x: state.x, y: state.y + 1 }
               : undefined;
         case Direction.east:
            return state.x < GRID_DIMENSION - 1
               ? { x: state.x + 1, y: state.y }
               : undefined;
         case Direction.south:
            return state.y > 0 ? { x: state.x, y: state.y - 1 } : undefined;
         case Direction.west:
            return state.x > 0 ? { x: state.x - 1, y: state.y } : undefined;
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
