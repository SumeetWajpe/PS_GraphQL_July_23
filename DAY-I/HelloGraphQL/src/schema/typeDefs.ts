export const typeDefs = `#graphql

#root-query
type Query{
    books:[Book]
    book(id:ID!):Book
}

type Book{
  id:ID!
  title:String
  epub:Boolean
  author:String
  publication:String
}
`;
