
var allItems = [];
var links = document.querySelectorAll(".nav-item");

async function getNews(startIndexOfPost , indexOfPosts ,postID  ,categoryCode   ) {
    console.log("iam in fetch");
  var apinews = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${categoryCode}`);
  var apinewsFinal = await apinews.json();
    allItems = apinewsFinal.recipes;
    displayData(startIndexOfPost ,indexOfPosts ,postID ) 
};

function displayData(startIndexOfPost=0 ,indexOfPosts=allItems.length , postID  ) {
  var cartona = ``;
  for (let i = startIndexOfPost ; i < indexOfPosts ; i++) {
    cartona += `<div class="col-md-3">
    <div class="card " style="width: 18rem; height:22rem">
      <img height="200" src="${allItems[i].image_url}" class="card-img-top" alt="...">
        <div  class="card-body">
         <h5 class="card-title h6">${allItems[i].title.split(" ").splice(0,4).join(' ')}</h5>
           <p  class="card-text lead">${allItems[i].publisher}</p>
             <a href="${allItems[i].source_url}" class="btn btn-primary ">see more</a></div></div></div></div>`;
    document.getElementById(postID).innerHTML = cartona;
    }
};


( function () {
    getNews(6, 9 , "postt" ,"pizza"  );
    getNews(undefined, undefined , "rowData" ,"pizza"  );
  
}());


for (let i = 0; i < links.length; i++) {
  console.log("iam in first");
  links[i].addEventListener('click', function (e) {
      categoryCode = e.target.getAttribute('category');
      getNews(undefined, undefined , "rowData" ,categoryCode)
  })
};
