import { Component, OnInit } from '@angular/core';
import { components } from './component-model/component-model.component'
import {HeaderComponent} from "../header/header.component";
import {Subscription} from "rxjs";
import {ComponentService} from "../services/component.service";

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {
private subComp: Subscription;


components: components[]



  constructor(private componentService: ComponentService) { }

  ngOnInit(): void {
    this.componentService.initFirstComponents();
    this.subComp = this.componentService.components.subscribe(value => {this.components = value})
  }

}
