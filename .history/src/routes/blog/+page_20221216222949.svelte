<script lang="ts">
  import type { Load } from '@sveltejs/kit';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
	import postcss from 'postcss';
  import data from './utils/bloglist.json' assert { type: 'json'};
   /* export let data;*/

  let blogPosts: any;
  let blogHomepage: any;
  let categories: any;

  onMount(async () => {
    if (data !== undefined) {
      blogPosts = data.blogs
      categories = categorize(blogPosts)
    }
  })

  const categorize = (array: any) => {
    let categories: any = [];

    array.data.forEach((item: any) => {
      if (!categories.includes(item.attributes.category.data.attributes.category_title)) categories.push(item.attributes.category.data.attributes.category_title);
    });

    return categories;
  }
</script>

  <svelte:head>
    {#if blogHomepage !== undefined}
      <meta property="og:title" content={blogHomepage.data.attributes.seo[0].metaTitle} />
      <meta property="og:description" content={blogHomepage.data.attributes.seo[0].metaDescription} />
      <meta property="og:robots" content={blogHomepage.data.attributes.seo[0].metaRobots} />
      <meta property="og:viewport" content={blogHomepage.data.attributes.seo[0].metaViewport} />
      <meta property="og:canonical" content={blogHomepage.data.attributes.seo[0].canonicalURL} />
      <meta property="og:image" content={blogHomepage.data.attributes.seo[0].metaImage.data.attributes.url} />
      {#each blogHomepage.data.attributes.seo[0].metaSocial as social }
        <meta property="{social.socialNetwork}:title" content={social.title} />
        <meta property="{social.socialNetwork}:url" content={social.url} />
        <meta property="{social.socialNetwork}:description" content={social.description} />
        <meta property="{social.socialNetwork}:image" content={social.image.data.attributes.url} />
      {/each}
    {/if}
  </svelte:head>

  <div class="main--blog--page">
    <div class="container">
      {#if blogPosts !== undefined && categories !== undefined}
        {#each categories as category}
          <div class="blog--row--wrapper">
            <h1 class="blog--category">{category}</h1>
            <div class="blog--row">
              {#each blogPosts.data as post} 
                {#if post.attributes.category.data.attributes.category_title === category}
                  <div class="blog--post" on:click={() => goto('/blog/' + post.attributes.slug)}>
                    <span class="blog--post-category">{category}</span>
                    <h2 class="blog--post--title">{post.attributes.blog_title}</h2>
                    <div class="blog--post--data">
                      <div class="blog--author">
                        <img src={post.attributes.author.data.attributes.author_pfp.data.attributes.url} alt="Author Pic">
                        <span class="blog--post--author">{post.attributes.author.data.attributes.author_name}</span>
                      </div>
                      <div class="blog--post--likes">
                        <img src="/images/heart.svg" alt="Heart Icon">
                        <span>
                          {post.attributes.default_likes}
                        </span>
                      </div>
                    </div>
                  </div>
                {/if}
              {/each}
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </div>

<style lang=scss>

  .main--blog--page {
    height: 100%;
    width: 100%;
    @include flex(column, flex-start, flex-start);
    row-gap: 50px;
    padding-bottom: 50px;

    .container {
      padding: 0 !important;
    }

    .blog--row--wrapper {
      width: 100%;

      .blog--category {
        font-size: 200%;
        font-weight: 600;
        color: #fff;
        margin: 10px 0 20px;
      }
    }

    .container {
      @include flex(column, flex-start, flex-start);
      row-gap: 50px;
    }

    .blog--row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 10px;
      

      .blog--post {
        transition: all ease-in-out .3s;
        &:hover {
          cursor: pointer;
          background-color: #fff;
          position: relative;
          transform: translateY(-10px);
        }

        height: 220px;
        width: 100%;
        background-color: #e5e5e5;
        border: 2.5px solid #e5e5e5;
        color: #000107;
        padding: 15px;
        border-radius: 5px;
        @include flex(column, flex-start, flex-start);

        .blog--post-category {
          font-weight: 600;
          font-size: 110%;
          text-transform: uppercase;
          height: 15%;
        }

        .blog--post--title {
          font-weight: 600;
          font-size: 160%;
          height: 70%;
        }

        .blog--post--data {
          width: 100%;
          height: 15%;
          @include flex(row, flex-end, space-between);

          .blog--post--author {
            font-size: 115%;
          }

          .blog--post--likes {
            width: 50%;
            @include flex(row, center, flex-end);
            column-gap: 5px;

            img {
              height: 20px;
            }

            span {
              font-size: 110%;
            }
          }
        }
      }
    }
  }

  .hero-content {
    border-radius: 5px;
    height: 50vh;
    color: white;
    @include flex(column, center, center);
    row-gap: 10px;
    background-position: center;
    background-size: cover;

    h1 {
      font-size: 700%;
      font-weight: 800;
      text-align: center;
      width: 80%;
    }

    p {
      font-size: 350%;
      text-align: center;
      font-weight: 600;
      width: 80%;
    }
  }

  .blog--author {
    @include flex(row, center, center);
    gap: 10px;

    img {
      height: 30px;
      width: 30px;
      object-fit: cover;
      border-radius: 100%;
    }
  }
</style>