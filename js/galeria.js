const imagens = [

    // CATEGORIA CASAMENTO
    { src: "img/galeria/casamento1.jpg", categoria: "casamento" },
    { src: "img/galeria/casamento2.jpg", categoria: "casamento" },
    { src: "img/galeria/casamento3.jpg", categoria: "casamento" },
    { src: "img/galeria/casamento4.jpg", categoria: "casamento" },
    { src: "img/galeria/casamento5.jpg", categoria: "casamento" },
    { src: "img/galeria/casamento6.jpg", categoria: "casamento" },
    { src: "img/galeria/casamento7.jpg", categoria: "casamento" },

    // CATEGORIA PÁSCOA
    { src: "img/galeria/pascoa1.jpg", categoria: "pascoa" },
    { src: "img/galeria/pascoa2.jpg", categoria: "pascoa" },
    { src: "img/galeria/pascoa3.jpg", categoria: "pascoa" },
    { src: "img/galeria/pascoa4.jpg", categoria: "pascoa" },
    { src: "img/galeria/pascoa5.jpg", categoria: "pascoa" },

    // CATEGORIA BOLOS SALGADOS
    { src: "img/galeria/bolo_salgado1.jpg", categoria: "bolosalgado" },
    { src: "img/galeria/bolo_salgado2.jpg", categoria: "bolosalgado" }, 

    // CATEGORIA BOLOS
    { src: "img/galeria/bolo1.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo2.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo3.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo4.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo5.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo6.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo7.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo8.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo9.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo10.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo11.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo12.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo13.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo14.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo15.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo16.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo17.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo18.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo19.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo20.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo21.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo22.jpg", categoria: "bolo" },
    { src: "img/galeria/bolo23.jpg", categoria: "bolo" },
];

// 1. Renderiza as imagens imediatamente
const galeriaContainer = document.getElementById("galeria");

/*if (galeriaContainer) {
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
}*/

if (galeriaContainer) {
    galeriaContainer.innerHTML = "";
    imagens.forEach((img, index) => {
        const div = document.createElement('div');
        div.className = `col-lg-4 col-md-6 p-0 portfolio-item ${img.categoria}`;
        div.innerHTML = `
        <div class="position-relative overflow-hidden custom-rounded-container" style="margin: 10px;">
        <img class="img-fluid w-100 custom-img-rounded" src="${img.src}" style="height: 300px; object-fit: cover; display: block;">
        
        <button class="btn-share-galeria" onclick="compartilharFoto('${img.src}', '${img.categoria}')">
            <i class="fa fa-share-alt"></i>
        </button>
    </div>
`;
        galeriaContainer.appendChild(div);
    });
}

window.compartilharFoto = async function(caminhoFoto, categoria) {
    const urlSite = window.location.href;
    const textoBase = `Olha que lindo esse trabalho de ${categoria} da Doçuras Enlaces! 🍰`;

    // Se for celular (suporta share nativo)
    if (navigator.share && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        try {
            await navigator.share({
                title: 'Doçuras Enlaces',
                text: textoBase,
                url: urlSite
            });
        } catch (err) {
            console.log("Compartilhamento cancelado");
        }
    } else {
        // Se for Computador, vamos facilitar a vida do usuário
        const msgZap = encodeURIComponent(`${textoBase} Veja aqui: ${urlSite}`);
        const zapLink = `https://web.whatsapp.com/send?text=${msgZap}`;
        
        // Abre o WhatsApp Web em uma nova aba
        window.open(zapLink, '_blank');
        
        // Opcional: Copia para a área de transferência também
        navigator.clipboard.writeText(`${textoBase} ${urlSite}`);
    }
};





// 2. Inicializa o Isotope APÓS o carregamento das imagens
$(window).on('load', function () {
    var $grid = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    // Filtros
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
});