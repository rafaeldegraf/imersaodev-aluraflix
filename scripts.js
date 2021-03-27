function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  validaInsereEntrada(filmeFavorito)
  campoFilmeFavorito.value = ""
  // validaEntrada(filmeFavorito)
  //if(filmeFavorito.endsWith('.jpg')){
  
  // listarFilmesNaTela(filmeFavorito)
 // } else {
 //   alert("Imagem inválida")
//  }

}
  

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector('#listaFilmes')
  //alert(listaFilmes)
  var elementoFilme = filme
  
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  
  //alert(listaFilmes.innerHTML)
}

function validaInsereEntrada(Entrada) {
  if(Entrada.endsWith('iframe>')){
    listarFilmesNaTela(Entrada)
  } else {
    alert("Entrada não é filme")
  }
}
//<iframe width="1045" height="438" src="https://www.youtube.com/embed/wmiIUN-7qhE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
