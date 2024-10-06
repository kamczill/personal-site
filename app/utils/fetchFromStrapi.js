export async function fetchFromStrapi(endpoint) {
    const locale = 'en'

      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${endpoint}?locale=${locale}`, {
        headers: {
          Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
      });
      
      return res;
}