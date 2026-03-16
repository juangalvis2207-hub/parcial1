document.getElementById("btnCalcular").addEventListener("click",calcularRiesgo);

function calcularRiesgo() {
    const edad= parseInt(document.getElementById("edad").value);
    const presion = parseInt(document.getElementById("presion").value);
    const colesterol = parseInt(document.getElementById("colesterol").value);
    const fumador = document.getElementById("fumador").value;

   if (!edad || !presion || !colesterol || !fumador) {
    document.getElementById("textoResultado").textContent = "Por favor, completa todos los campos.";
    return;
}
let puntos = 0;

    
    if (edad >= 35 && edad <= 44) puntos += 1;
    else if (edad >= 45) puntos += 2;

    
    if (presion >= 140) puntos += 3;
    else if (presion >= 120) puntos += 1;

    
    if (colesterol >= 240) puntos += 3;
    else if (colesterol >= 200) puntos += 1;

    
    if (fumador === "si") puntos += 3;

    
    const resultadoDiv = document.getElementById("resultado");
    const textoRes = document.getElementById("textoResultado");
    const listaRec = document.getElementById("recomendaciones");

    listaRec.innerHTML = ""; 

   if (puntos <= 2) {
    textoRes.textContent = "Riesgo Bajo";
    resultadoDiv.style.backgroundColor = "#0df042"; 
} else if (puntos <= 5) {
    textoRes.textContent = "Riesgo Moderado";
    resultadoDiv.style.backgroundColor = "#ffd341"; 
} else {
    textoRes.textContent = "Riesgo Alto";
    resultadoDiv.style.backgroundColor = "#f90015"; 
}

const consejos = ["Evita comer harinas", "Beber mucha agua", "Realiza ejercicio 1 hora diario"];

consejos.forEach(consejo => {
    let li = document.createElement("li"); 
    li.textContent = consejo;             
    listaRec.append(li);                   
});
}

document.getElementById("btnLimpiar").addEventListener("click", () => {
   
    document.getElementById("edad").value = "";
    document.getElementById("presion").value = "";
    document.getElementById("colesterol").value = "";
    document.getElementById("fumador").value = "";
    
    
    document.getElementById("textoResultado").textContent = "";
    document.getElementById("recomendaciones").innerHTML = "";
    document.getElementById("resultado").style.backgroundColor = "transparent";
});