import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { componente } from '../../interfaces/componentes';

@Injectable({
  providedIn: 'root',
})
export class ComponentesService {
  constructor() {}
  private componenteSource = new BehaviorSubject<componente | null>(null);
  componenteActual = this.componenteSource.asObservable();

  cambiarComponente(componente: componente) {
    this.componenteSource.next(componente);
  }

  crearComponente() {}
}
