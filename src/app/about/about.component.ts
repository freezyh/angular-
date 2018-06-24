import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title = '默认';
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.title = '改变';
  }

}
