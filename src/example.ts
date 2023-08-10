import createNewChat from './inkeepApi/operations/createNewChat';
import continueExistingChat from './inkeepApi/operations/continueExistingChat';
import { search } from './inkeepApi/operations/search'; // Import the search function
import type { ContinueExistingChatSubscriptionVariables, NewChatSubscriptionVariables, SearchInput } from './inkeepApi/generated/graphql';
import dotenv from 'dotenv';

// Load environment variables from a .env file
dotenv.config();

const organizationId = process.env.INKEEP_ORGANIZATION_ID;
const integrationId = process.env.INKEEP_INTEGRATION_ID;

if (!organizationId || !integrationId) {
  console.error('Error: INKEEP_ORGANIZATION_ID and/or INKEEP_INTEGRATION_ID environment variables are not defined');
  process.exit(1);
}

const runChat = async () => {
  try {

    // **Example 1**: Start new chat
    const input: NewChatSubscriptionVariables = {
      input: {
        messageInput: "How do I get started?",
        organizationId,
        integrationId,
      },
    };

    const result = await createNewChat(input);
    
    console.log('Final Result:', result);

    const sessionId = result.sessionId;

    // **Example 2**: Continue existing chat
    const continueChatInput: ContinueExistingChatSubscriptionVariables = {
      input: {
        messageInput: "Tell me more",
        sessionId
      }
    };

    const continueResult = await continueExistingChat(continueChatInput);

    console.log('Continued Chat Result:', continueResult);

    // **Example 3**: Perform a search query
    const searchInput: SearchInput = {
      searchQuery: "How do I get started?",
      organizationId,
      integrationId,
    };
    
    const searchHits = await search(searchInput);
    
    console.log('Top 5 search results:', searchHits.slice(0, 5));

  } catch (error) {
    console.error('Error:', error);
  }
};

runChat();
