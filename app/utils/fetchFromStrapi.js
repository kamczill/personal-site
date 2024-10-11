export async function fetchFromStrapi(endpoint, lang) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${endpoint}?populate=*&locale=${lang}`, {
        headers: {
          Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
        cache: "no-cache"
      });
      
      return res;
}