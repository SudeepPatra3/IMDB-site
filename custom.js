let search = document.getElementById("searchtext");
search.addEventListener("keypress", e => {
  let searchtext = e.target.value;
  getmovies(searchtext); /////calling getmovies function as callback function
});
function getmovies(searchtext) {
  let api = `http://www.omdbapi.com/?s=${searchtext}&apikey=34696847`;
  window
    .fetch(api)
    .then(data => {
      //next is converting into response to json object
      //how to convert response object to json object
      let jsondata = data.json();
      jsondata
        .then(movie => {
            let movies=movie.Search;
            let output='';
            for(let imdbMovie of movies){
                output +=`
                <h1> ${imdbMovie.Title}</h1>
                <p> ${imdbMovie.Year}</p>
                <p> ${imdbMovie.imdbID}</p>
                <p> ${imdbMovie.Type}</p>
                <img src="${imdbMovie.Poster}"/>`;
                document.getElementById('template').innerHTML=output;
            }
          
        })
        .catch(); //if reject executing catch block
    })
    .catch(err => console.log(err)); //fetching data from omdb server
}
