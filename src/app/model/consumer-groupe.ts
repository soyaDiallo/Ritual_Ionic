export class ConsumerGroupe {
    /*
    private _idConsumer:number;
    private _idGroupe:number;
    private _profile:string;
    private _entryDate:Date;
    private _releasedDate:Date;*/

    constructor(private _idConsumer: number,
        private _idGroupe: number,
        private _profile: string,
        private _entryDate: number,
        private _releasedDate: number) { }

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

    public get profile(): string {
        return this._profile;
    }

    public set profile(profile: string) {
        this._profile = profile;
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
