import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { componente } from '@interfaces/componentes';

@Injectable({
  providedIn: 'root',
})
export class ComponentesService {
  constructor() {}
  private componenteSource = new BehaviorSubject<componente | null>(null);
  private componenteCreado = new BehaviorSubject<componente | null>(null);
  componenteActual = this.componenteSource.asObservable();
  nuevoComponente = this.componenteCreado.asObservable();

  cambiarComponente(componente: componente) {
    this.componenteSource.next(componente);
  }

  crearComponente() {
    console.log('gola gola');
    this.componenteCreado.next({
      nombre: 'Ana',
      edad: 15,
      email: 'ana@gmail.com',
    } as componente);
  }
}
