import { createClient as createWsClient } from "graphql-ws";
import { generateSubscriptionOp } from "./inkeepApiClient/index";

const INKEEP_ORGANIZATION_ID = process.env.INKEEP_ORGANIZATION_ID;
const INKEEP_INTEGRATION_ID = process.env.INKEEP_INTEGRATION_ID;

const subscribeToNewSessionChatResult = async () => {
  const client = createWsClient({
    url: "ws://api.inkeep.com/graphql",
  });

  const { query, variables } = generateSubscriptionOp({
    newSessionChatResult: {
      __args: {
        input: {
          messageInput: "How do I get started",
          organizationId: INKEEP_ORGANIZATION_ID,
          integrationId: INKEEP_INTEGRATION_ID,
        },
      },
      isEnd: true,
      message: {
        content: true,
        id: true,
        citations: {
          title: true,
          url: true,
        },
      },
      sessionId: true,
    },
  });

  return new Promise<void>((resolve, reject) => {
    client.subscribe(
      { query, variables },
      {
        next: (data) => {
          if (data?.data?.newSessionChatResult?.isEnd) {
            console.log("Session ended:", data);
            resolve();
          } else {
            console.log("Received data:", data);
          }
        },
        error: (err) => {
          console.error("An error occurred while subscribing:", err);
          reject(err);
        },
        complete: () => {
          console.log("Subscription completed");
          resolve();
        },
      }
    );
  });
};

// Example usage
subscribeToNewSessionChatResult()
  .then(() => console.log("Subscription finished"))
  .catch((err) => console.error("An error occurred:", err));
