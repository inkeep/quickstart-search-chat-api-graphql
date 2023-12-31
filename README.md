# Quick Start Guide for Inkeep Search and Chat API

This repository serves as a quick start guide to using Inkeep's AI search and chat APIs. It's tailored for a Node.js TypeScript environment and contains examples, but should generalize to any JavaScript based client. See the [URQL documentation](https://formidable.com/open-source/urql/docs/) for details on how to use the client with platform-specific bindings for React, Vue, Svelte, server-side rendered apps, and others.

## Requirements

- Node.js (v14+)
- Bun (`npm install -g bun`)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/inkeep/quickstart-search-chat-api-graphql.git
   cd quickstart-search-chat-api-graphql
   ```

2. **Install the dependencies**

   ```bash
   bun install
   ```

3. **Configure Environment Variables**
   Make sure to create a `.env` file at the root of the project and define the following variables:

   ```env
    INKEEP_ORGANIZATION_ID=<your-organization-id>
    INKEEP_INTEGRATION_ID=<your-integration-id>
    INKEEP_API_KEY=<your-api-key>
    INKEEP_CHAT_MODE=Turbo
   ```

    INKEEP_CHAT_MODE is optional and useful to set to `Turbo` in development environments for quicker iteration.

4. **Generate TypeScript Types**
   **If you change or add any GraphQL query, mutation, or subscription**, run the below to re-generate TypeScript types:

   ```bash
   bun inkeep-chat-api-codegen
   ```

    This only looks for operations within the `./inkeepApi` folder. We generally recommend putting all Inkeep API operations in that folder.

5. **Run the Example**

   ```bash
   bun dev
   ```

## Documentation and GraphQL Playground

You can learn more about the Inkeep search and chat API at [docs.inkeep.com](https://docs.inkeep.com/inkeep-api/using-the-graphql-playground) or try out the playground and view possible input parameters and return types at [api.inkeep.com/graphql](https://api.inkeep.com/graphql).

There's three types of operations in GraphQL: `query`, `mutation`, and `subscription`. Chat messages are done over websockets via GraphQL subscriptions. Search and other operations are done via `query`.

## Understanding the Code

### main.ts

The `src/main.ts` file demonstrates how to leverage helper functions for calling the API. These functions are not necessary for every single API call; you can use the GraphQL and `gql` pattern in your own business logic as needed.

### package.json Scripts

- `dev`: Run the dev TypeScript file to see how to interact with the API.
- `inkeep-chat-api-codegen`: Generates TypeScript types for GraphQL queries and mutations.
- `inkeep-generate-sdl`: Generates SDL for Inkeep's GraphQL schema.

## Dependencies

- **URQL**: A lightweight GraphQL client for sending queries, mutations, and subscriptions. Has bindings and utilities for a variety of client types.
- **`graphql-ws`**: A library for handling GraphQL WebSocket subscriptions, used for streaming chat sessions.
- **`ws`**: A WebSocket library used by `graphql-ws` for bidirectional communication over TCP (specific to Node.js environments).
- **`dotenv`**: Loads environment variables from a `.env` file into `process.env` (specific to Node.js environments).

## Example Operations

This repository provides convenient helper functions to interact with Inkeep's API for the most common scenarios:

1. **Starting a New Chat**: This allows you to initiate a new chat session. The helper function involved is `createNewChat`, which takes in session details and returns the chat result, including messages, citations, and the session ID.

2. **Continuing an Existing Chat**: If you'd like to continue an existing chat, you can use the `continueExistingChat` function. This takes in the current session ID and the message input, returning the continued chat results.

3. **Performing a Search**: You can also search the Inkeep database using the `search` function. This takes in a search input and returns search results, including hit IDs, URLs, and titles.

The chat examples were done in a way to only resolve once the chat response has been fully streamed back. This can be easily modified if you have a UX that requires streaming.

If you are calling this from a backend and are looking to stream it to a front-end, you can do so via GraphQL subscriptions as well or HTTPS SSE protocol, whatever works best for your server.

_You should customize these functions to match the exact fields in the output that you require. You can use similar patterns to call any endpoint in the API._

### Timeouts in Chat Operations

For chat operations, the helper functions include built-in timeout handling as described below. The exact durations are configurabl in `timeouts.ts`.

- **First Response Timeout**: If no response is received within 30 seconds (`FIRST_RESPONSE_TIMEOUT`) of initiating or continuing a chat, an error is logged, and the operation is rejected. This ensures that chat sessions don't hang indefinitely if there's an unforeseen delay or issue starting the stream of a response.

- **Complete Response Timeout**: After initiating or continuing a chat, if the chat doesn't reach its end within 180 seconds (`COMPLETE_RESPONSE_TIMEOUT`), a warning is logged, the current subscription is unsubscribed, and the operation is rejected. This acts as a safety measure to not keep sessions lingering for too long without activity.

## Contributing

Feel free to contribute to this project by submitting issues, pull requests or by providing feedback.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
