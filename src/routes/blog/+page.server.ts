export async function load({data, fetch}) {
  const response = await fetch('https://324128124.scalewhale.com/api/blogs?populate=*&filters[category][page_visible][$eq]=true&sort[0]=category.blog_page_order')
  const blogs = await response.json()
  return blogs
}