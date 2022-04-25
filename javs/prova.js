function getMovieInfosOMDB(title){
    const url = `http://www.omdbapi.com/?t=${title}&apikey=790af7bc`  
       
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if(data.Response == 'False'){
            descriptionBodyNotFound.textContent = "Filme não encontrado! Tente novamente.";
            descriptionBodyNotFound.style.marginBottom = '30px'
            filme.textContent = "Titulo do filme"
            movieYear.textContent = "Ano"
            movieGenre.textContent = "Genero"
            movieRuntime.textContent = "Duração"
            imdbRating.textContent = "Score"
            movieInfo.textContent = "Descrição do filme."
            movieWriter.textContent = "Nome do escritor"
            movieDirector.textContent = "Nome do Diretor"
            moviePoster.style.backgroundImage = `url(filmeNaoEncontrado.png)`