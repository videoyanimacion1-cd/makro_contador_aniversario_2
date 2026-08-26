const fechaFinal = new Date();
fechaFinal.setFullYear(2026);
fechaFinal.setMonth(7); 
fechaFinal.setDate(28);
fechaFinal.setHours(8, 0, 0, 0);

function actualizarContador(){

    const ahora = new Date();

    let diferencia = fechaFinal - ahora;

    if(diferencia < 0){
        diferencia = 0;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    diferencia %= (1000 * 60 * 60 * 24);

    const horas = Math.floor(diferencia / (1000 * 60 * 60));
    diferencia %= (1000 * 60 * 60);

    const minutos = Math.floor(diferencia / (1000 * 60));
    diferencia %= (1000 * 60);

    const segundos = Math.floor(diferencia / 1000);

    const d = String(dias).padStart(2,"0");
    const h = String(horas).padStart(2,"0");
    const m = String(minutos).padStart(2,"0");
    const s = String(segundos).padStart(2,"0");

    document.getElementById("dia1").textContent = d[0];
    document.getElementById("dia2").textContent = d[1];

    document.getElementById("hora1").textContent = h[0];
    document.getElementById("hora2").textContent = h[1];

    document.getElementById("min1").textContent = m[0];
    document.getElementById("min2").textContent = m[1];

    document.getElementById("seg1").textContent = s[0];
    document.getElementById("seg2").textContent = s[1];

}

actualizarContador();

setInterval(actualizarContador, 1000);