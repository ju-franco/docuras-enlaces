const imagens = [

  { src: "img/galeria/felicidade/felicidade1.jpg", categoria: "felicidade" },
  { src: "img/galeria/felicidade/felicidade2.jpg", categoria: "felicidade" },
  { src: "img/galeria/felicidade/felicidade3.jpg", categoria: "felicidade" },
  { src: "img/galeria/felicidade/felicidade4.jpg", categoria: "felicidade" },
  { src: "img/galeria/felicidade/felicidade5.jpg", categoria: "felicidade" },
  { src: "img/galeria/felicidade/felicidade6.jpg", categoria: "felicidade" },

  
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
