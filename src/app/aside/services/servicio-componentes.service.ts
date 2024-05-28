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
  private FormState = new BehaviorSubject<boolean | null>(null);

  componenteActual = this.componenteSource.asObservable();
  nuevoComponente = this.componenteCreado.asObservable();
  estadoForm = this.FormState.asObservable();

  estadoActual = false;

  cambiarComponente(componente: componente) {
    this.componenteSource.next(componente);
  }

  crearComponente(componente: componente) {
    this.componenteCreado.next(componente);
  }

  mostrarForm() {
    this.FormState.next(!this.estadoActual);
  }
}
