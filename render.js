// <div class="product-price-badge">${doce.preco}</div>

const container = document.getElementById('lista-produtos');

if (container && typeof cardapio !== 'undefined') {
    container.innerHTML = "";

    cardapio.forEach((doce, index) => {
        const col = document.createElement("div");
      
        col.classList.add("col-lg-4", "col-md-6", "mb-4");

        const collapseId = `saboresCollapse${index}`;

        const saboresLista = doce.sabores 
            ? doce.sabores.split(',').map(sabor => `<li><i class="fa fa-heart text-primary small mr-2"></i>${sabor.trim()}</li>`).join('')
            : `<li><i class="fa fa-info-circle text-muted mr-2"></i>Consulte opções</li>`;

        col.innerHTML = `
            <div class="product-card d-flex flex-column"> 
                <div class="product-img-container">
                    <img src="${doce.foto}" alt="${doce.nome}" class="img-fluid">
                </div>
                <div class="product-content p-4 text-center d-flex flex-column"> 
                    <h5 class="font-weight-bold mb-2">${doce.nome}</h5>
                    
                    <button class="btn btn-link btn-sm text-decoration-none text-primary mb-2 font-weight-semi-bold sabores-toggle" 
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#${collapseId}" 
                            aria-expanded="false">
                        <i class="fa fa-chevron-down mr-1 toggle-icon"></i> Ver Sabores
                    </button>

                    <div class="collapse mb-3" id="${collapseId}">
                        <div class="card card-body p-3 border-0 bg-light rounded-sm sabores-content">
                            <ul class="list-unstyled text-left small text-muted mb-0">
                                ${saboresLista}
                            </ul>
                        </div>
                    </div>
                    
                    <a href="https://wa.me/5519994387342?text=Olá! Gostaria de encomendar o ${doce.nome}" 
                       target="_blank" 
                       class="btn btn-primary btn-sm px-4 rounded-pill mt-auto"> 
                       Encomendar 
                    </a>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}