import {Component, OnInit, ViewChild} from '@angular/core';
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

  fullForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  })

  //Creates array with i length
  arraylen(i: number) {
   return new Array<number>(i).fill(1)
  }

inNumlen: number[]


  public inNum: number = this.fullForm.value.inNum //this.fullForm.value.inNum

  inNumArr: string[] = new Array(this.inNum).fill('') //Correct one
//inNumArr: string[] = ['a', 'b'] //FOR TESTING

  constructor(private componentService: ComponentService) {
  }

  counter(i: number) {
    return new Array(i)
  }




  onClick() {

    //console.log("AAAAAAAAAAAAAAAAAA")
    console.log(this.fullForm.value.inNum)
    console.log(this.inNumArr)
    console.log(this.fullForm.value)

    this.componentService.addComponent(this.fullForm.value)
    this.fullForm.reset()
  }


refreshInF() {
    let inLenArr: number[] = this.arraylen(this.fullForm.value.inNum)
  console.log(inLenArr)
    return inLenArr

}




  ngOnInit(): void {


    this.fullForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      desc: new FormControl(null, Validators.required),


      input: new FormControl(null, Validators.required),

      output: new FormControl(null, Validators.required),
      inNum: new FormControl(null, [Validators.min(1), Validators.max(10), Validators.required])
    });
  }

}
