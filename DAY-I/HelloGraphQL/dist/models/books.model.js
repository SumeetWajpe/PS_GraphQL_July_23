export class BookModel {
    constructor(id = 0, title = "", epub = false, authorId = 0, publication = "") {
        this.id = id;
        this.title = title;
        this.epub = epub;
        this.authorId = authorId;
        this.publication = publication;
    }
}
export let booksData = {
    books: [
        {
            id: 1,
            title: "Wings Of Fire",
            epub: true,
            authorId: 1,
            publication: "Jaico",
        },
        {
            id: 2,
            title: "India 2020",
            epub: true,
            authorId: 1,
            publication: "Jaico",
        },
        {
            id: 3,
            title: "Kaizen",
            epub: true,
            authorId: 2,
            publication: "Printwell",
        },
        {
            id: 4,
            title: "Ikigai",
            epub: true,
            authorId: 4,
            publication: "Kindle",
        },
        {
            id: 5,
            title: "Mrutunjay",
            epub: true,
            authorId: 3,
            publication: "Printwell",
        },
    ],
};
