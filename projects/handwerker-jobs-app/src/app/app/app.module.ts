import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import * as fromRootComponents from '@handwerker-jobs-app/components';
import * as fromRootContainers from '@handwerker-jobs-app/containers';
import { CoreModule } from '@handwerker-jobs-core/core.module';
import { SharedModule } from '@handwerker-jobs-shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  bootstrap: [fromRootContainers.AppComponent],
  declarations: [...fromRootContainers.containers],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class AppModule {}
