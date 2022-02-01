import {Component, OnInit} from '@angular/core';
import {components} from "../component-list/component-model/component-model.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {ComponentService} from "../services/component.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fullForm: FormGroup


  public inNum: number = 1 //this.fullForm.value.inNum
  // inNumArr: string[] = new Array(this.inNum).fill('')
inNumArr: string[] = ['a', 'b']

  constructor(private componentService: ComponentService) {  }


  onClick() {
    //console.log("AAAAAAAAAAAAAAAAAA")
    console.log(this.fullForm.value.inNum)

    console.log(this.fullForm.value)
    this.componentService.addComponent(this.fullForm.value)
    this.fullForm.reset()
  }


  ngOnInit(): void {


    this.fullForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      desc: new FormControl(null, Validators.required),
      input: new FormControl(null, Validators.required),
      output: new FormControl(null, Validators.required),
      inNum: new FormControl(1, [Validators.min(1), Validators.max(10), Validators.required])
    });
  }

}
