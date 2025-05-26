function enviaWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;
  const telefone = "5511935001319";

  const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  window.open(url, "_blank");
}

function enviaEmail(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;
  const emailDestino = "matheusf.silveira@hotmail.com";

  const assunto = encodeURIComponent(`Contato do Portfólio - ${nome}`);
  const corpo = encodeURIComponent(`Olá! Me chamo ${nome},\n\n${mensagem}`);

  const url = `mailto:${emailDestino}?subject=${assunto}&body=${corpo}`;

  window.open(url, "_blank");
}
