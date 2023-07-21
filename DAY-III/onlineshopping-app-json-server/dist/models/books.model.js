export class BookModel {
    constructor(id = 0, title = "", epub = false, authorId = 0, publication = "") {
        this.id = id;
        this.title = title;
        this.epub = epub;
        this.authorId = authorId;
        this.publication = publication;
    }
}
