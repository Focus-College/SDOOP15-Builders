export class Article {

    id: string;
    name: string;
    
    static createBlank(){
        const blank = new Article({});
        blank.id = "9000";
        return blank;
    }
    
    static loadFromDatabase( articleId:string ){
        const data = {
            id:articleId,
            name:`Article #${articleId}`
        }

        return new Article( data );
    }

    constructor( data:Partial<{ id:string, name:string, isMemberOnly:boolean, copies: number, isPremium:boolean, expires:Date }>){
        
        // option 1
        Object.assign( this, data );
        
        // option 2
        // this.id = data.id;
        // this.name = data.name;

    }

    clone(){
        const blank = Article.createBlank();
        Object.assign( blank, this );
        return blank;
    }

}

class Series {

    articles:Article[] = [];
    
    add( article:Article ){
        this.articles.push( article );
    }
    

    addById( articleId:string ){

        // database request to get article by id
        

        const article = Article.loadFromDatabase( articleId );
        this.add(article);
        return article;

    }

}

class ArticleSearch {

    public find( title:string ){

        // search for a bunch of articles with a keyword (db request)
        const dbResults = ["1", "14", "19", "21"];

        // create a series
        const results = new Series();

        // we don't get the articles returned, we get the id's returned
        dbResults.forEach( id => results.addById( id ));

    }

}