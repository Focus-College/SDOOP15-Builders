import { Television } from "./classes/class.television"
import { IWithWifi, WifiFreq, withWifi } from "./classes/mixin.withWifi"
import { withSpeakers } from './classes/mixin.withSpeakers';
import { with1080P } from "./classes/mixin.with1080P";
import { with4k } from "./classes/mixin.with4K";
import { setMaxListeners } from "process";

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

    // return the result

    getProduct(){

        return this.instance;

    }

}

// create a 4k tv with wifi
const builder = new TelevisionBuilder();
builder.addWifi([ WifiFreq.B, WifiFreq.G, WifiFreq.N ]);
builder.addSpeakers();
builder.setResolution( Resolutions.k4 );
builder.setSize( 48 );
builder.setBrandName("Samsung");

const samsungWith4kWifiAndSpeakers = builder.getProduct();

console.log( samsungWith4kWifiAndSpeakers );