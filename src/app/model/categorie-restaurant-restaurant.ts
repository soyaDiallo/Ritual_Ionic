export class CategorieRestaurantRestaurant {
    /*
    private _idRestaurant:number;
    private _idCategorieRestaurant:number;
    private _entryDate:Date;
    rivate _releasedDate:Date;*/

    constructor(private _idRestaurant: number,
        private _idCategorieRestaurant: number,
        private _entryDate: number,
        private _releasedDate: number) { }

    public get idRestaurant(): number {
        return this._idRestaurant;
    }

    public set idRestaurant(idRestaurant: number) {
        this._idRestaurant = idRestaurant;
    }

    public get idCategorieRestaurant(): number {
        return this._idCategorieRestaurant;
    }

    public set idCategorieRestaurant(idCategorieRestaurant: number) {
        this._idCategorieRestaurant = idCategorieRestaurant;
    }

    public get entryDate(): number {
        return this._entryDate;
    }

    public set entryDate(entryDate: number) {
        this._entryDate = entryDate;
    }

    public get releasedDate(): number {
        return this._releasedDate;
    }

    public set releasedDate(releasedDate: number) {
        this._releasedDate = releasedDate;
    }

}
