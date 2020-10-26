import { User } from './user';

export class Restaurant extends User {

    constructor(
        _id: number,
        _displayName: string,
        _email: string,
        _photoUrl: string,
        _phone: string,
        private _slogan: string,
        private _latitude: string,
        private _longitude: string,
        private _address: string
    ) {
        super(_id, _displayName, _email, _photoUrl, _phone);
    }

    public get slogan(): string {
        return this._slogan;
    }
    public set slogan(v: string) {
        this._slogan = v;
    }

    public get latitude(): string {
        return this._latitude;
    }
    public set latitude(v: string) {
        this._latitude = v;
    }

    public get longitude(): string {
        return this._longitude
    }
    public set longitude(v: string) {
        this._longitude = v;
    }

    public get address(): string {
        return this._address;
    }
    public set address(v: string) {
        this._address = v;
    }

}
