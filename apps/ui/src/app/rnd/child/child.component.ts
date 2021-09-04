import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<div>{{ number }}<button (click)="deletePost(number)">Delete</button></div>`,
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() number: any;
  @Input() numbers!: any[];

  constructor() { }

  ngOnInit(): void {
  }

  deletePost(number: any) {
    const index = this.numbers.findIndex(number => number === number);
    this.numbers.splice(index, 1);
  }

}
