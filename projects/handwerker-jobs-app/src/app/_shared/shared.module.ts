import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatModule } from '@handwerker-jobs-shared/mat.module';

@NgModule({
  exports: [CommonModule, MatModule],
  imports: [CommonModule, MatModule]
})
export class SharedModule {}
