import { Component } from '@angular/core';
import { ComponentesService } from '../../services/servicio-componentes.service';

@Component({
  selector: 'aside-header',
  templateUrl: './aside-header.component.html',
  styleUrl: './aside-header.component.css',
})
export class AsideHeaderComponent {
  constructor(private componenteService: ComponentesService) {}
  crearComponente() {
    this.componenteService.crearComponente();
  }
}
