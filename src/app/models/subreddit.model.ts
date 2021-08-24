export class SubredditModel {
  id!: number;
  name!: string;
  description!: string;
  numberOfPosts!: number;
}

export const SubredditStub: SubredditModel = {
  id: 0,
  name: "subredditName",
  description: "description",
  numberOfPosts: 0
}
