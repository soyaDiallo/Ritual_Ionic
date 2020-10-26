export class HoraireMenu {
    /*
    private _idHoraire:number;
    private _idMenu:number;
    private _duration:number;
    private _startedHour:Date;
    private _deletedDate:Date;*/

    constructor(private _idHoraire: number,
        private _idMenu: number,
        private _duration: number,
        private _startedHour: number,
        private _deletedDate: number) { }

    public get idHoraire(): number {
        return this._idHoraire;
    }

    public set idHoraire(idHoraire: number) {
        this._idHoraire = idHoraire;
    }

    public get idMenu(): number {
        return this._idMenu;
    }

    public set idMenu(idMenu: number) {
        this._idMenu = idMenu;
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
