import { Component } from '@angular/core';

export
@Component({
  selector: 'aside-layout',
  templateUrl: './aside-layout.component.html',
  styleUrl: './aside-layout.component.css',
})
class AsideLayoutComponent {
  Number(arg0: string): number {
    return Number(arg0);
  }

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
}
