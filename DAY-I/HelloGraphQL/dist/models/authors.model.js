export class Author {
    constructor(id = 0, name = "", age = 0, noOfBooks = 0) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.noOfBooks = noOfBooks;
    }
}
export let authorsData = {
    authors: [
        {
            id: 1,
            name: "Dr. APJ Abdul Kalam",
            age: 70,
            noOfBooks: 20,
        },
        {
            id: 2,
            name: "Sarah Harvey",
            age: 50,
            noOfBooks: 10,
        },
        {
            id: 3,
            name: "Shivaji Sawant",
            age: 40,
            noOfBooks: 2,
        },
        {
            id: 4,
            name: "Hector Garcia",
            age: 45,
            noOfBooks: 5,
        },
    ],
};
