const container = document.querySelector('.container');

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () =>
{
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`)
   const data = await response.json();
   
   data.map((curElm, index) =>
   {
       const htmlData = `
       <div class="posts">
            <p class="post-id">${postCount++}</p>
            <h2 class="title">${curElm.title}</h2>
            <p class="post-info">${curElm.body}</p>
       </div>
       `;

       container.insertAdjacent(`beforeend`, htmlData)
   })


}


getPost();