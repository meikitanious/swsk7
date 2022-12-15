export async function load({data, fetch}) {

  const seo = async () => {
    const response = await fetch('https://324128124.scalewhale.com/api/home?populate=seo&populate=seo.metaSocial&populate=seo.metaImage&populate=seo.metaSocial.image')
    const data = await response.json()
    return data
  }

  return {
    meta: seo()
  }
}