export class Horaire {
    /*
    private _id:number;
    private _day:string;*/

    constructor(private _id: number,
        private _day: string) { }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get day(): string {
        return this._day;
    }

    public set day(day: string) {
        this._day = day;
    }


}
