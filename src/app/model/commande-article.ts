export class CommandeArticle {
    /*
    private _idAarticle:number;
    private _idCommande:number;
    private _quantity:number;*/

    constructor(private _idAarticle: number,
        private _idCommande: number,
        private _quantity: number) { }

    public get idAarticle(): number {
        return this._idAarticle;
    }

    public set idAarticle(idAarticle: number) {
        this._idAarticle = idAarticle;
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

