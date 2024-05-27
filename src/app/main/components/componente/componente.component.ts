import { Component, Input } from '@angular/core';
import { componente } from '@interfaces/componentes';

@Component({
  selector: 'main-componente',
  templateUrl: './componente.component.html',
  styleUrl: './componente.component.css',
})
export class ComponenteComponent {
  @Input() componente: componente = {
    nombre: '',
    edad: 0,
    email: '',
  };

  constructor() {}
}
