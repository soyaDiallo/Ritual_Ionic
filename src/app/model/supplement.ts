import { Article } from './article';
export class Supplement extends Article {
    constructor(_id: number,
        _title: string,
        _description: string,
        _photoUrl: string,
        _createDate: number,
        _deletedDate: number) {
        super(_id, _title, _description, _photoUrl, _createDate, _deletedDate);
    }
}
