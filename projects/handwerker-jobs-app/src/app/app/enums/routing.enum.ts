export enum RouteCommons {
  empty = '',
  root = '/',
  wildcard = '**'
}

export enum RouteFeature {
  jobs = 'jobs'
}
export type RouteFeatureET = keyof typeof RouteFeature;
