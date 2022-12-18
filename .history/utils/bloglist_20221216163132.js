import { build } from 'vite';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const cwd = process.cwd;

let fetchBlogs = async() => {
    const response = await fetch('https://324128124.scalewhale.com/api/blogs?populate=*&populate=author.author_pfp&populate=category&filters[category][page_visible][$eq]=true&sort[0]=category.blog_page_order');
    let blogs = await response.json();
    return blogs;
};

const b3ild = async () => {
    let blogs = await fetchBlogs();
    const data = [blogs];
    fs.writeFileSync(
        path.join(cwd(), './utils/bloglist.json'),
        JSON.stringify(data)
    );

    console.log('written: ', data);
}

b3ild();