export const typeDefs = `#graphql

#root-query
type Query{
    # books:[Book]
    # book(id:ID!):Book
    authors:[Author]
    # author(id:ID!):Author
}

type Book{
  id:ID!
  title:String
  epub:Boolean
  author:Author
  publication:String
}
type Author{
  id:ID!
  name:String
  age:Int
  noOfBooks:Int
}

`;
