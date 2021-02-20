import { Constructor } from "./type.constructor";

export function with4k<Parent extends Constructor>( MixOn:Parent ){
    
    // return a class that is dynamically extended
    return class extends MixOn {

        resolution = "4k";

    }

}