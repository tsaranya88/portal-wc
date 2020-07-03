import './polyfills';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
 
import { AppComponent } from './app.component';
import { DemoComponent } from './demo.component';
import { PortalService } from './portal.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    PortalModule
  ],
  entryComponents: [DemoComponent],
  declarations: [AppComponent, DemoComponent],
  bootstrap: [AppComponent],
  providers: [
    PortalService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}