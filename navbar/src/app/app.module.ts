import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { PrimaryNavComponent } from './primary-nav/primary-nav.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MicrofrontendOverlayContainer} from './microfrontend-overlay-container.component'
import { OverlayContainer } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    PrimaryNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
  providers: [
      { provide: OverlayContainer, useClass: MicrofrontendOverlayContainer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
