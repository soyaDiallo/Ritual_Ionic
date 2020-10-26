export class PositionFavorites {
    /* private _id:number;
     private _title:string;
     private _longitude:string;
     private _latitude:string;
     private _createdDate:Date;
     private _disabledDate:Date;
     private _idConsumer: number;*/

    constructor(private _id: number,
        private _title: string,
        private _longitude: string,
        private _latitude: string,
        private _createdDate: number,
        private _disabledDate: number,
        private  _idConsumer?: number) { }

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

    public get longitude(): string {
        return this._longitude;
    }

    public set longitude(longitude: string) {
        this._longitude = longitude;
    }

    public get latitude(): string {
        return this._latitude;
    }

    public set latitude(latitude: string) {
        this._latitude = latitude;
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

    public get idConsumer(): number {
        return this._idConsumer;
    }

    public set idConsumer(idConsumer: number) {
        this._idConsumer = idConsumer;
    }


}
