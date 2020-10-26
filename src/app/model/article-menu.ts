export class ArticleMenu {
    /*
    private _idAarticle:number;
    private _idMenu:number;
    private _disabledDate:Date;*/
    constructor(private _idAarticle: number,
        private _idMenu: number,
        private _disabledDate: number) { }

    public get idAarticle(): number {
        return this._idAarticle;
    }

    public set idAarticle(idAarticle: number) {
        this._idAarticle = idAarticle;
    }

    public get idMenu(): number {
        return this._idMenu;
    }

    public set idMenu(idMenu: number) {
        this._idMenu = idMenu;
    }

    public get disabledDate(): number {
        return this._disabledDate;
    }

    public set disabledDate(disabledDate: number) {
        this._disabledDate = disabledDate;
    }

}
