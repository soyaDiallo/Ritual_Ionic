export class Groupe {
    /*
   private _id:number;
   private _name:string;
   private _photoUrl:string; 
   private _createdDate:Date;
   private _disabledDate:Date;*/

    constructor(private _id: number,
        private _name: string,
        private _photoUrl: string,
        private _createdDate: number,
        private _disabledDate: number) { }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get photoUrl(): string {
        return this._photoUrl;
    }

    public set photoUrl(photoUrl: string) {
        this._photoUrl = photoUrl;
    }

    public get createdDate(): number {
        return this._createdDate;
    }

    public set createdDate(createdDate: number) {
        this._createdDate = createdDate;
    }

    public get disabledDate(): number {
        return this._disabledDate;
    }

    public set disabledDate(disabledDate: number) {
        this._disabledDate = disabledDate;
    }

}
