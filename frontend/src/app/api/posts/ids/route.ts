import { NextResponse } from 'next/server';
import { SERVERURL } from '@/common/urls';
import { Post } from '@/common/interfaces';

export async function GET() {
    try {
        const res = await fetch(`${SERVERURL}api/post/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const posts = await res.json();
        const ids = posts.map((post: Post) => post.id);

        return NextResponse.json({
            status: 200,
            ids: ids
        });
    } catch (error) {
        console.error('Error fetching data:', error);

        const statusCode = error instanceof TypeError ? 503 : 500;
        const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';

        return NextResponse.json({
            status: statusCode,
            error: errorMessage,
        }, {
            status: statusCode
        })
    }
}