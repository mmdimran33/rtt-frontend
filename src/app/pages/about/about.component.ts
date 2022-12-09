import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  size: NzButtonSize = 'large';

  constructor() { }

  ngOnInit(): void {
  }

  array = [1, 2, 3, 4];

  img = ["../../assets/img/cyber_security/cyber_security.jpg", 
        "../../assets/img/cyber_security/cyber_security1.jpg",
        "../../assets/img/cyber_security/cyber_security2.jpg",
        "../../assets/img/cyber_security/cyber_security3.jpg"
      ];


}
