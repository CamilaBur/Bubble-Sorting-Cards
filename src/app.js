/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let bottonloco = document.getElementById("obtenerValor");
  bottonloco.addEventListener("click", function() {
    document.getElementById("cartas-shuffle").innerHTML = "";
    // Arrays contenedores de palo y número
    let palo = ["♧", "♤", "♡", "♢"];
    let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

    // Variable que guarda el contenido del numero ingresado por el usuario

    let valorObtenido = document.getElementById("usuario-select").value;

    // //  Bucle que posibilita la copia automática de cartas
    for (let i = 1; i <= valorObtenido; i++) {
      // Generados aleatorios de posición
      let sorteoPalo = Math.floor(Math.random() * palo.length);
      let sorteoNumber = Math.floor(Math.random() * number.length);

      // Contenedor de palo y número sorteado
      let contenedorNumber = number[sorteoNumber];
      let contenedorPalo = palo[sorteoPalo];

      if (contenedorPalo === "♡" || contenedorPalo === "♢") {
        document.getElementById(
          "cartas-shuffle"
        ).innerHTML += `<div id="cartas-shuffle">
                        <div class="card naipe m-3">
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item border-0 text-danger">${contenedorPalo}</li>
                              <li class="list-group-item border-0 text-center text-danger">${contenedorNumber}</li>
                              <li class="list-group-item border-0 text-danger abajo">${contenedorPalo}</li>
                            </ul>
                          </div>
                    </div>`;
      } else {
        document.getElementById(
          "cartas-shuffle"
        ).innerHTML += `<div id="cartas-shuffle">
                        <div class="card naipe m-3">
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item border-0">${contenedorPalo}</li>
                              <li class="list-group-item border-0 text-center">${contenedorNumber}</li>
                              <li class="list-group-item border-0 abajo">${contenedorPalo}</li>
                            </ul>
                          </div>
                    </div>`;
      }
    }
  });
};
