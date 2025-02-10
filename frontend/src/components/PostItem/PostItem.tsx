import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PostProps } from '@/common/interfaces';


export default function PostItem({ post }: PostProps) {
    return (
        <Link href={`/posts/${post.id}`}>
            <div className="p-4 cursor-pointer sm:2-1/2 lg:w-1/4">
                <Image
                    alt="post"
                    className="object-cover"
                    src={post.image}
                    width={640}
                    height={480}
                />
                <div className="text-center my-4">
                    <p>{post.title}</p>
                </div>
            </div>
        </Link>
    );
}