export class Prix {
    /*
    private _id:number;
    private _amount:number;
    private _currency:string;*/

    constructor(private _id: number,
        private _amount: number,
        private _currency: string) { }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get amount(): number {
        return this._amount;
    }

    public set amount(amount: number) {
        this._amount = amount;
    }

    public get currency(): string {
        return this._currency;
    }

    public set currency(currency: string) {
        this._currency = currency;
    }

}
