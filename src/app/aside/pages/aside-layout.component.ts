import { Component } from '@angular/core';
import { componente } from '../../interfaces/componentes';
import { ComponentesService } from '../services/servicio-componentes.service';

export
@Component({
  selector: 'aside-layout',
  templateUrl: './aside-layout.component.html',
  styleUrl: './aside-layout.component.css',
})
class AsideLayoutComponent {
  constructor(private componenteService: ComponentesService) {}

  componentes = [
    {
      nombre: 'Juan',
      edad: 25,
      email: 'juanitorivas@gmail.com',
    },
    {
      nombre: 'Pedro',
      edad: 30,
      email: 'pedropaqueno@gmail.com',
    },
    {
      nombre: 'Maria',
      edad: 20,
      email: 'mariapatino@gmail.com',
    },
  ];

  mostrarComponente(componente: componente) {
    this.componenteService.cambiarComponente(componente);
  }
}
