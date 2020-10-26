export class Commande {
    /* private _num:number;
     private _longitude:string;
     private _latitude:string;
     private _createdDate:Date;
     private _canceledDate:Date;
     private _launchDate:Date;
     private _idFavoritePosition:number;
     private _idConsumer:number;
     private _idGroupe:number;
     private _IdRestaurant:number;*/


    constructor(private _num: number,
        private _longitude: string,
        private _latitude: string,
        private _createdDate: number,
        private _canceledDate: number,
        private _launchDate: number,
        private _idFavoritePosition?: number,
        private _idConsumer?: number,
        private _idGroupe?: number,
        private _IdRestaurant?: number) { }

    public get num(): number {
        return this._num;
    }

    public set num(num: number) {
        this._num = num;
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

    public get canceledDate(): number {
        return this._canceledDate;
    }

    public set canceledDate(canceledDate: number) {
        this._canceledDate = canceledDate;
    }

    public get launchDate(): number {
        return this._launchDate;
    }

    public set launchDate(launchDate: number) {
        this._launchDate = launchDate;
    }

    public get idFavoritePosition(): number {
        return this._idFavoritePosition;
    }

    public set idFavoritePosition(idFavoritePosition: number) {
        this._idFavoritePosition = idFavoritePosition;
    }

    public get idConsumer(): number {
        return this._idConsumer;
    }

    public set idConsumer(idConsumer: number) {
        this._idConsumer = idConsumer;
    }

    public get idGroupe(): number {
        return this._idGroupe;
    }

    public set idGroupe(idGroupe: number) {
        this._idGroupe = idGroupe;
    }

    public get IdRestaurant(): number {
        return this._IdRestaurant;
    }

    public set IdRestaurant(IdRestaurant: number) {
        this._IdRestaurant = IdRestaurant;
    }


}
