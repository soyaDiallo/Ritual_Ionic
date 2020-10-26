export class CommandeSupplement {
    /*
    private _idSupplement:number;
    private _idCommande:number;
    private _quantity:number;*/

    constructor(private _idSupplement: number,
        private _idCommande: number,
        private _quantity: number) { }

    public get idSupplement(): number {
        return this._idSupplement;
    }

    public set idSupplement(idSupplement: number) {
        this._idSupplement = idSupplement;
    }

    public get idCommande(): number {
        return this._idCommande;
    }

    public set idCommande(idCommande: number) {
        this._idCommande = idCommande;
    }

    public get quantity(): number {
        return this._quantity;
    }

    public set quantity(quantity: number) {
        this._quantity = quantity;
    }

}

