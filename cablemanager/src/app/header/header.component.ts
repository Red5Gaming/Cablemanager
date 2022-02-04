import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ComponentService} from '../services/component.service';
// import {BehaviorSubject} from "rxjs";
// import {components} from "../component-list/component-model/component-model.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  public fullForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  inNum: number = this.fullForm.value.inNum; //this.fullForm.value.inNum

  constructor(private componentService: ComponentService) {
  }

  //Creates array with i length
  arraylen(i: number) {
    return new Array<number>(i).fill(1);
  }


  onClick() {
    this.componentService.addComponent(this.fullForm.value);
    this.fullForm.reset();
  }

  refreshInF() {
    return this.arraylen(this.fullForm.value.inNum);
  }


  ngOnInit(): void {

    const fields: any = {
      name: new FormControl(null, Validators.required),
      desc: new FormControl(null, Validators.required),


      //TODO: Implement multiple Formcontrols for inputs and make it work in the component-list with In1:Lorem \n In2: Ipsum \n In3: xyz
      //PROBLEM: Dynamicly create them and handle them, easy solution would be to have one and spereate them with ' ', ',' etc. and slice
      input: new FormControl(null),

      output: new FormControl(null, Validators.required),
      inNum: new FormControl(1, [Validators.min(1), Validators.required]),

    };

    for (let i = 0; i < 5; i++) {
      fields['input'+i] = new FormControl(null);
    }


    this.fullForm = new FormGroup(fields);
  }
}
