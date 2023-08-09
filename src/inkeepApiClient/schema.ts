// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    ID: string,
    String: string,
    Int: number,
    Boolean: boolean,
    DateTime: any,
}

export interface BotMessage {
    id: Scalars['ID']
    content: Scalars['String']
    citations: ChatCitation[]
    codeBlocks: (CodeBlock[] | null)
    __typename: 'BotMessage'
}

export interface CodeBlock {
    language: CodeLanguage
    code: Scalars['String']
    __typename: 'CodeBlock'
}

export type CodeLanguage = 'SQL' | 'PYTHON' | 'UNDEFINED'

export interface UserMessage {
    id: Scalars['ID']
    content: Scalars['String']
    __typename: 'UserMessage'
}

export interface ChatCitation {
    citationNumber: Scalars['Int']
    title: (Scalars['String'] | null)
    url: Scalars['String']
    rootRecordId: (Scalars['ID'] | null)
    rootRecordType: (RecordType | null)
    __typename: 'ChatCitation'
}

export type ChatMessage = (BotMessage | UserMessage) & { __isUnion?: true }

export type ChatMode = 'TURBO' | 'AUTO'

export interface ChatResult {
    sessionId: Scalars['ID']
    message: BotMessage
    isEnd: Scalars['Boolean']
    __typename: 'ChatResult'
}

export interface ChatSession {
    id: Scalars['ID']
    organizationId: Scalars['String']
    messages: ChatMessage[]
    chatMode: ChatMode
    outputMode: OutputMode
    product: (Scalars['String'] | null)
    productVersion: (Scalars['String'] | null)
    isSharedSession: Scalars['Boolean']
    __typename: 'ChatSession'
}

export type OutputMode = 'DEFAULT' | 'SQL' | 'PYTHON' | 'CODE'

export interface DiscourseRecord {
    id: Scalars['ID']
    url: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    preview: (Scalars['String'] | null)
    body: (Scalars['String'] | null)
    bodyHtml: (Scalars['String'] | null)
    categoryBreadcrumbs: Scalars['String'][]
    createdAt: Scalars['DateTime']
    __typename: 'DiscourseRecord'
}

export type SearchRootRecord = (DiscourseRecord | DocumentationRecord | GitHubIssueRecord | StackOverflowRecord) & { __isUnion?: true }

export interface DiscourseHit {
    id: Scalars['ID']
    rootRecord: DiscourseRecord
    hitOnRoot: Scalars['Boolean']
    url: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    preview: (Scalars['String'] | null)
    __typename: 'DiscourseHit'
}

export interface DocumentationRecord {
    id: Scalars['ID']
    url: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    preview: (Scalars['String'] | null)
    pathBreadcrumbs: (Scalars['String'][] | null)
    contentType: Scalars['String']
    topLevelHeadings: DocumentationContentLevel[]
    firstContentPath: DocumentationContentLevel[]
    firstContent: Scalars['String']
    __typename: 'DocumentationRecord'
}

export interface DocumentationContentLevel {
    anchor: (Scalars['String'] | null)
    url: (Scalars['String'] | null)
    htmlTag: Scalars['String']
    content: Scalars['String']
    contentHtml: Scalars['String']
    __typename: 'DocumentationContentLevel'
}

export interface DocumentationHit {
    id: Scalars['ID']
    rootRecord: SearchRootRecord
    hitOnRoot: Scalars['Boolean']
    url: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    preview: (Scalars['String'] | null)
    pathHeadings: DocumentationContentLevel[]
    content: DocumentationContentLevel
    __typename: 'DocumentationHit'
}

export interface GitHubIssueRecord {
    id: Scalars['ID']
    url: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    preview: (Scalars['String'] | null)
    body: (Scalars['String'] | null)
    state: GitHubIssueState
    createdAt: Scalars['DateTime']
    commentsWithMostPositiveReactions: GitHubIssueComment[]
    reactions: GitHubReaction[]
    __typename: 'GitHubIssueRecord'
}

export type GitHubIssueState = 'CLOSED' | 'OPEN'

export interface GitHubIssueComment {
    id: Scalars['ID']
    url: Scalars['String']
    body: (Scalars['String'] | null)
    commentDate: Scalars['DateTime']
    reactions: GitHubReaction[]
    __typename: 'GitHubIssueComment'
}

export interface GitHubReaction {
    reactionType: ReactionType
    count: Scalars['Int']
    __typename: 'GitHubReaction'
}

