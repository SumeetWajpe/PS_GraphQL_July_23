export const typeDefs = `#graphql

#root-query
type Query{
    books:[Book]
}

type Book{
  id:ID!
  title:String
  epub:Boolean
  author:String
  publication:String
}
`;
