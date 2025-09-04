document.addEventListener('DOMContentLoaded', function () {
  // --------------- helpers ----------------
  window.filterSelection = function(category) {
    const items = Array.from(document.querySelectorAll('.projects__row.filterItems, .filterItems'));
    // normalize category
    const cat = (category === 'all' || category === '') ? '' : category.trim();

    items.forEach(item => {
      // si category vacío -> mostrar todo
      if (!cat) {
        // usar flex porque Dopefolio usa layout en fila
        item.style.display = 'flex';
      } else {
        if (item.classList.contains(cat)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      }
    });
  };

  // Botones: .projects__filters y botones .skills__skill
  const container = document.querySelector('.projects__filters');
  if (container) {
    const btns = Array.from(container.querySelectorAll('.skills__skill'));

    // click: agregar clase active (visual)
    btns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        btns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Si usas inline onclick="filterSelection('python')", ignora esta línea.
        // Pero por si no lo usas: inferir categoría desde texto del botón:
        // const inferred = this.textContent.trim().toLowerCase().replace(/\s+/g,'');
        // window.filterSelection(inferred);
      });
    });
  }

  // Mostrar todos al inicio
  window.filterSelection('all');

  // DEBUG logs — borra si quieres
  console.log('Filter initialized. Items:', document.querySelectorAll('.filterItems').length,
              'Buttons:', container ? container.querySelectorAll('.skills__skill').length : 0);
});
