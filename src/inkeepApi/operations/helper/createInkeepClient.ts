import WebSocket, { Data } from "ws";
import {
  createClient,
  fetchExchange,
  subscriptionExchange,
  Client,
  Exchange,
} from "@urql/core";
import { createClient as createWSClient, ClientOptions } from "graphql-ws";
import dotenv from "dotenv";

dotenv.config();

const getApiKey = (overrideApiKey?: string): string => {
  if (overrideApiKey) {
    return overrideApiKey;
  }

  const apiKey = process.env.INKEEP_API_KEY;

  if (!apiKey) {
    throw new Error(
      "INKEEP_API_KEY environment variable is not defined, and no override API key was provided."
    );
  }

  return apiKey;
};

const createAuthorizationHeader = (apiKey: string): string =>
  `Bearer ${apiKey}`;


/**
 * Creates a new instance of the Inkeep client for making API requests.
 *
 * @function createInkeepClient
 * @param {string} [overrideApiKey] - (Optional) An API key to override the default. Useful for multi-tenant scenarios.
 * @returns {Client} - A new instance of the Inkeep client.
 *
 * @example
 * const client = createInkeepClient('your-api-key');
 *
 * @remarks
 * - If the `overrideApiKey` is not provided, the function will look for the default API key from the environment variable `INKEEP_API_KEY`.
 * - For single-tenant applications, it's recommended to set the `INKEEP_API_KEY` environment variable.
 * - The client is configured to use both regular HTTP and WebSocket connections.
 */
const createInkeepClient = (overrideApiKey?: string): Client => {
  // Get the API key, either from the provided override or from environment variables.
  const apiKey = getApiKey(overrideApiKey);

  // Create the Authorization header using the obtained API key.
  const authorizationHeader = createAuthorizationHeader(apiKey);

  // Setup WebSocket client for GraphQL subscriptions.
  const wsClient = createWSClient({
    url: "wss://api.inkeep.com/graphql",
    webSocketImpl: WebSocket as any,
    connectionParams: () => ({
      Authorization: authorizationHeader,
    }),
  });

  // Return the configured Inkeep client.
  return createClient({
    url: "https://api.inkeep.com/graphql",
    exchanges: [
      fetchExchange,
      subscriptionExchange({
        forwardSubscription: (request) => ({
          subscribe: (sink) => {
            const unsubscribeCallback = wsClient.subscribe(
              { ...request, query: request.query || "" },
              sink
            );

            return {
              unsubscribe: unsubscribeCallback,
            };
          },
        }),
      }),
    ],
    fetchOptions: {
      headers: {
        Authorization: authorizationHeader,
      },
    },
  });
};

export default createInkeepClient;
