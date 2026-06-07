const imagens = [
  // CATEGORIA CASAMENTO
  { src: "img/galeria/casamento/casamento1.jpg", categoria: "casamento" },
  { src: "img/galeria/casamento/casamento2.jpg", categoria: "casamento" },
  { src: "img/galeria/casamento/casamento3.jpg", categoria: "casamento" },
  { src: "img/galeria/casamento/casamento4.jpg", categoria: "casamento" },
  { src: "img/galeria/casamento/casamento5.jpg", categoria: "casamento" },
  { src: "img/galeria/casamento/casamento6.jpg", categoria: "casamento" },
  { src: "img/galeria/casamento/casamento7.jpg", categoria: "casamento" },

  // CATEGORIA PÁSCOA
  { src: "img/galeria/pascoa/pascoa1.jpg", categoria: "pascoa" },
  { src: "img/galeria/pascoa/pascoa2.jpg", categoria: "pascoa" },
  { src: "img/galeria/pascoa/pascoa3.jpg", categoria: "pascoa" },
  { src: "img/galeria/pascoa/pascoa4.jpg", categoria: "pascoa" },

  // CATEGORIA FESTIVAL DE FATIAS
  { src: "img/galeria/festival/.jpg", categoria: "festival" },

  // CATEGORIA COPO DA FELICIDADE
  { src: "img/galeria/felicidade/felicidade1.jpg", categoria: "felicidade" },
  { src: "img/galeria/felicidade/felicidade2.jpg", categoria: "felicidade" },
  { src: "img/galeria/felicidade/felicidade3.jpg", categoria: "felicidade" },
  { src: "img/galeria/felicidade/felicidade4.jpg", categoria: "felicidade" },

  // CATEGORIA BOLOS SALGADOS
  { src: "img/galeria/bolosalgado/bolo_salgado1.jpg", categoria: "bolosalgado" },
  { src: "img/galeria/bolosalgado/bolo_salgado2.jpg", categoria: "bolosalgado" },

  // CATEGORIA BOLOS
  { src: "img/galeria/bolo/bolo1.jpg", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo2.jpg", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo3.jpg", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo4.jpg", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo5.jpg", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo6.JPG", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo7.JPG", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo8.jpg", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo9.jpg", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo10.JPG", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo11.jpg", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo12.jpg", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo13.jpg", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo14.jpg", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo15.jpg", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo16.jpg", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo17.jpg", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo18.jpg", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo19.jpg", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo20.jpg", categoria: "bolo" },
  { src: "img/galeria/bolo/bolo21.JPG", categoria: "bolo" },
];

// 1. Renderiza as imagens imediatamente
const galeriaContainer = document.getElementById("galeria");

if (galeriaContainer) {
    galeriaContainer.innerHTML = "";
    imagens.forEach(img => {
        const div = document.createElement('div');
        // Importante: a classe da categoria deve estar aqui para o Isotope filtrar
        div.className = `col-lg-4 col-md-6 p-0 portfolio-item ${img.categoria}`;
        div.innerHTML = `
            <div class="position-relative overflow-hidden" style="margin: 10px; border-radius: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                <img class="img-fluid w-100" src="${img.src}" style="height: 300px; object-fit: cover; display: block;">
            </div>
        `;
        galeriaContainer.appendChild(div);
    });
}

// 2. Inicializa o Isotope APÓS o carregamento das imagens
$(window).on("load", function () {
  var $grid = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });

  // Filtros
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
});
