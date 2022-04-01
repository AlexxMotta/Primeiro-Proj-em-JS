var musicas =  [
    {titulo: 'Bink s no Sake',
     artista:'Oda',
    src: 'Music/Bink s no Sake.mp3',
    img: 'Img/BinksSake.jpg'},
    {titulo: 'Imprevisível',
    artista: 'Tribo da Periferia',
    src:"Music/Imprevisivel.mp3",
    img:'Img/Imprevisivel.jpg'},
    {titulo: 'Sunflower',
    artista: 'Post Malone',
    src:'Music/Sunflower.mp3',
    img:'Img/Sunflower.jpg'},
    {titulo: 'Procuro Alguém',
    artista: 'Djonga',
    src:"Music/Procuro Alguem.mp3",
    img:'Img/ProcuroAlguem.jpg'}
];//array

var musica = document.querySelector( 'audio');//seleciona uma tag ou class do html

var musicaIndex = 0;
var duracaoMusica = document.querySelector('.fim');
var  imagem = document.querySelector('img');
var nomeMusica = document.querySelector('h2');
var nomeArtista = document.querySelector('.descrisao i');

renderizarMusica(musicaIndex);
 
document.querySelector('.botao-play').addEventListener('click',tocarMusica);//adicona um evento a classe

document.querySelector('.botao-pause').addEventListener('click',pausaMusica);

musica.addEventListener('timeupdate', atualizarBarra);//evento timeupdate atualização (pesquisar mais)

document.querySelector('.anterior').addEventListener('click',()=>{//arow funciton
    musicaIndex--;
    if(musicaIndex < 0){
        musicaIndex = 3;
    }
    renderizarMusica(musicaIndex);
    tocarMusica();
});

document.querySelector('.proxima').addEventListener('click',()=>{//funcao anonima
    musicaIndex++;
    if(musicaIndex > 3){
        musicaIndex = 0;
    }
    renderizarMusica(musicaIndex);
    tocarMusica();
});

//FUNÇÕES
function renderizarMusica(musicaIndex){
    musica.setAttribute('src',musicas[musicaIndex].src);
    musica.addEventListener('loadeddata',()=>{
        imagem.setAttribute('src',musicas[musicaIndex].img);//src = recurso
        nomeMusica.textContent = musicas[musicaIndex].titulo;
        nomeArtista.textContent = musicas[musicaIndex].artista;
        //imagem = musicas[musicaIndex].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-play').style.display = 'none';//none esconde
    document.querySelector('.botao-pause').style.display = 'block';//block exibi
}

function pausaMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}

function atualizarBarra(){//essa funcao precisa vir antes da segundosParaMinutos, mas porque ?
    var barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) *100) + '%';//Math.floor arredonda pra baixo
    var tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
    //document.querySelector('.barra')
}

function segundosParaMinutos(segundos){
    var campoMinutos = Math.floor(segundos / 60);
    var campoSegundos =  segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos + ':' + campoSegundos;
}