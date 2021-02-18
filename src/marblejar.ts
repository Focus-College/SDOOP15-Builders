export enum Configuration {

    SM,
    MD,
    LG

}

export interface IMarbleJar {

    items: number;

    empty():void;

}

class MarbleJar implements IMarbleJar {

    constructor( public items:number ){

    }

    empty(){
        this.items = 0;
    }

}

export class MarbleJarFactory {

    public static create( configuration:Configuration ):MarbleJar{

        switch(configuration){
            case Configuration.LG: return new MarbleJar(100);
            case Configuration.MD: return new MarbleJar(45);
            case Configuration.SM: return new MarbleJar(15);
            default: throw new Error("I'm sorry, this configuration doesn't exist.");
        }
        

    }

}