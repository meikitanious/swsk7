export async function load({data, fetch}) {

  const fetchBlogs = async () => {
    const response = await fetch('https://324128124.scalewhale.com/api/blogs?populate=*&populate=author.author_pfp&populate=category&filters[category][page_visible][$eq]=true&sort[0]=category.blog_page_order')
    const blogs = await response.json()
    return blogs
  }

  const fetchBlogHomepage = async () => {
    const response = await fetch(`https://324128124.scalewhale.com/api/blog-page-header?populate=*`);
    const blogHomepage = await response.json();
    return blogHomepage
  }

  return {
    blogs: fetchBlogs(),
    blogHomepage: fetchBlogHomepage()
  }
}