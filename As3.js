document.addEventListener("DOMContentLoaded", function(){
  const container = document.getElementById("images");
  for(let id = 5; id < 15; id++){
    const img = document.createElement("img");
    img.className = "movie-img";
    img.src = `https://via.assets.so/movie.png?${id}&q=95&w=360&h=360&fit=fill`;
    img.alt = `Image ${id}`;
    container.appendChild(img);
  }
});