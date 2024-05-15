import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-c',
  templateUrl: './layout-c.component.html',
  styleUrl: './layout-c.component.css',
})
export class LayoutCComponent {
  Number(arg0: string): number {
    return Number(arg0);
  }
  public title: string = 'asides-angular';
}
