import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromRootEnums from '@handwerker-jobs-app/enums';

export const featurePath: fromRootEnums.RouteFeatureET = fromRootEnums.RouteFeature.feature;
export const redirectTo = `/${featurePath}`;

const routes: Routes = [
  // {
  //   // Dynamic import can only take plain string!
  //   loadChildren: () => import('../feature/feature.module').then(mod => mod.FeatureModule),
  //   path: featurePath
  // },
  {
    path: fromRootEnums.RouteCommons.wildcard,
    redirectTo
  }
];

@NgModule({
  exports: [RouterModule],
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
