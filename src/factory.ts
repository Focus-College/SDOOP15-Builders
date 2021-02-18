import fs from 'fs';
import { Article } from './creation_method';

function blankJsonFactory( onOpen:()=>any ){

    const path = `${__dirname}/blankJson.json`;
    
    // fs.writeFileSync(path, '{}', { encoding: 'utf-8' });

    return fs.open(path, 'w+', onOpen);

}

function televisionFactory( hasWifi:boolean=false ){

    return {
        type: 'televsion',
        hasWifi
    }

}

function createBlankArticle():Article{

    const blank = new Article({});
    blank.id = "9000";
    return blank;

}


const myTv = televisionFactory();
const myTv2 = televisionFactory( true );