export type ReactionType = 'PLUS_ONE' | 'MINUS_ONE' | 'LAUGH' | 'CONFUSED' | 'HEART' | 'HOORAY' | 'ROCKET' | 'EYES'

export interface GitHubIssueHit {
    id: Scalars['ID']
    rootRecord: GitHubIssueRecord
    hitOnRoot: Scalars['Boolean']
    url: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    preview: (Scalars['String'] | null)
    __typename: 'GitHubIssueHit'
}

export type RecordType = 'DOCUMENTATION' | 'GITHUB_ISSUE' | 'DISCOURSE' | 'STACKOVERFLOW'

export type SearchHit = (DiscourseHit | DocumentationHit | GitHubIssueHit | StackOverflowHit) & { __isUnion?: true }

export type SearchMode = 'AUTO' | 'KEYWORD' | 'INTELLIGENT'

export interface SearchResult {
    searchHits: SearchHit[]
    searchQuery: Scalars['String']
    __typename: 'SearchResult'
}

export interface StackOverflowRecord {
    id: Scalars['ID']
    url: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    preview: (Scalars['String'] | null)
    body: (Scalars['String'] | null)
    bodyHtml: (Scalars['String'] | null)
    tags: Scalars['String'][]
    createdAt: Scalars['DateTime']
    topVotedAnswer: (StackOverflowAnswer | null)
    markedAsCorrectAnswer: (StackOverflowAnswer | null)
    score: Scalars['Int']
    __typename: 'StackOverflowRecord'
}

export interface StackOverflowAnswer {
    id: Scalars['ID']
    url: Scalars['String']
    score: Scalars['Int']
    content: Scalars['String']
    contentHtml: Scalars['String']
    __typename: 'StackOverflowAnswer'
}

export interface StackOverflowHit {
    id: Scalars['ID']
    rootRecord: StackOverflowRecord
    hitOnRoot: Scalars['Boolean']
    url: (Scalars['String'] | null)
    title: (Scalars['String'] | null)
    preview: (Scalars['String'] | null)
    __typename: 'StackOverflowHit'
}

export interface Query {
    search: SearchResult
    getSearchRootRecords: SearchRootRecord[]
    getChatSession: ChatSession
    hello: (Scalars['String'] | null)
    __typename: 'Query'
}

export interface Mutation {
    copyChatSession: Scalars['ID']
    __typename: 'Mutation'
}

export interface Subscription {
    continueChatResult: ChatResult
    newSessionChatResult: ChatResult
    __typename: 'Subscription'
}

