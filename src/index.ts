
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@operatingdatastorage.byj0b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

class MongoConnection {

    private static instance:MongoConnection|null;
    
    private _client:any;
    
    public getClient():Promise<any>{
        return new Promise((resolve, reject) => {

            this._client.connect(( err:any ) => {
                
                if( err ){
                    reject(err);
                } else {
                    resolve(this._client);
                }
                
            });

        });
    };

    constructor(){

        if( MongoConnection.instance ){
            return MongoConnection.instance;
        }

        else {
            this._client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
            MongoConnection.instance = this;

            this._client.on('close', () => {
                MongoConnection.instance = null;
            })
        }

    }

}

class Person {

    static async loadById( id:string ){

        const connection = new MongoConnection();
        const client = await connection.getClient();
        const person = await client.collection('people').findById( id );
        return new Person( person );

    }

    constructor( person:any ){

    }

}

class Organization {

    static async loadById( id:string ){

        const connection = new MongoConnection();
        const client = await connection.getClient();
        const org = await client.collection('people').findById( id );
        return new Organization( org );

    }

    constructor( org:any ){

    }

}