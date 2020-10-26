export class ArticleSupplementPrix {
    /*
    private _idAarticle:number;
    private _idSupplement:number;
    private _idPrix:number;
    private _date:Date;*/

    constructor(private _idAarticle: number,
        private _idSupplement: number,
        private _idPrix: number,
        private _date: number) { }

    public get idAarticle(): number {
        return this._idAarticle;
    }

    public set idAarticle(idAarticle: number) {
        this._idAarticle = idAarticle;
    }

    public get idSupplement(): number {
        return this._idSupplement;
    }

    public set idSupplement(idSupplement: number) {
        this._idSupplement = idSupplement;
    }

    public get idPrix(): number {
        return this._idPrix;
    }

    public set idPrix(idPrix: number) {
        this._idPrix = idPrix;
    }

    public get date(): number {
        return this._date;
    }

    public set date(date: number) {
        this._date = date;
    }

}
