export class AuthorModel {
  constructor(
    public id: number = 0,
    public name = "",
    public age = 0,
    public noOfBooks = 0,
  ) {}
}
type AuthorsData = {
  authors: AuthorModel[];
};
export let authorsData: AuthorsData = {
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
