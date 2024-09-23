export const typeDefs = `#graphql
    
    type Query{ 
        posts: [Post!]!
        post(id: ID!): Post
        comments: [Comment!]!

    }

    type userVote {
        userId: ID!
        oostId: ID!
        vote: Boolean!
    }

    type Post {
        postId: ID!
        userId: ID!
        postVotes: [postVote]!
        title: String!
        content: String!
        comments: [Comment!]!
        
    }

    type Comment{
        commentId: ID!
        userId: ID!
        postId: ID!
        content: String!
        commentVotes: commentVote!
    }

    type postVote{
        postVoteId: ID!
        postId: ID!
        upVote: Int!
        downVote: Int!
    }

    type commentVote{
        commentVoteId: ID
        postId: ID
        upVote: Int
        downVote: Int
    }

`