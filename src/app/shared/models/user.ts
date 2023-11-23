import Book from "./book";

export default class User {
    username!: string;
    password!: string;
    books?: Book[];
}