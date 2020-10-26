import { PositionFavorites } from './position-favorites';
export class Menu {
    /*
    private _id:number;
    private _title:string;
    private _createdDate:Date;
    private _disabledDate:Date;
    private _idRestaurant:number;*/

    constructor(private _id: number,
        private _title: string,
        private _createdDate: number,
        private _disabledDate: number,
        private _idRestaurant? :number) { }


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

    public get idRestaurant(): number {
        return this._idRestaurant;
    }

    public set idRestaurant(idRestaurant: number) {
        this._idRestaurant = idRestaurant;
    }


}
