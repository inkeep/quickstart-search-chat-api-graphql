import WebSocket from 'ws';
import { createClient, fetchExchange, subscriptionExchange } from '@urql/core';
import { createClient as createWSClient } from 'graphql-ws';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.INKEEP_API_KEY;

if (!apiKey) {
  throw new Error('INKEEP_API_KEY environment variable is not defined');
}

const authorizationHeader = `Bearer ${apiKey}`;

const headersForWs = {
  headers: {
    Authorization: authorizationHeader,
  },
  Authorization: authorizationHeader,
};

const wsClient = createWSClient({
  url: 'wss://api.inkeep.com/graphql',
  webSocketImpl: WebSocket,
  connectionParams: headersForWs,
});

const createInkeepClient = () => {
  return createClient({
    url: 'https://api.inkeep.com/graphql',
    exchanges: [
      fetchExchange,
      subscriptionExchange({
        forwardSubscription: request => ({
          subscribe: sink => {
            const unsubscribeCallback = wsClient.subscribe(
              { ...request, query: request.query || '' },
              sink,
            );

            return {
              unsubscribe: unsubscribeCallback
            };
          },
        }),
      }),
    ],
    fetchOptions: {
      headers: {
        Authorization: authorizationHeader
      },
    },
  });
};

export default createInkeepClient;
