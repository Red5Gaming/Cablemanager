import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { components } from '../component-list/component-model/component-model.component';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  components: BehaviorSubject<Array<components>> = new BehaviorSubject<
    components[]
  >([]);



  addComponent(componentObject: components) {


    let currentComponents: components[] = this.components.value;
    let newComponentArray: components[] = [
      ...currentComponents,
      componentObject,
    ];
    // let newComponentArray: components[] = currentComponents.push(componentObject)
    this.components.next(newComponentArray);
    console.log(newComponentArray); //Desc. exists and is NOT NULL
  }

  initFirstComponents() {
    this.components.next([
      new components('Monitor', '60hz',  'HDMI', 'BILD', 1),
      new components('Splitter', 'Hinter Schrank', 'HDMI & Strom', 'HDMI & Aux', 1),
    ]);
  }
}
