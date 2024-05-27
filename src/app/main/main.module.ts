import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { ComponenteComponent } from './components/componente/componente.component';

@NgModule({
  declarations: [MainLayoutComponent, ComponenteComponent],
  exports: [MainLayoutComponent],
  imports: [CommonModule],
})
export class MainModule {}
