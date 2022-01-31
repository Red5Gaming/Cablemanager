import { Component, OnInit } from '@angular/core';
import { components } from './component-model/component-model.component'

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {

  components: components[] = [
    new components("Converter", "HDMI zu VGA", "HDMI", "VGA"),
    new components("Splitter", "Hinter schrank", "HDMI", "2x HDMI")
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
