export class CategorieArticle {
    /*
    private _id:number;
    private _title:string;
    private _createDate:Date;
    private _disableDate:Date;*/

    constructor(private _id: number,
        private _title: string,
        private _createDate: number,
        private _disableDate: number) { }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get title(): string {
        return this._title;
    }

    public set title(title: string) {
        this._title = title;
    }

    public get createDate(): number {
        return this._createDate;
    }

    public set createDate(createDate: number) {
        this._createDate = createDate;
    }

    public get disableDate(): number {
        return this._disableDate;
    }

    public set disableDate(disableDate: number) {
        this._disableDate = disableDate;
    }


}
