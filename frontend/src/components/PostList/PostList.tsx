import React from 'react';
import { PostsProps } from '@/common/interfaces';
import PostItem from '@/components/PostItem/PostItem';


export default function PostList({ posts }: PostsProps) {
    return (
        <div className="flex flex-wrap -m-4">
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
}