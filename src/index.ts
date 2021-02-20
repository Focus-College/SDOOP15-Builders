import { Television } from "./classes/class.television"
import { IWithWifi, WifiFreq, withWifi } from "./classes/mixin.withWifi"
import { withSpeakers } from './classes/mixin.withSpeakers';
import { with1080P } from "./classes/mixin.with1080P";
import { with4k } from "./classes/mixin.with4K";
import { setMaxListeners } from "process";
import { dir } from "console";
import { v4 } from 'uuid';

enum Resolutions {

    i480 = '480i',
    p1080 = '1080p',
    k4 = '4k'

}



class TelevisionBuilder {

    BaseTelevision = Television;

    private wifiFreq:WifiFreq[] = [];
    
    // instance logic
    
    private _instance:Television;

    protected get instance():Television {
        
        if( !this._instance ){
            
            this._instance = new this.BaseTelevision();

            if( this.wifiFreq.length ){
                (this._instance as Television & IWithWifi).wifiFrequencies = this.wifiFreq;
            }

        }

        return this._instance;
    }

    // pre instance methods

    addWifi( freq?:WifiFreq[] ){

        this.BaseTelevision = withWifi( this.BaseTelevision );
        this.wifiFreq = freq;

    }

    addSpeakers(){

        this.BaseTelevision = withSpeakers( this.BaseTelevision )

    }

    setResolution( resolution:Resolutions ){

        switch( resolution ){
            case Resolutions.p1080: this.BaseTelevision = with1080P( this.BaseTelevision ); break;
            case Resolutions.k4: this.BaseTelevision = with4k( this.BaseTelevision ); break;
        }

    }

    // post instance methods

    setBrandName( brand:string ){

        this.instance.brand = brand;

    }

    setSize( size:number ){

        this.instance.screenSize = size;

    }

    setModel( name:string ){
        this.instance.model = name;
    }

    setSerialNumber(){
        this.instance.serialNumber = v4();
    }

    // return the result

    getProduct(){

        return this.instance;

    }

}

class TelevisionDirector {

    constructor( public builder:typeof TelevisionBuilder ){

        

    }

    private samsungWith4kWifiAndSpeakers(){

        const builder = new this.builder();
        builder.addWifi([ WifiFreq.B, WifiFreq.G, WifiFreq.N, WifiFreq.AC ]);
        builder.addSpeakers();
        builder.setResolution( Resolutions.k4 );
        builder.setBrandName("Samsung");
        return builder;

    }

    private samsungGalaxy(){

        const builder = this.samsungWith4kWifiAndSpeakers()
        builder.setModel("Galaxy");
        return builder;

    }

    samsungGalaxy48(){

        const builder = this.samsungGalaxy();
        builder.setSize( 48 );
        builder.setSerialNumber();
        return builder;

    }

    samsungGalaxy32(){

        const builder = this.samsungGalaxy();
        builder.setSize( 32 );
        builder.setSerialNumber();
        return builder;

    }

}

const director = new TelevisionDirector( TelevisionBuilder );

// get product directly
const samsungGalaxy48 = director.samsungGalaxy48().getProduct();

// get builder, use builder to get product
const samsungGalaxy32Builder = director.samsungGalaxy32();
const samsungGalaxy32 = samsungGalaxy32Builder.getProduct();



// create a 4k tv with wifi
console.log( samsungGalaxy48, samsungGalaxy32 );