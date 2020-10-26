export class RestaurantHoraire {
    /*
    private _idHoraire:number;
    private _idRestaurant:number;
    private _duration:number;
    private _startedHour:Date;
    private _deletedDate:Date;*/

    constructor(private _idHoraire: number,
        private _idRestaurant: number,
        private _duration: number,
        private _startedHour: number,
        private _deletedDate: number) { }

    public get idHoraire(): number {
        return this._idHoraire;
    }

    public set idHoraire(idHoraire: number) {
        this._idHoraire = idHoraire;
    }

    public get idRestaurant(): number {
        return this._idRestaurant;
    }

    public set idRestaurant(idRestaurant: number) {
        this._idRestaurant = idRestaurant;
    }

    public get duration(): number {
        return this._duration;
    }

    public set duration(duration: number) {
        this._duration = duration;
    }

    public get startedHour(): number {
        return this._startedHour;
    }

    public set startedHour(startedHour: number) {
        this._startedHour = startedHour;
    }

    public get deletedDate(): number {
        return this._deletedDate;
    }

    public set deletedDate(deletedDate: number) {
        this._deletedDate = deletedDate;
    }

}
