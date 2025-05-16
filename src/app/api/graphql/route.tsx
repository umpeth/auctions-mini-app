import { NextRequest, NextResponse } from "next/server";
import { GraphQLClient } from "graphql-request";

const GQL_CLIENT = new GraphQLClient(process.env.GRAPH_ENDPOINT as string);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { document, variables } = body;

    if (!document) {
      return NextResponse.json(
        { error: "GraphQL document is required" },
        { status: 400 },
      );
    }

    const result = await GQL_CLIENT.request(document, variables || {});
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in GraphQL route:", JSON.stringify(error, null, 2));
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
