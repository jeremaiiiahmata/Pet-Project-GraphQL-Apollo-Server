  let comments = [
    {commentId: '1', userId: '1', postId: '1', content: 'hi'},
    {commentId: '2', userId: '2', postId: '1', content: 'wow'},
    {commentId: '3', userId: '3', postId: '3', content: 'nice!'},
    {commentId: '4', userId: '3', postId: '2', content: 'fantastic!'},
  ]
  
  let posts = [
    {postId: '1', userId:'1', voteId: '1', title:'title-1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, tellus a posuere lacinia,', },
    {postId: '2', userId:'2', voteId: '2', title:'title-2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, tellus a posuere lacinia,', },
    {postId: '3', userId:'2', voteId: '3', title:'title-3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, tellus a posuere lacinia,', },
    {postId: '4', userId:'3', voteId: '4', title:'title-4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, tellus a posuere lacinia,', },
    {postId: '5', userId:'4', voteId: '5', title:'title-5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, tellus a posuere lacinia,', },
    {postId: '6', userId:'5', voteId: '6', title:'title-6', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, tellus a posuere lacinia,', },
    {postId: '7', userId:'6', voteId: '7', title:'title-7', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales, tellus a posuere lacinia,', }
  ]

  let commentVotes = [
    {commentVoteId: '1', commentId: '1', upVote: '1', downVote: '0'},
    {commentVoteId: '2', commentId: '2', upVote: '19', downVote: '0'},
    {commentVoteId: '3', commentId: '3', upVote: '43', downVote: '0'},
    {commentVoteId: '4', commentId: '4', upVote: '11', downVote: '0'}
  ]

  let postVotes = [
    {postVoteId: '1', postId: '1', upVote: '1', downVote: '1'},
    {postVoteId: '2', postId: '1', upVote: '2', downVote: '1'},
    {postVoteId: '3', postId: '1', upVote: '3', downVote: '1'},
    {postVoteId: '4', postId: '4', upVote: '4', downVote: '1'},
    {postVoteId: '5', postId: '5', upVote: '5', downVote: '1'}
  ]

  let userVotes = [
    {userId: '1', postId: '2', vote: true},
    {userId: '2', postId: '2', vote: true},
    {userId: '3', postId: '2', vote: true},
    {userId: '3', postId: '2', vote: true},
    {userId: '4', postId: '2', vote: true},
    {userId: '5', postId: '2', vote: true},
    {userId: '6', postId: '2', vote: true}
  ]
  
  export default { posts, comments, commentVotes, postVotes, userVotes }