export async function fetchFromStrapi(endpoint, lang, fields='', populate='*') {
    try{
      const fieldsParam = fields.length > 0 ? `&${fields}`: ''
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/${endpoint}?populate=${populate}&locale=${lang}${fieldsParam}`, {
        headers: {
          Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        },
        cache: "no-cache"
      });
      return res;
    } catch (err){
      return err
    }
}