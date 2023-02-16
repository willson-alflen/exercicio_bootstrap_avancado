const form = document.querySelector(".needs-validation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    swal(
      "Desculpe!",
      "Você precisa preencher os campos corretamente.",
      "error"
    );
  } else {
    swal("Obrigado por enviar sua mensagem!", "Em breve retornaremos seu contato.", "success");
  }
  form.classList.add("was-validated");
});