import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutCComponent } from './pages/layout-c.component';
import { asideModule } from './aside/aside.module';

@NgModule({
  declarations: [AppComponent, LayoutCComponent],
  imports: [BrowserModule, AppRoutingModule, asideModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
