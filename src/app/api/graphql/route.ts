import { createYoga, createSchema } from "graphql-yoga";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";

const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  graphqlEndpoint: "/api/graphql", // must match this route’s path
  fetchAPI: { Request, Response }, // helps Yoga work in this runtime
});

// Yoga exposes a fetch-style handler function
const { handleRequest } = yoga;

// Export handler functions so Next can respond to GET/POST/OPTIONS
export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS };

export const runtime = "nodejs"; // or "edge" if you prefer




