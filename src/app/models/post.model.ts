export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface NewPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Posts {
  posts: Post[];
  // isLoading: boolean;
  // createPostLoading: boolean;
  // error: string | null;
}
