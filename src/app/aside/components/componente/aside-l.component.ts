import { Component, Input } from '@angular/core';
import { componente } from '../../interfaces/componentes';

@Component({
  selector: 'aside-component',
  templateUrl: './aside-l.component.html',
  styleUrl: './aside-l.component.css',
})
export class AsideLComponent {
  constructor() {
    this.data = { nombre: 'Defecto', edad: 0, email: '' };
  }
  @Input() data: componente;
}
