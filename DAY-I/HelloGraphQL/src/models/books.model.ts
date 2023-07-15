export class BookModel {
  constructor(
    public id = 0,
    public title = "",
    public epub = false,
    public author = "",
    public publication = "",
  ) {}
}

type BooksData = {
  books: BookModel[];
};

export let booksData: BooksData = {
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
