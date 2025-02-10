export interface Post {
    id: number;
    title: string;
    image: string;
    content: string;
    created_at: string;
    update_at: string;
}

export interface PostProps {
    post: Post;
}

export interface PostsProps {
    posts: Post[];
}