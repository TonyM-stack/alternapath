import { createYoga, createSchema } from "graphql-yoga";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";


const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  graphqlEndpoint: "/api/graphql",   // must match this route’s path
  // GraphiQL is auto-enabled in dev; you can force it:
  // graphiql: true,
});

// Export web handlers so Next can respond to GET/POST/OPTIONS
export { yoga as GET, yoga as POST, yoga as OPTIONS };


export const runtime = "nodejs"; // or "edge"



