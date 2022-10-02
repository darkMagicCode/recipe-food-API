
var allItems = [];
var links = document.querySelectorAll(".nav-item");

async function getNews(categoryCode , indexOfPosts ,postID) {
    console.log("iam in fetch");
  var apinews = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${categoryCode}`);
  var apinewsFinal = await apinews.json();
    allItems = apinewsFinal.recipes;
    displayData(indexOfPosts ,postID) 
};

function displayData(indexOfPosts ,postID) {
  var cartona = ``;
  for (let i = 0; i < indexOfPosts ; i++) {
    cartona += `<div class="col-md-3">
    <div class="card" style="width: 18rem;">
      <img height="200" src="${allItems[i].image_url}" class="card-img-top" alt="...">
        <div  class="card-body">
         <h5 class="card-title">${allItems[i].title.split(" ").splice(0,5).join(' ')}</h5>
           <p  class="card-text lead">${allItems[i].publisher}</p>
             <a href="${allItems[i].source_url}" class="btn btn-primary ">see more</a></div></div></div></div>`;
    document.getElementById(postID).innerHTML = cartona;
    }
};

// getNews('pizza' , Math.round(Math.random()*5) ,'postID')
// getNews('pasta' , Math.round(Math.random()*5) ,'rowData')

for (let i = 0; i < links.length; i++) {
    console.log("iam in first");
    links[i].addEventListener('click', function (e) {
        categoryCode = e.target.getAttribute('category');
        getNews(categoryCode , allItems.length , 'rowData')
    })
};


( function () {
    var mainbg = document.getElementById('mainbg')
    getNews("pizza" , 3 , "postt");
    getNews("pizza" , 1 , "posttt");
    getNews("pizza" , 20 , "rowData");
    

}());


