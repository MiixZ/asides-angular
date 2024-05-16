import { NgModule } from '@angular/core';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AsideLComponent } from './components/componente/aside-l.component';
import { AsideHeaderComponent } from './components/header/aside-header.component';
import { AsideLayoutComponent } from './pages/aside-layout.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [AsideLayoutComponent],
  declarations: [
    PerfilComponent,
    AsideLComponent,
    AsideHeaderComponent,
    AsideLayoutComponent,
  ],
  providers: [],
})
export class asideModule {}
