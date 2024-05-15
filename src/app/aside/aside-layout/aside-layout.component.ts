import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-layout',
  templateUrl: './aside-layout.component.html',
  styleUrl: './aside-layout.component.css',
})
export class AsideLayoutComponent {
  Number(arg0: string): number {
    return Number(arg0);
  }
}
