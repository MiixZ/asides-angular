import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { ComponenteComponent } from './components/componente/componente.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainLayoutComponent, ComponenteComponent, FormularioComponent],
  exports: [MainLayoutComponent],
  imports: [CommonModule, FormsModule],
})
export class MainModule {}
