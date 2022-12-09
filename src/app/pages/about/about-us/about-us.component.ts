import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUSComponent implements OnInit {

  size: NzButtonSize = 'large';

  constructor() { }

  ngOnInit(): void {
  }


  // array = [1, 2, 3, 4];
  array = [1, 2, 3, 4];
}
