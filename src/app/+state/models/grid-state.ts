import { Direction } from '../../shared/enums';
import { Coordinates } from './coordinates';

export interface GridState extends Coordinates {
   direction: Direction | null;
}
