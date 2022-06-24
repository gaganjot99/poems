import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",

  cache: new InMemoryCache(),
});

const query = gql`
  {
    poem(input: "wild eyes") {
      name
      content
      author
    }
  }
`;

// client
//   .query({
//     query: query,
//   })
//   .then((item) => {
//     console.log(item);
//   });

export default client;
