/**
 * This model will be useful if we use NGRX in the future.
 */

export interface Entity {
  id: number;
}

export interface Entities<V extends Entity> {
  ids: number[];
  entities: { [id: number]: V };
}

export interface EntitiesState<V extends Entity> {
  ids: number[];
  entities: { [id: number]: V };
  loading: boolean;
  loaded: boolean;
}
