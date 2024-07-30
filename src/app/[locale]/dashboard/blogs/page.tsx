import React from 'react';
import Blogs from '@/modules/blogs/components/Blogs';
import getMediumPost from '@/modules/blogs/actions/get-medium-post';

export default async function BlogsPage() {
    const allPosts = await getMediumPost();

    return <Blogs articles={allPosts}></Blogs>;
}
