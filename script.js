const classListCookieTry = document.querySelector(".screen1");
const classListCookieRemove = document.querySelector(".screen2");
const btnRemoveClass = document.querySelector("#btnClass");
const textBilhetePremiadoSorteado = document.querySelector(".screen2 p");

document.addEventListener("keydown", keyEnterClick);
btnRemoveClass.addEventListener("click", classAddAndRemove);

const bilhetesPremiados = [
  ` Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe
    o teu`,
  `Você so nao consegue ate desistir`,
  `Não desista`,
  `Continue ate o final`,
  `Continue ate o final adda`,
  `Continue ate o final adad`,
];

function classAddAndRemove() {
  classListCookieTry.classList.toggle("hide");
  classListCookieRemove.classList.toggle("hide");
}

function keyEnterClick(e) {
  let numberSorteado = Math.round(
    Math.random() * bilhetesPremiados.slice(0, -1).length
  );

  if (e.key == "Enter" && classListCookieRemove.classList.contains("hide")) {
    textBilhetePremiadoSorteado.innerText = bilhetesPremiados[numberSorteado];
    classAddAndRemove();
  }
}
