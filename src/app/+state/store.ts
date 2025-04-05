import {
   signalStore,
   withState,
   withMethods,
   patchState,
   withProps,
   withComputed,
} from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { GridState } from './models/grid-state';
import { Rotation } from '../shared/enums';
import { GridService } from './grid.service';

const initialState: GridState = {
   x: null,
   y: null,
   direction: null,
};

export const GridStore = signalStore(
   withState(initialState),
   withProps(() => ({
      service: inject(GridService),
   })),
   withMethods(({ service, ...store }) => ({
      move: () => {
         const newCoordinates = service.move({
            x: store.x(),
            y: store.y(),
            direction: store.direction(),
         });
         if (newCoordinates) {
            patchState(store, newCoordinates);
         }
      },
      place: (state: GridState) => {
         if (service.canPlace(state)) {
            patchState(store, state);
         }
      },
      rotate: (rotation: Rotation) => {
         const direction = service.rotate(rotation, store.direction());
         if (direction) {
            patchState(store, { direction });
         }
      },
   }))
);
