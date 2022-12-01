export default class Book {
    title!: string;
    author!: string;
    cover!: string;
    description!: string;
    shelf?: Shelf;
    _id?: any;
    rating?: number;
}

export enum Shelf {
    toRead = 'toRead',
    dnf = 'dnf',
    currentlyReading = 'currentlyReading',
    read = 'read'
}