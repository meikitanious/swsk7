import adapter from "@sveltejs/adapter-static"; 
import preprocessor from 'svelte-preprocess';
import pages from './utils/routelist.json' assert { type: 'json'};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor({
		scss: {
			prependData: "@import './src/lib/styles.scss';"
		}
	}),
	kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
    prerender: {
        crawl: true,
        entries: [...pages]
        }
    }
};

export default config;
