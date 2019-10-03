import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';

/**
 * Module that integrates all needed modules from Angular Material.
 */

@NgModule({
  exports: [MatCardModule, MatExpansionModule, MatToolbarModule],
  imports: [MatCardModule, MatExpansionModule, MatToolbarModule]
})
export class MatModule {}
