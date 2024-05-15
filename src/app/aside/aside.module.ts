import { NgModule } from '@angular/core';
import { PerfilComponent } from './perfil/perfil.component';
import { AsideLComponent } from './aside-l/aside-l.component';
import { AsideHeaderComponent } from './aside-header/aside-header.component';
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
