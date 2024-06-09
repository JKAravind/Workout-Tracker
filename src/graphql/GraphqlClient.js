import { GraphQLClient } from "graphql-request";

const endpoint = "https://tigasari.us-east-a.ibm.stepzen.net/api/hardy-starfish/graphql"

const client = new GraphQLClient(endpoint, {
    headers: {
        "Authorization": "apikey tigasari::local.net+1000::e285278982b58a423ed5b19f85a1aed483794c7dc266e6ca30b3dfe7a582cd01"
      }
  });

export default client;