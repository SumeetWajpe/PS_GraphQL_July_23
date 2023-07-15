export class BookModel {
    constructor(id = 0, title = "", epub = false, author = "", publication = "") {
        this.id = id;
        this.title = title;
        this.epub = epub;
        this.author = author;
        this.publication = publication;
    }
}
export let booksData = {
    books: [
        {
            id: 1,
            title: "Wings Of Fire",
            epub: true,
            author: "Dr. APJ Abdul Kalam",
            publication: "Jaico",
        },
        {
            id: 2,
            title: "India 2020",
            epub: true,
            author: "Dr. APJ Abdul Kalam",
            publication: "Jaico",
        },
        {
            id: 3,
            title: "Kaizen",
            epub: true,
            author: "Sarah Harvey",
            publication: "Printwell",
        },
        {
            id: 4,
            title: "Ikigai",
            epub: true,
            author: "Hector Garcia",
            publication: "Kindle",
        },
        {
            id: 5,
            title: "Mrutunjay",
            epub: true,
            author: "Shivaji Sawant",
            publication: "Printwell",
        },
    ],
};
