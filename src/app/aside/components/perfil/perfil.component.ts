import { Component, Input } from '@angular/core';

@Component({
  selector: 'aside-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent {
  @Input() name: String = 'Sin nombre';
}
