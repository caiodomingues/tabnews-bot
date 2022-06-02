export interface Content {
  id: string;
  owner_id: string;
  parent_id?: any;
  slug: string;
  title: string;
  body: string;
  status: string;
  source_url?: any;
  created_at: Date;
  updated_at: Date;
  published_at: Date;
  username: string;
  parent_title?: any;
  parent_slug?: any;
  parent_username?: any;
}

export interface PreviousPost {
  postId: string;
}
