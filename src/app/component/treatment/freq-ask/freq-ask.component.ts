import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freq-ask',
  templateUrl: './freq-ask.component.html',
  styleUrls: ['./freq-ask.component.scss']
})
export class FreqAskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  isOpen: { [key: number]: boolean } = {};

  toggle(index: number) {
    this.isOpen[index] = !this.isOpen[index];
  }
}
