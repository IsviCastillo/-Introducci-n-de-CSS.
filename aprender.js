function mostrarHora(){
    const ahora=new Date();
    const hora=ahora.toLocaleTimeString()
    document.getElementById("hora").textContent="Hora:"+hora;
    
}

setInterval(mostrarHora,1000);