export interface BotMessageGenqlSelection{
    id?: boolean | number
    content?: boolean | number
    citations?: ChatCitationGenqlSelection
    codeBlocks?: CodeBlockGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CodeBlockGenqlSelection{
    language?: boolean | number
    code?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserMessageGenqlSelection{
    id?: boolean | number
    content?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChatCitationGenqlSelection{
    citationNumber?: boolean | number
    title?: boolean | number
    url?: boolean | number
    rootRecordId?: boolean | number
    rootRecordType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChatMessageGenqlSelection{
    id?: boolean | number
    content?: boolean | number
    on_BotMessage?: BotMessageGenqlSelection
    on_UserMessage?: UserMessageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChatResultGenqlSelection{
    sessionId?: boolean | number
    message?: BotMessageGenqlSelection
    isEnd?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ChatSessionGenqlSelection{
    id?: boolean | number
    organizationId?: boolean | number
    messages?: ChatMessageGenqlSelection
    chatMode?: boolean | number
    outputMode?: boolean | number
    product?: boolean | number
    productVersion?: boolean | number
    isSharedSession?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ContinueChatResultInput {messageInput: Scalars['String'],sessionId: Scalars['ID']}

export interface DiscourseRecordGenqlSelection{
    id?: boolean | number
    url?: boolean | number
    title?: boolean | number
    preview?: boolean | number
    body?: boolean | number
    bodyHtml?: boolean | number
    categoryBreadcrumbs?: boolean | number
    createdAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchRootRecordGenqlSelection{
    id?: boolean | number
    url?: boolean | number
    title?: boolean | number
    preview?: boolean | number
    on_DiscourseRecord?: DiscourseRecordGenqlSelection
    on_DocumentationRecord?: DocumentationRecordGenqlSelection
    on_GitHubIssueRecord?: GitHubIssueRecordGenqlSelection
    on_StackOverflowRecord?: StackOverflowRecordGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DiscourseHitGenqlSelection{
    id?: boolean | number
    rootRecord?: DiscourseRecordGenqlSelection
    hitOnRoot?: boolean | number
    url?: boolean | number
    title?: boolean | number
    preview?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DocumentationRecordGenqlSelection{
    id?: boolean | number
    url?: boolean | number
    title?: boolean | number
    preview?: boolean | number
    pathBreadcrumbs?: boolean | number
    contentType?: boolean | number
    topLevelHeadings?: DocumentationContentLevelGenqlSelection
    firstContentPath?: DocumentationContentLevelGenqlSelection
    firstContent?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DocumentationContentLevelGenqlSelection{
    anchor?: boolean | number
    url?: boolean | number
    htmlTag?: boolean | number
    content?: boolean | number
    contentHtml?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DocumentationHitGenqlSelection{
    id?: boolean | number
    rootRecord?: SearchRootRecordGenqlSelection
    hitOnRoot?: boolean | number
    url?: boolean | number
    title?: boolean | number
    preview?: boolean | number
    pathHeadings?: DocumentationContentLevelGenqlSelection
    content?: DocumentationContentLevelGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GitHubIssueRecordGenqlSelection{
    id?: boolean | number
    url?: boolean | number
    title?: boolean | number
    preview?: boolean | number
    body?: boolean | number
    state?: boolean | number
    createdAt?: boolean | number
    commentsWithMostPositiveReactions?: GitHubIssueCommentGenqlSelection
    reactions?: GitHubReactionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GitHubIssueCommentGenqlSelection{
    id?: boolean | number
    url?: boolean | number
    body?: boolean | number
    commentDate?: boolean | number
    reactions?: GitHubReactionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GitHubReactionGenqlSelection{
    reactionType?: boolean | number
    count?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GitHubIssueHitGenqlSelection{
    id?: boolean | number
    rootRecord?: GitHubIssueRecordGenqlSelection
    hitOnRoot?: boolean | number
    url?: boolean | number
    title?: boolean | number
    preview?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NewSessionChatResultInput {messageInput: Scalars['String'],organizationId?: (Scalars['ID'] | null),integrationId?: (Scalars['ID'] | null),chatMode?: (ChatMode | null),outputMode?: (OutputMode | null),product?: (Scalars['String'] | null),productVersion?: (Scalars['String'] | null)}

export interface SearchFiltersInput {product?: (Scalars['String'] | null),productVersion?: (Scalars['String'] | null),sources?: (RecordType[] | null),limit?: (Scalars['Int'] | null)}

export interface SearchHitGenqlSelection{
    id?: boolean | number
    rootRecord?: SearchRootRecordGenqlSelection
    hitOnRoot?: boolean | number
    url?: boolean | number
    title?: boolean | number
    preview?: boolean | number
    on_DiscourseHit?: DiscourseHitGenqlSelection
    on_DocumentationHit?: DocumentationHitGenqlSelection
    on_GitHubIssueHit?: GitHubIssueHitGenqlSelection
    on_StackOverflowHit?: StackOverflowHitGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SearchInput {searchQuery: Scalars['String'],organizationId?: (Scalars['ID'] | null),integrationId?: (Scalars['ID'] | null),searchMode?: (SearchMode | null),filters?: (SearchFiltersInput | null)}

export interface SearchResultGenqlSelection{
    searchHits?: SearchHitGenqlSelection
    searchQuery?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StackOverflowRecordGenqlSelection{
    id?: boolean | number
    url?: boolean | number
    title?: boolean | number
    preview?: boolean | number
    body?: boolean | number
    bodyHtml?: boolean | number
    tags?: boolean | number
    createdAt?: boolean | number
    topVotedAnswer?: StackOverflowAnswerGenqlSelection
    markedAsCorrectAnswer?: StackOverflowAnswerGenqlSelection
    score?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StackOverflowAnswerGenqlSelection{
    id?: boolean | number
    url?: boolean | number
    score?: boolean | number
    content?: boolean | number
    contentHtml?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StackOverflowHitGenqlSelection{
    id?: boolean | number
    rootRecord?: StackOverflowRecordGenqlSelection
    hitOnRoot?: boolean | number
    url?: boolean | number
    title?: boolean | number
    preview?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryGenqlSelection{
    search?: (SearchResultGenqlSelection & { __args: {searchInput: SearchInput} })
    getSearchRootRecords?: (SearchRootRecordGenqlSelection & { __args: {ids: Scalars['ID'][]} })
    getChatSession?: (ChatSessionGenqlSelection & { __args: {id: Scalars['ID']} })
    hello?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    copyChatSession?: { __args: {sessionId: Scalars['ID'], isSharedSession: Scalars['Boolean']} }
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubscriptionGenqlSelection{
    continueChatResult?: (ChatResultGenqlSelection & { __args: {input: ContinueChatResultInput} })
    newSessionChatResult?: (ChatResultGenqlSelection & { __args: {input: NewSessionChatResultInput} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const BotMessage_possibleTypes: string[] = ['BotMessage']
    export const isBotMessage = (obj?: { __typename?: any } | null): obj is BotMessage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBotMessage"')
      return BotMessage_possibleTypes.includes(obj.__typename)
    }
    


    const CodeBlock_possibleTypes: string[] = ['CodeBlock']
    export const isCodeBlock = (obj?: { __typename?: any } | null): obj is CodeBlock => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCodeBlock"')
      return CodeBlock_possibleTypes.includes(obj.__typename)
    }
    


    const UserMessage_possibleTypes: string[] = ['UserMessage']
    export const isUserMessage = (obj?: { __typename?: any } | null): obj is UserMessage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserMessage"')
      return UserMessage_possibleTypes.includes(obj.__typename)
    }
    


    const ChatCitation_possibleTypes: string[] = ['ChatCitation']
    export const isChatCitation = (obj?: { __typename?: any } | null): obj is ChatCitation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatCitation"')
      return ChatCitation_possibleTypes.includes(obj.__typename)
    }
    


    const ChatMessage_possibleTypes: string[] = ['BotMessage','UserMessage']
    export const isChatMessage = (obj?: { __typename?: any } | null): obj is ChatMessage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatMessage"')
      return ChatMessage_possibleTypes.includes(obj.__typename)
    }
    


    const ChatResult_possibleTypes: string[] = ['ChatResult']
    export const isChatResult = (obj?: { __typename?: any } | null): obj is ChatResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatResult"')
      return ChatResult_possibleTypes.includes(obj.__typename)
    }
    


    const ChatSession_possibleTypes: string[] = ['ChatSession']
    export const isChatSession = (obj?: { __typename?: any } | null): obj is ChatSession => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isChatSession"')
      return ChatSession_possibleTypes.includes(obj.__typename)
    }
    


    const DiscourseRecord_possibleTypes: string[] = ['DiscourseRecord']
    export const isDiscourseRecord = (obj?: { __typename?: any } | null): obj is DiscourseRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDiscourseRecord"')
      return DiscourseRecord_possibleTypes.includes(obj.__typename)
    }
    


    const SearchRootRecord_possibleTypes: string[] = ['DiscourseRecord','DocumentationRecord','GitHubIssueRecord','StackOverflowRecord']
    export const isSearchRootRecord = (obj?: { __typename?: any } | null): obj is SearchRootRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchRootRecord"')
      return SearchRootRecord_possibleTypes.includes(obj.__typename)
    }
    


    const DiscourseHit_possibleTypes: string[] = ['DiscourseHit']
    export const isDiscourseHit = (obj?: { __typename?: any } | null): obj is DiscourseHit => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDiscourseHit"')
      return DiscourseHit_possibleTypes.includes(obj.__typename)
    }
    


    const DocumentationRecord_possibleTypes: string[] = ['DocumentationRecord']
    export const isDocumentationRecord = (obj?: { __typename?: any } | null): obj is DocumentationRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDocumentationRecord"')
      return DocumentationRecord_possibleTypes.includes(obj.__typename)
    }
    


    const DocumentationContentLevel_possibleTypes: string[] = ['DocumentationContentLevel']
    export const isDocumentationContentLevel = (obj?: { __typename?: any } | null): obj is DocumentationContentLevel => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDocumentationContentLevel"')
      return DocumentationContentLevel_possibleTypes.includes(obj.__typename)
    }
    


    const DocumentationHit_possibleTypes: string[] = ['DocumentationHit']
    export const isDocumentationHit = (obj?: { __typename?: any } | null): obj is DocumentationHit => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDocumentationHit"')
      return DocumentationHit_possibleTypes.includes(obj.__typename)
    }
    


    const GitHubIssueRecord_possibleTypes: string[] = ['GitHubIssueRecord']
    export const isGitHubIssueRecord = (obj?: { __typename?: any } | null): obj is GitHubIssueRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGitHubIssueRecord"')
      return GitHubIssueRecord_possibleTypes.includes(obj.__typename)
    }
    


    const GitHubIssueComment_possibleTypes: string[] = ['GitHubIssueComment']
    export const isGitHubIssueComment = (obj?: { __typename?: any } | null): obj is GitHubIssueComment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGitHubIssueComment"')
      return GitHubIssueComment_possibleTypes.includes(obj.__typename)
    }
    


    const GitHubReaction_possibleTypes: string[] = ['GitHubReaction']
    export const isGitHubReaction = (obj?: { __typename?: any } | null): obj is GitHubReaction => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGitHubReaction"')
      return GitHubReaction_possibleTypes.includes(obj.__typename)
    }
    


    const GitHubIssueHit_possibleTypes: string[] = ['GitHubIssueHit']
    export const isGitHubIssueHit = (obj?: { __typename?: any } | null): obj is GitHubIssueHit => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGitHubIssueHit"')
      return GitHubIssueHit_possibleTypes.includes(obj.__typename)
    }
    


    const SearchHit_possibleTypes: string[] = ['DiscourseHit','DocumentationHit','GitHubIssueHit','StackOverflowHit']
    export const isSearchHit = (obj?: { __typename?: any } | null): obj is SearchHit => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchHit"')
      return SearchHit_possibleTypes.includes(obj.__typename)
    }
    


    const SearchResult_possibleTypes: string[] = ['SearchResult']
    export const isSearchResult = (obj?: { __typename?: any } | null): obj is SearchResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSearchResult"')
      return SearchResult_possibleTypes.includes(obj.__typename)
    }
    


    const StackOverflowRecord_possibleTypes: string[] = ['StackOverflowRecord']
    export const isStackOverflowRecord = (obj?: { __typename?: any } | null): obj is StackOverflowRecord => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStackOverflowRecord"')
      return StackOverflowRecord_possibleTypes.includes(obj.__typename)
    }
    


    const StackOverflowAnswer_possibleTypes: string[] = ['StackOverflowAnswer']
    export const isStackOverflowAnswer = (obj?: { __typename?: any } | null): obj is StackOverflowAnswer => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStackOverflowAnswer"')
      return StackOverflowAnswer_possibleTypes.includes(obj.__typename)
    }
    


    const StackOverflowHit_possibleTypes: string[] = ['StackOverflowHit']
    export const isStackOverflowHit = (obj?: { __typename?: any } | null): obj is StackOverflowHit => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isStackOverflowHit"')
      return StackOverflowHit_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Subscription_possibleTypes: string[] = ['Subscription']
    export const isSubscription = (obj?: { __typename?: any } | null): obj is Subscription => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubscription"')
      return Subscription_possibleTypes.includes(obj.__typename)
    }
    

export const enumCodeLanguage = {
   SQL: 'SQL' as const,
   PYTHON: 'PYTHON' as const,
   UNDEFINED: 'UNDEFINED' as const
}

export const enumChatMode = {
   TURBO: 'TURBO' as const,
   AUTO: 'AUTO' as const
}

export const enumOutputMode = {
   DEFAULT: 'DEFAULT' as const,
   SQL: 'SQL' as const,
   PYTHON: 'PYTHON' as const,
   CODE: 'CODE' as const
}

export const enumGitHubIssueState = {
   CLOSED: 'CLOSED' as const,
   OPEN: 'OPEN' as const
}

export const enumReactionType = {
   PLUS_ONE: 'PLUS_ONE' as const,
   MINUS_ONE: 'MINUS_ONE' as const,
   LAUGH: 'LAUGH' as const,
   CONFUSED: 'CONFUSED' as const,
   HEART: 'HEART' as const,
   HOORAY: 'HOORAY' as const,
   ROCKET: 'ROCKET' as const,
   EYES: 'EYES' as const
}

export const enumRecordType = {
   DOCUMENTATION: 'DOCUMENTATION' as const,
   GITHUB_ISSUE: 'GITHUB_ISSUE' as const,
   DISCOURSE: 'DISCOURSE' as const,
   STACKOVERFLOW: 'STACKOVERFLOW' as const
}

export const enumSearchMode = {
   AUTO: 'AUTO' as const,
   KEYWORD: 'KEYWORD' as const,
   INTELLIGENT: 'INTELLIGENT' as const
}
