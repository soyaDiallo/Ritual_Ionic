export class ArticleSupplement {
    /*
    private _idAarticle:number;
    private _idSupplement:number;
    private _assignmentDate:Date;
    private _disabledDate:Date;*/

    constructor(private _idAarticle: number,
        private _idSupplement: number,
        private _assignmentDate: number,
        private _disabledDate: number) { }

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

    public get assignmentDate(): number {
        return this._assignmentDate;
    }

    public set assignmentDate(assignmentDate: number) {
        this._assignmentDate = assignmentDate;
    }

    public get disabledDate(): number {
        return this._disabledDate;
    }

    public set disabledDate(disabledDate: number) {
        this._disabledDate = disabledDate;
    }

}
