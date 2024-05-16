import { Component } from '@angular/core';
import { ComponentesService } from '../../../aside/services/servicio-componentes.service';
import { componente } from '../../../interfaces/componentes';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {
  componente: componente | null = null;

  constructor(private componentesService: ComponentesService) {}

  ngOnInit() {
    this.componentesService.componenteActual.subscribe((componente) => {
      this.componente = componente;
    });
  }
}
