import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {components} from "../component-list/component-model/component-model.component";

@Injectable({
  providedIn: 'root'
})

export class ComponentService {
  components: BehaviorSubject<Array<components>> = new BehaviorSubject<components[]>([])



  addComponent(componentObject: components) {
    let currentComponents: components[] = this.components.value
    let newComponentArray = [...currentComponents, componentObject]
//    let newComponentArray: components[] = currentComponents.push(componentObject)
    this.components.next(newComponentArray)
  }


  initFirstComponents() {
   this.components.next( [
     new components("Converter", "HDMI zu VGA", "HDMI", "VGA"),
     new components("Splitter", "Hinter schrank", "HDMI", "2x HDMI")
   ] )
  }
}
