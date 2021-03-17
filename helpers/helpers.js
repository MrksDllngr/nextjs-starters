const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const previewAccessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;


export async function fetchContent(query, preview) {

   
    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
        method: 'POST',
        headers: {
            'content-type':'application/json',
            Authorization: `Bearer ${preview ? previewAccessToken : accessToken}`,
        },
        body: JSON.stringify({query}),
   });
   const data = await res.json();
   return data;
}


//build additional fetch functions like this one:
export async function fetchTestContent(preview){
    const res = fetchContent(`
  
    {
      testCollection(preview: ${preview ? "true" : "false"}) {
        items {
          text
          slug
        }
      }
    }
    `, preview)
    const data = await res;
    return data.data.testCollection.items;
}