//holds unique id for individual user and
//an object of ids with assigned bools
//indicating if user is following or not: {_id: "", feeds:[""]}
UsersFeed = new Mongo.Collection("usersfeed");

//holds unique id for individual user, creation date, and data attribute: {_id: "", createdAt: "", data:{}}
UserPosts = new Mongo.Collection("userposts");

//holds reply objects, unique to each post in UserPosts
//{postId: string, userId: string, reply: {text:string}}
Replies = new Mongo.Collection("replies");
