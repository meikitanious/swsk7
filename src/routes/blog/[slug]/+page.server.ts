export async function load({params, data, fetch}) {
  const response = await fetch(`https://324128124.scalewhale.com/api/blogs?populate=*&filters[slug][$eq]=${params.slug}&populate=seo&populate=seo.metaImage&populate=seo.metaSocial.image&populate=author&populate=category`);
  const blog = await response.json();
  
  return blog.data;
}