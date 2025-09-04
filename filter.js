  // Hacemos la función global para que los botones inline onclick la encuentren
  window.filterSelection = function (category) {
    const items = document.querySelectorAll('.filterItems');

    items.forEach(item => {
      const match = (category === 'all') || item.classList.contains(category);
      item.style.display = match ? 'flex' : 'none';
    });

    // Marcar botón activo visualmente
    const container = document.querySelector('.projects__filters');
    if (container) {
      const btns = container.querySelectorAll('.skills__skill');
      btns.forEach(b => b.classList.remove('active'));
      // Busca el botón cuyo texto coincide (maneja "Power BI" -> powerbi)
      const btn = Array.from(btns).find(b => b.textContent.toLowerCase().replace(/\s+/g,'') === category || (category === 'all' && b.textContent.trim().toLowerCase() === 'all'));
      if (btn) btn.classList.add('active');
    }
  };

  // Mostrar todo al cargar
  document.addEventListener('DOMContentLoaded', function () {
    window.filterSelection('all');
  });
