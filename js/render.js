const container = document.getElementById("lista-produtos");

if (container && typeof cardapio !== "undefined") {
  container.innerHTML = "";

  cardapio.forEach((doce, index) => {
    const col = document.createElement("div");
    col.classList.add("col-lg-4", "col-md-6", "mb-4");
    const collapseId = `saboresCollapse${index}`;
    const isBoloFestivo = doce.nome === "Bolo Festivo";

    const saboresLista = doce.sabores
      ? doce.sabores
          .split(",")
          .map(
            (sabor) =>
              `<li><i class="fa fa-heart text-primary small mr-2"></i>${sabor.trim()}</li>`,
          )
          .join("")
      : `<li><i class="fa fa-info-circle text-muted mr-2"></i>Consulte opções</li>`;

    col.innerHTML = `
            <div class="product-card d-flex flex-column h-100"> 
                <div class="product-img-container">
                    <img src="${doce.foto}" alt="${doce.nome}" class="img-fluid">
                </div>
                <div class="product-content p-4 text-center d-flex flex-column flex-grow-1"> 
                    <h5 class="font-weight-bold mb-2">${doce.nome}</h5>
                    
                <button class="btn btn-link btn-sm text-decoration-none text-primary mb-2 font-weight-semi-bold" 
                        type="button" data-toggle="collapse" data-target="#${collapseId}">
                    <i class="fa fa-chevron-down mr-1"></i> Ver Sabores
                </button>

                    <div class="collapse mb-3" id="${collapseId}">
                        <ul class="list-unstyled text-left small text-muted mb-0">${saboresLista}</ul>
                    </div>
                    
                    ${
                      isBoloFestivo
                        ? `<button type="button" class="btn btn-primary btn-sm px-4 rounded-pill mt-auto" 
                                   onclick="abrirModalBolo('${doce.sabores}')"> Encomendar Bolo </button>`
                        : `<a href="https://wa.me/5519994387342?text=Olá! Gostaria de encomendar: ${doce.nome}" 
                             target="_blank" class="btn btn-primary btn-sm px-4 rounded-pill mt-auto"> Encomendar </a>`
                    }
                </div>
            </div>
        `;
    container.appendChild(col);
  });
}

window.abrirModalBolo = function (saboresString) {
  const select = document.getElementById("recheioBolo");
  if (select) {
    select.innerHTML = '<option value="">Selecione o sabor</option>';
    saboresString.split(",").forEach((sabor) => {
      const option = document.createElement("option");
      option.value = sabor.trim();
      option.textContent = sabor.trim();
      select.appendChild(option);
    });
  }
  $("#modalBoloFestivo").modal("show");
};

document.addEventListener("submit", function (e) {
  if (e.target && e.target.id === "formBoloFestivo") {
    e.preventDefault();

    const recheio = document.getElementById("recheioBolo").value;
    const formato = document.getElementById("formatoBolo").value;
    const quilos = document.getElementById("quilosBolo").value;
    const decoracao = document.getElementById("decoracaoBolo").value;
    const dataRaw = document.getElementById("dataBolo").value;
    const horario = document.getElementById("horarioBolo").value;

    // Inverte a data para DD/MM/AAAA
    let dataFormatada = dataRaw;
    if (dataRaw) {
      const partes = dataRaw.split("-");
      dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;
    }

    const mensagem =
      `*Novo Pedido de Bolo Festivo - Doçuras Enlaces*%0A%0A` +
      `*Recheio:* ${recheio}%0A` +
      `*Formato:* ${formato}%0A` +
      `*Peso:* ${quilos}kg%0A` +
      `*Decoração:* ${decoracao}%0A` +
      `*Data:* ${dataFormatada}%0A` +
      `*Horário:* ${horario}`;

    window.open(`https://wa.me/5519994387342?text=${mensagem}`, "_blank");
    $("#modalBoloFestivo").modal("hide");
  }
});
