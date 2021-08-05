export class PostModel {
  id!: number;
  postName!: string;
  url!: string;
  description!: string;
  voteCount!: number;
  username!: string;
  subredditName!: string;
  commentCount!: number;
  duration!: string;
}

export const PostStub: PostModel = {
  id: 0,
  postName: "postName",
  url: "//",
  description: "description",
  voteCount: 0,
  username: "user",
  subredditName: "subreddit",
  commentCount: 0,
  duration: "duration"
}
