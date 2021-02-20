import { Constructor } from "./type.constructor";

// function takes an argument that is a Parent class to mix ON
export function with1080P<Parent extends Constructor>( MixOn:Parent ){
    
    // return a class that is dynamically extended
    return class extends MixOn {

        resolution = "1080P";

    }

}