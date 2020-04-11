import { Component, OnInit } from '@angular/core';

@Component({
  template: `<h1>404'd</h1>`,
  styles: ['h1{text-align: center; font-size: 150px; margin-top: 170px;}']
})
export class Err404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
