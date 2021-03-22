

export async function fetchContent(query, preview) {

   
    const res = await fetch(`https://strapi.sir-ivan.com/${query}${preview ? '?_publicationState=preview' : ''}`,
    {
        method: 'GET',
        headers: {
            'content-type':'application/json',
        },
   });
   const data = await res.json();
   return data;
}

