import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rnd',
  template: `<app-child *ngFor="let number of numbers" [number]="number" [numbers]="numbers"></app-child>`,
  styleUrls: ['./rnd.component.scss']
})
export class RndComponent implements OnInit {

  numbers = [2, 4, 6, 7];

  constructor() { }

  ngOnInit(): void {
  }

}
