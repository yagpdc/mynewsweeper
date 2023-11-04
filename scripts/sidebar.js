let button = document.querySelector("#btn-menu");
let sidebar = document.querySelector("#sidebar");
let textContainer = document.querySelector("#text-container");

sidebar.classList.add("active");
button.innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg"height="1em"viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>';

function open() {
  sidebar.classList.toggle("active");
  if (!sidebar.classList.contains("active")) {
    button.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>';
  } else {
    button.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg"height="1em"viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>';
  }
}

textContainer.innerHTML = /*HTML*/ `
<h2>COMO JOGAR:</h2>
<div class="card">
    O objetivo do jogo é abrir todos os 
    quadrados que não contém bombas e marcar 
    todas as bombas que existem no tabuleiro.
</div>
<div class="card">
<img id="left_click"class="mouse" >
    <p>
    Para abrir um quadrado, basta clicar nele 
    com o botão esquerdo do mouse.
    </p>
</div>
<div class="card">
<img id="right_click"class="mouse">
    <p>
    Para marcar um quadrado, basta clicar nele
    com o botão direito do mouse.
    </p>
</div>
<div class="card">
    <p>
    Caso você perca o jogo, todas as bombas
    serão reveladas. Após isso você pode
    reiniciar o jogo.
    </p>
</div>

`;

let index = 0;

let leftClick = new Image();
leftClick.src = "assets/leftclick.png";

let mouse = new Image();
mouse.src = "assets/mouse.png";

let rightClick = new Image();
rightClick.src = "assets/rightclick.png";

let Tag = document.querySelector("#left_click");
let Tag2 = document.querySelector("#right_click");

let toggleImg = (firstImg, secondImg, imageTag) => {
  let imgs = [firstImg, secondImg];
  let tag = imageTag;
  tag.src = imgs[index].src;
  index = (index + 1) % 2;
};

setInterval(function () {
  toggleImg(leftClick, mouse, Tag);
}, 500);

setInterval(function () {
  toggleImg(rightClick, mouse, Tag2);
}, 300);

button.addEventListener("click", open);
