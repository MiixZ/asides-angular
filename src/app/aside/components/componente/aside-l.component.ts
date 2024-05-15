import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aside-l',
  templateUrl: './aside-l.component.html',
  styleUrl: './aside-l.component.css',
})
export class AsideLComponent {
  Number(arg0: string) {
    return Number(arg0);
  }
  @Input() nombre: string = 'Sin nombre';
  @Input() edad: number = 0;
  @Input() email: string = 'Sin email';
}
