
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarLeftComponent } from './side-bar-left/side-bar-left.component';
import { SideBarRightComponent } from './side-bar-right/side-bar-right.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarLeftComponent,
    SideBarRightComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
