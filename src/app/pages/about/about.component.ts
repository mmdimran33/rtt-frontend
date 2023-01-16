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

      arrayOfImgUrls = [
        '../../assets/img/cyber_security/cyber_security.jpg',
        '../../assets/img/cyber_security/cyber_security1.jpg',
        '../../assets/img/cyber_security/cyber_security2.jpg',
        '../../assets/img/cyber_security/cyber_security3.jpg',
        // 'https://images.unsplash.com/photo-1545893835-abaa50cbe628?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2073&q=80',
        // 'https://images.unsplash.com/photo-1546884680-a1de22e94d50?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        
      ]


}
