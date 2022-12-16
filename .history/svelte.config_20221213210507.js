import adapter from "@sveltejs/adapter-static"; 
import preprocessor from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocessor({
		scss: {
			prependData: "@import './src/lib/styles.scss';"
		}
	}),
	kit: {
        adapter: adapter({
/* Default folder options for static files; Github pages requires "docs".*/
            pages: "docs",
            assets: "docs"
        }),
    prerender: {
        crawl: true,
//* I don't know how to write out entries for blog pages, I got it working on the main blog page. Basically the entries section is an array of URLs for the crawler to find; by default it wont find dynamic pages like blog pages */ 
        entries: ['*',  `/blog/*`]
        }
    }
};



export default config;
