import path from 'path';
import fs from 'fs';
import { cwd } from 'process';
import { build } from 'vite';
import fetch from 'node-fetch';

let fetchBlogs = async() => {
    const response = await fetch('https://324128124.scalewhale.com/api/blogs?populate=*&populate=author.author_pfp&populate=category&filters[category][page_visible][$eq]=true&sort[0]=category.blog_page_order');
    let blogs = await response.json();
    return blogs;
};

const b3ild = async () => {
    let data = await fetchBlogs();
    fs.writeFileSync(
        path.join(cwd(), './src/lib/bloglist.json'),
        JSON.stringify(data)
    );

    console.log('written: ', data);
}

b3ild();

