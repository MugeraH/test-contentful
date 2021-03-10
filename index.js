

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "wg1ulkn58gj9",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "o0J72qDOOxUWepEu9GokeOaLYsyhJq8GTYWP27PwUS4"
});
client.getEntries()
.then((response) => {


  let data = response.items
  
  console.log(data.length)

  for(i=0; i<=data.length-1;i++){
    console.log(response.items[i].fields.productName)
  }

  
  
}

)
.catch(console.error);