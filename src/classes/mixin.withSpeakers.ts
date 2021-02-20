import { Constructor } from "./type.constructor";

export function withSpeakers<Parent extends Constructor>( MixOn:Parent ){
    
    // return a class that is dynamically extended
    return class extends MixOn {

        speakers = true;

    }

}