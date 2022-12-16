import path from 'path';
import fs from 'fs';
import { cwd } from 'process';
import { build } from 'vite';
import fetch from 'node-fetch';

let fetchSlugs = async() => {
    const response = await fetch('https://324128124.scalewhale.com/api/blogs?fields[0]=slug');
    let slugs = await response.json();
    return slugs;
};

const b3ild = async () => {
    let slugs = await fetchSlugs();
    let pages = ['*'];
    const slugFinder = slugs.data.map(obj => '/blog/' + obj.attributes.slug);
    pages = pages.concat(slugFinder);

    fs.writeFileSync(
        path.join(cwd(), './utils/routelist.json'),
        JSON.stringify(pages)
    );

    console.log('written: ', pages);
}

b3ild();