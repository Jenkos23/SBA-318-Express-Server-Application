const commentData = [
    {
        id: 1,
        userId: 1,
        postId: 1,
        content: "This is a thoughtful comment on post 1 by user 1. I really enjoyed reading this!",
        createdAt: "2023-01-01T12:00:00Z",
        updatedAt: "2023-01-02T15:30:00Z",
        user: {
            username: "john_doe",
            email: "john@example.com",
            avatar: "https://example.com/avatars/john_doe.png"
        },
        likes: 4,
        replies: []  
    },
    {
        id: 2,
        userId: 1,
        postId: 2,
        content: "Great perspective! I never thought about it this way.",
        createdAt: "2023-01-02T08:45:00Z",
        updatedAt: "2023-01-03T09:00:00Z",
        user: {
            username: "john_doe",
            email: "john@example.com",
            avatar: "https://example.com/avatars/john_doe.png"
        },
        likes: 2,
        replies: [
            {
                userId: 3,
                content: "I agree! It's interesting to see different viewpoints.",
                createdAt: "2023-01-02T09:15:00Z"
            }
        ]
    },
    {
        id: 3,
        userId: 2,
        postId: 1,
        content: "I completely disagree with the point made here. More evidence is needed.",
        createdAt: "2023-01-03T11:00:00Z",
        updatedAt: null,
        user: {
            username: "jane_smith",
            email: "jane@example.com",
            avatar: "https://example.com/avatars/jane_smith.png"
        },
        likes: 1,
        replies: []
    },
    {
        id: 4,
        userId: 2,
        postId: 3,
        content: "This is a favorite of mine! I often come back to it.",
        createdAt: "2023-01-04T08:20:00Z",
        updatedAt: "2023-01-04T10:00:00Z",
        user: {
            username: "jane_smith",
            email: "jane@example.com",
            avatar: "https://example.com/avatars/jane_smith.png"
        },
        likes: 5,
        replies: [
            {
                userId: 1,
                content: "I'm glad you like it! It truly is insightful .",
                createdAt: "2023-01-04T10:05:00Z"
            }
        ]
    },
    {
        id: 5,
        userId: 3,
        postId: 1,
        content: "Can someone clarify the main idea of this post? I'm a bit confused and I disagree with Jonna.",
        createdAt: "2023-01-05T09:00:00Z",
        updatedAt: null,
        user: {
            username: "alice_the_reader",
            email: "alice@example.com",
            avatar: "https://example.com/avatars/alice_the_reader.png"
        },
        likes: 0,
        replies: []
    }
];



module.exports = commentData;