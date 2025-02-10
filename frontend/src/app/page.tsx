"use client";

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import PostList from '@/components/PostList/PostList';
import { Post } from '@/common/interfaces';

export default function Home() {
  const [results, setResults] = React.useState<Post[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/posts/');
        const data = await res.json();
        setResults(data.posts || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return(
    <div>
      <Head>
        <title>Whisper-Net | Home</title>
      </Head>
      <div className="mb-10 p-3 border rounded">
        <Image
          src="/images/background.jpg"
          alt="image"
          width={1000}
          height={500}
        />
      </div>
      <div className="flex justify-center flex-col items-center mb-10">
        <div className="text-lg mb-3">BLOG POSTS</div>
        <div className="border w-14"></div>
      </div>
      <div className="flex flex-wrap -m-4 mb-5">
        <PostList posts={results} />
      </div>
    </div>
  );
}