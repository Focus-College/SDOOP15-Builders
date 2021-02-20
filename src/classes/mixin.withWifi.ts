import { Constructor } from "./type.constructor";

export enum WifiFreq {

    B = '802.11b',
    G = '802.11g',
    N = '802.11n',
    AC = '802.11ac',
    MM = 'mu-mimu'

}

export interface IWithWifi {

    hasWifi:boolean;
    wifiFrequencies:WifiFreq[];

}

export function withWifi<Parent extends Constructor>( MixOn:Parent ){
    
    // return a class that is dynamically extended
    return class extends MixOn implements IWithWifi {

        hasWifi = true;
        wifiFrequencies:WifiFreq[];

    }

}