import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MicrofrontendOverlayContainer} from './microfrontend-overlay-container.component'

import { OverlayContainer } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
  providers: [
      { provide: OverlayContainer, useClass: MicrofrontendOverlayContainer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
