import { NgModule } from '@angular/core';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AsideLComponent } from './components/componente/aside-l.component';
import { AsideHeaderComponent } from './components/header/aside-header.component';
import { AsideLayoutComponent } from './aside-layout/aside-layout.component';

@NgModule({
  imports: [],
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
