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
    //    const htmlData = `
    //    <div class="posts">
    //         <p class="post-id">${postCount++}</p>
    //         <h2 class="title">${curElm.title}</h2>
    //         <p class="post-info">${curElm.body}</p>
    //    </div>
    //    `;

        let div = document.createElement('div');
        div.className = "posts";
        
        let p = document.createElement('p');
        p.className = "post-id";

        let h2 = document.createElement('h2');
        h2.className = "title";

        let p2 = document.createElement('p');
        p2.className = "post-info";

        p.innerHTML = postCount++;
        h2.innerHTML = curElm.title;
        p2.innerHTML = curElm.body;

        div.append(p,h2,p2);
        container.append(div);

   });
}

getPost();

const showData = () =>
{
    setTimeout( () =>
    {
        pageCount++;
        getPost();
    }, 300)
}

window.addEventListener('scroll',() => 
{
    const {scrollHeight, scrollTop, clientHeight } = document.documentElement;
    
    if(scrollTop + clientHeight >= scrollHeight)
    {
        console.log("Srng khali pohachla");
        showData();
    }
    
})