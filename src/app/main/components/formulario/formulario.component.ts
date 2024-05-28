import { Component } from '@angular/core';
import { ComponentesService } from '@aside/services/servicio-componentes.service';

import { componente } from '@interfaces/componentes';

@Component({
  selector: 'main-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  constructor(private componentesService: ComponentesService) {}

  public componente: componente = {
    nombre: 'Maria',
    edad: 15,
    email: 'marialb@gmail.com',
  };

  public crearComponente(): void {
    const copia: componente = { ...this.componente };
    this.componentesService.crearComponente(copia);
  }
}
