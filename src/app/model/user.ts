export class User {

    /*
    private _id: number;
    private _displayName: string;
    private _email: string;
    private _photoUrl: string;
    private _phone: string;
    */

    constructor(
        private _id: number,
        private _displayName: string,
        private _email: string,
        private _photoUrl: string,
        private _phone: string
    ) { }

    public get id(): number {
        return this._id;
    }
    public set id(v: number) {
        this._id = v;
    }

    public get displayName(): string {
        return this._displayName;
    }
    public set displayName(v: string) {
        this._displayName = v;
    }

    public get email(): string {
        return this._email;
    }
    public set email(v: string) {
        this._email = v;
    }

    public get photoUrl(): string {
        return this._photoUrl;
    }
    public set photoUrl(v: string) {
        this._photoUrl = v;
    }

    public get phone(): string {
        return this._phone;
    }
    public set phone(v: string) {
        this._phone = v;
    }

}
