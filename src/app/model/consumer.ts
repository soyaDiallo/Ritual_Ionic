import { User } from './user';

export class Consumer extends User {

    constructor(
        _id: number,
        _displayName: string,
        _email: string,
        _photoUrl: string,
        _phone: string
    ) {
        super(_id, _displayName, _email, _photoUrl, _phone);
    }

}
