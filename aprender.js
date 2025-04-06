function mostrarHora(){
    const ahora=new Date();
    const hora=ahora.toLocaleTimeString()
    document.getElementById("hora").textContent="Hora:"+hora;
    
}

setInterval(mostrarHora,1000);

card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
    card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
  });