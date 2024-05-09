const button = document.querySelector("#qr-form button");
let container = document.querySelector(".container");
const text = document.querySelector("#qr-form input");

button.addEventListener("click", () => {
  if (!text.value) return;
  button.innerText = "A gerar código....";
  const code = document.querySelector("#qr-code img");
  code.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.value}`;
  code.addEventListener("load", () => {
    container.classList.add("active");
    button.innerText = "Código Criado";
  });
});

text.addEventListener("keyup", () => {
  if (!text.value.length) {
    container.classList.remove("active");
    button.innerText = "Gerar QR Code";
  }
});
