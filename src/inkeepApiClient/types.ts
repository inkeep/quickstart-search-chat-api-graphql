export default {
    "scalars": [
        1,
        2,
        4,
        7,
        9,
        11,
        13,
        17,
        23,
        26,
        29,
        33
    ],
    "types": {
        "BotMessage": {
            "id": [
                1
            ],
            "content": [
                2
            ],
            "citations": [
                6
            ],
            "codeBlocks": [
                3
            ],
            "__typename": [
                2
            ]
        },
        "ID": {},
        "String": {},
        "CodeBlock": {
            "language": [
                4
            ],
            "code": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "CodeLanguage": {},
        "UserMessage": {
            "id": [
                1
            ],
            "content": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ChatCitation": {
            "citationNumber": [
                7
            ],
            "title": [
                2
            ],
            "url": [
                2
            ],
            "rootRecordId": [
                1
            ],
            "rootRecordType": [
                29
            ],
            "__typename": [
                2
            ]
        },
        "Int": {},
        "ChatMessage": {
            "id": [
                1
            ],
            "content": [
                2
            ],
            "on_BotMessage": [
                0
            ],
            "on_UserMessage": [
                5
            ],
            "__typename": [
                2
            ]
        },
        "ChatMode": {},
        "ChatResult": {
            "sessionId": [
                1
            ],
            "message": [
                0
            ],
            "isEnd": [
                11
            ],
            "__typename": [
                2
            ]
        },
        "Boolean": {},
        "ChatSession": {
            "id": [
                1
            ],
            "organizationId": [
                2
            ],
            "messages": [
                8
            ],
            "chatMode": [
                9
            ],
            "outputMode": [
                13
            ],
            "product": [
                2
            ],
            "productVersion": [
                2
            ],
            "isSharedSession": [
                11
            ],
            "__typename": [
                2
            ]
        },
        "OutputMode": {},
        "ContinueChatResultInput": {
            "messageInput": [
                2
            ],
            "sessionId": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "DiscourseRecord": {
            "id": [
                1
            ],
            "url": [
                2
            ],
            "title": [
                2
            ],
            "preview": [
                2
            ],
            "body": [
                2
            ],
            "bodyHtml": [
                2
            ],
            "categoryBreadcrumbs": [
                2
            ],
            "createdAt": [
                17
            ],
            "__typename": [
                2
            ]
        },
        "SearchRootRecord": {
            "id": [
                1
            ],
            "url": [
                2
            ],
            "title": [
                2
            ],
            "preview": [
                2
            ],
            "on_DiscourseRecord": [
                15
            ],
            "on_DocumentationRecord": [
                19
            ],
            "on_GitHubIssueRecord": [
                22
            ],
            "on_StackOverflowRecord": [
                35
            ],
            "__typename": [
                2
            ]
        },
        "DateTime": {},
        "DiscourseHit": {
            "id": [
                1
            ],
            "rootRecord": [
                15
            ],
            "hitOnRoot": [
                11
            ],
            "url": [
                2
            ],
            "title": [
                2
            ],
            "preview": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "DocumentationRecord": {
            "id": [
                1
            ],
            "url": [
                2
            ],
            "title": [
                2
            ],
            "preview": [
                2
            ],
            "pathBreadcrumbs": [
                2
            ],
            "contentType": [
                2
            ],
            "topLevelHeadings": [
                20
            ],
            "firstContentPath": [
                20
            ],
            "firstContent": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "DocumentationContentLevel": {
            "anchor": [
                2
            ],
            "url": [
                2
            ],
            "htmlTag": [
                2
            ],
            "content": [
                2
            ],
            "contentHtml": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "DocumentationHit": {
            "id": [
                1
            ],
            "rootRecord": [
                16
            ],
            "hitOnRoot": [
                11
            ],
            "url": [
                2
            ],
            "title": [
                2
            ],
            "preview": [
                2
            ],
            "pathHeadings": [
                20
            ],
            "content": [
                20
            ],
            "__typename": [
                2
            ]
        },
        "GitHubIssueRecord": {
            "id": [
                1
            ],
            "url": [
                2
            ],
            "title": [
                2
            ],
            "preview": [
                2
            ],
            "body": [
                2
            ],
            "state": [
                23
            ],
            "createdAt": [
                17
            ],
            "commentsWithMostPositiveReactions": [
                24
            ],
            "reactions": [
                25
            ],
            "__typename": [
                2
            ]
        },
        "GitHubIssueState": {},
        "GitHubIssueComment": {
            "id": [
                1
            ],
            "url": [
                2
            ],
            "body": [
                2
            ],
            "commentDate": [
                17
            ],
            "reactions": [
                25
            ],
            "__typename": [
                2
            ]
        },
        "GitHubReaction": {
            "reactionType": [
                26
            ],
            "count": [
                7
            ],
            "__typename": [
                2
            ]
        },
        "ReactionType": {},
        "GitHubIssueHit": {
            "id": [
                1
            ],
            "rootRecord": [
                22
            ],
            "hitOnRoot": [
                11
            ],
            "url": [
                2
            ],
            "title": [
                2
            ],
            "preview": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "NewSessionChatResultInput": {
            "messageInput": [
                2
            ],
            "organizationId": [
                1
            ],
            "integrationId": [
                1
            ],
            "chatMode": [
                9
            ],
            "outputMode": [
                13
            ],
            "product": [
                2
            ],
            "productVersion": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "RecordType": {},
        "SearchFiltersInput": {
            "product": [
                2
            ],
            "productVersion": [
                2
            ],
            "sources": [
                29
            ],
            "limit": [
                7
            ],
            "__typename": [
                2
            ]
        },
        "SearchHit": {
            "id": [
                1
            ],
            "rootRecord": [
                16
            ],
            "hitOnRoot": [
                11
            ],
            "url": [
                2
            ],
            "title": [
                2
            ],
            "preview": [
                2
            ],
            "on_DiscourseHit": [
                18
            ],
            "on_DocumentationHit": [
                21
            ],
            "on_GitHubIssueHit": [
                27
            ],
            "on_StackOverflowHit": [
                37
            ],
            "__typename": [
                2
            ]
        },
        "SearchInput": {
            "searchQuery": [
                2
            ],
            "organizationId": [
                1
            ],
            "integrationId": [
                1
            ],
            "searchMode": [
                33
            ],
            "filters": [
                30
            ],
            "__typename": [
                2
            ]
        },
        "SearchMode": {},
        "SearchResult": {
            "searchHits": [
                31
            ],
            "searchQuery": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "StackOverflowRecord": {
            "id": [
                1
            ],
            "url": [
                2
            ],
            "title": [
                2
            ],
            "preview": [
                2
            ],
            "body": [
                2
            ],
            "bodyHtml": [
                2
            ],
            "tags": [
                2
            ],
            "createdAt": [
                17
            ],
            "topVotedAnswer": [
                36
            ],
            "markedAsCorrectAnswer": [
                36
            ],
            "score": [
                7
            ],
            "__typename": [
                2
            ]
        },
        "StackOverflowAnswer": {
            "id": [
                1
            ],
            "url": [
                2
            ],
            "score": [
                7
            ],
            "content": [
                2
            ],
            "contentHtml": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "StackOverflowHit": {
            "id": [
                1
            ],
            "rootRecord": [
                35
            ],
            "hitOnRoot": [
                11
            ],
            "url": [
                2
            ],
            "title": [
                2
            ],
            "preview": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Query": {
            "search": [
                34,
                {
                    "searchInput": [
                        32,
                        "SearchInput!"
                    ]
                }
            ],
            "getSearchRootRecords": [
                16,
                {
                    "ids": [
                        1,
                        "[ID!]!"
                    ]
                }
            ],
            "getChatSession": [
                12,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "hello": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Mutation": {
            "copyChatSession": [
                1,
                {
                    "sessionId": [
                        1,
                        "ID!"
                    ],
                    "isSharedSession": [
                        11,
                        "Boolean!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Subscription": {
            "continueChatResult": [
                10,
                {
                    "input": [
                        14,
                        "ContinueChatResultInput!"
                    ]
                }
            ],
            "newSessionChatResult": [
                10,
                {
                    "input": [
                        28,
                        "NewSessionChatResultInput!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        }
    }
}