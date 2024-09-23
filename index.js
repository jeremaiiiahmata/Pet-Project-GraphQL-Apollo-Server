import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'

//db 
import db from "./_db.js";

//types
import { typeDefs } from "./typeDef.js";

// server setup
const PORT = 3030;

const resolvers = { 
    Query: { // root type - defined in the typeDef.js
        posts(){
            return db.posts
        },

        post(parent, args, context){
            return db.posts.find((post) => post.postId === args.id);
        }
    },

    Post: {
        comments(parent){
            return db.comments.filter((comment) => comment.postId === parent.postId)
        },

        postVotes(parent){
            return db.postVotes.filter((vote) => vote.postId === parent.postId)
        }
    },

    Comment: {
        commentVotes(parent){
            return db.commentVotes.find((commentVote) => commentVote.commentId === parent.commentId)
        }
    }




    
    // Game: { //the object name should be the same with its type name, in this case, the 'Game' type (fig 1.1). this is the type and we're creating
    //     // a function that will get the reviews of a specific game.
    //     reviews(parent) { // parent is the reference to the value returned by the previous parent resolver, in this case the game() resolver func.

    //         return db.reviews.filter((review) => review.game_id === parent.id);
    //         // this checks each element in the array. 
    //         // the (review) parameter will handle each element, and checks it game_id and compare it to the id of the parent (game_id).
    //     }
    // },

    // Author: { // the object name is Author, just like in the typeDef (fig 1.2). this is the type and we're creting a function for how
    //     // will we get the reviews of a certain author
    //     reviews(parent){ // calls the resolver function, passing the parent parameter (which is the author)
    //         return db.reviews.filter((review) => review.author_id === parent.id);
    //     }
    // },

    // Review: { // the object is Review, same as the typeDef (fig 1.3). this is the type and we're creating a function where we will
    //     // get the specific game for a certain review. 
    //     game(parent){ // call the game resolver function, passing the parent parameter (reviews)
    //         return db.games.find((game) => game.id === parent.game_id); // traverses through the game array, and checks if the game_id of the array
    //         // is the same as the game_id of the parent (review), the review object must contain a game_id. if there is none, it won't return anything.

    //         // returns the first element that matches the condition. 
    //     }
    // }
}

// takes in an object as an argument and expects 2 properties

const server = new ApolloServer({ 
    typeDefs, 
    resolvers
})

    // 2 PROPERTIES :   
  //1. typeDef - type definitions (descriptions of our data types and relationship they have with other data types) -- schema
        // - definitions of types of data we want to expose on our graph. 
        // relationships, properties of the type
        // Example : Typedef of Author dataype : 
             // name, bio, id, age

    //2. Resolver - bunch of resolver functions that determine how will we respond to queries for different data on the graph. -- resolvers
        // - handle any incoming request and return the data to the client
    

const { url } = await startStandaloneServer(server, {
    listen : {port : 3030}
});

console.log(`Server ready at port ${3030}`)