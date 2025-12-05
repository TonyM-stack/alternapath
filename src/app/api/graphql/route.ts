
import { createYoga, createSchema } from "graphql-yoga";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";

const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  graphqlEndpoint: "/api/graphql", // must match route path
  fetchAPI: { Request, Response },
});

export const runtime = "nodejs";

// Wrap Yoga so Next sees a standard `(request: Request) => Response` handler

export async function GET(request: Request) {
  const handler: any = yoga;           // avoid type clash with Yoga's context arg
  return handler(request);
}

export async function POST(request: Request) {
  const handler: any = yoga;
  return handler(request);
}

export async function OPTIONS(request: Request) {
  const handler: any = yoga;
  return handler(request);
}





