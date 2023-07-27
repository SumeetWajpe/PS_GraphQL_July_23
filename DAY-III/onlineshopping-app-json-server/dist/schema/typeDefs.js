export const typeDefs = `#graphql

#root-query
type Query{
    books:[Book]
    book(id:ID!):BookResult 
    authors:[Author]
    author(id:ID!):Author
}

union BookResult = Book | BookError

type BookError{
  message:String,
  lineNo:Int
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

type Mutation{
  # createAuthor(id:ID!,name:String!,age:Int,noOfBooks:Int):String #without  input types
  createAuthor(input:AuthorInputType!):String

}

input AuthorInputType{
  id:ID!
  name:String!
  age:Int
  noOfBooks:Int
}

`;
