document.addEventListener("DOMContentLoaded", () => {

  const btnCalcular = document.getElementById("btnCalcular");
  const btnLimpiar = document.getElementById("btnLimpiar");

  btnCalcular.addEventListener("click", calcular);
  btnLimpiar.addEventListener("click", limpiar);

});


function calcular() {


  let edad = document.getElementById("edad").value;
  let presion = document.getElementById("presion").value;
  let colesterol = document.getElementById("colesterol").value;
  let fumador = document.getElementById("fumador").value;

  const textoResultado = document.getElementById("textoResultado");
  const resultadoDiv = document.getElementById("resultado");
  const recomendaciones = document.getElementById("recomendaciones");

  recomendaciones.innerHTML = "";

  
  if (edad === "" || presion === "" || colesterol === "" || fumador === "") {
    textoResultado.textContent = "⚠️ Por favor completa todos los campos.";
    resultadoDiv.style.backgroundColor = "gray";
    return;
  }
}