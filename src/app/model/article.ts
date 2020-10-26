export class Article {
    /*
    private _id:number;
    private _title:string;
    private _description:string; 
    private _photoUrl:string; 
    private _createDate:Date;
    private _deletedDate:Date;  */

    constructor(private _id: number,
        private _title: string,
        private _description: string,
        private _photoUrl: string,
        private _createDate: number,
        private _deletedDate: number) { }

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

    public get description(): string {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }

    public get photoUrl(): string {
        return this._photoUrl;
    }

    public set photoUrl(photoUrl: string) {
        this._photoUrl = photoUrl;
    }

    public get createDate(): number {
        return this._createDate;
    }

    public set createDate(createDate: number) {
        this._createDate = createDate;
    }

    public get deletedDate(): number {
        return this._deletedDate;
    }

    public set deletedDate(deletedDate: number) {
        this._deletedDate = deletedDate;
    }


}
