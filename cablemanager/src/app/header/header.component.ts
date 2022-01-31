import { Component, OnInit } from '@angular/core';
import {components} from "../component-list/component-model/component-model.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {




  constructor() {

  }


onClick() {
    console.log("AAAAAAAAAAAAAAAAAA")

  new components("Name1", "Desc1", "Input1", "Output1")

}





  ngOnInit(): void {
  }

}
