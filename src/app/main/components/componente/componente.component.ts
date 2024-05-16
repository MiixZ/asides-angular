import { Component } from '@angular/core';
import { componente } from '../../../interfaces/componentes';

@Component({
  selector: 'main-componente',
  templateUrl: './componente.component.html',
  styleUrl: './componente.component.css',
})
export class ComponenteComponent {
  componente: componente | null = null;

  constructor() {}
}
