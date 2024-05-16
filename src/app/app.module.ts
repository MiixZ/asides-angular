import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutCComponent } from './pages/layout-c.component';
import { asideModule } from './aside/aside.module';
import { MainModule } from './main/main.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, LayoutCComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    asideModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
