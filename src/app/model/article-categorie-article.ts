export class ArticleCategorieArticle {

    /*
    private _idAarticle:number;
    private _idCategorieArticle:number;
    private _disabledDate:Date;*/


    constructor(private _idAarticle: number,
        private _idCategorieArticle: number,
        private _disabledDate: number) { }

    public get idAarticle(): number {
        return this._idAarticle;
    }

    public set idAarticle(idAarticle: number) {
        this._idAarticle = idAarticle;
    }

    public get idCategorieArticle(): number {
        return this._idCategorieArticle;
    }

    public set idCategorieArticle(idCategorieArticle: number) {
        this._idCategorieArticle = idCategorieArticle;
    }

    public get disabledDate(): number {
        return this._disabledDate;
    }

    public set disabledDate(disabledDate: number) {
        this._disabledDate = disabledDate;
    }


}
