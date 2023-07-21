export class BookModel {
  constructor(
    public id = 0,
    public title = "",
    public epub = false,
    public authorId = 0,
    public publication = "",
  ) {}
}
