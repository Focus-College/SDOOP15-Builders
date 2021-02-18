import { Article } from "./creation_method";

enum ArticleType {

    Base,
    MemberOnly,
    Premium

}


class ArticleFactory {

    public static create( $type?:ArticleType ){

        switch( $type ){
            case ArticleType.Base: return new Article({});
            case ArticleType.MemberOnly: return new Article({ isMemberOnly: true });
            case ArticleType.Premium: return new Article({ isMemberOnly: true, isPremium: true });
            default: throw new Error("Sorry, That doesn't exist");
        }

    }

}

const article = ArticleFactory.create( ArticleType.MemberOnly );
const article2 = ArticleFactory.create( ArticleType.Base );
const article3 = ArticleFactory.create( ArticleType.Premium );
const article4 = new Article({ isPremium:true });


