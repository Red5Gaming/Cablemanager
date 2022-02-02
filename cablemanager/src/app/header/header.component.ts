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

  public fullForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  })

  public inNum: number = this.fullForm.value.inNum //this.fullForm.value.inNum
  inNumArr: string[] = new Array(this.inNum).fill('') //Correct one

  constructor(private componentService: ComponentService) {
  }


  //Creates array with i length
  arraylen(i: number) {
    return new Array<number>(i).fill(1)
  }




  onClick() {
    this.componentService.addComponent(this.fullForm.value)
    this.fullForm.reset()
  }


  refreshInF() {
    let inLenArr: number[] = this.arraylen(this.fullForm.value.inNum)
    return inLenArr


  }

 public formCTRLinput() {
    this.refreshInF().forEach((value, index) => {
     return "input" + index + ": new FormControl(null, Validators.required)"
    })
 }


  ngOnInit(): void {




    this.fullForm = new FormGroup({

      name: new FormControl(null, Validators.required),
      desc: new FormControl(null, Validators.required),


      //TODO: Implement multiple Formcontrols for inputs
      input: new FormControl(null, Validators.required),

      output: new FormControl(null, Validators.required),
      inNum: new FormControl(1, [Validators.min(1), Validators.required])
    });
  }

}
