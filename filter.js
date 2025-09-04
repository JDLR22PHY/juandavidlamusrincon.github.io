// Buscar botones en el contenedor correcto
let sortOptions = document.querySelector('.projects__filters')
let btns = sortOptions.getElementsByClassName('skills__skill')

function filterSelection(str) {
  let items = document.getElementsByClassName('filterItems')

  if (str == "all") { str = "" }

  Array.from(items).forEach(item => {
    removeClass(item, 'show')
    if (item.className.indexOf(str) > -1) {
      addClass(item, 'show')
    }
  })
}

function addClass(element, name) {
  let itemClass = element.className.split(' ')
  let itemName = name.split(' ')

  for (let i = 0; i < itemName.length; i++) {
    if (itemClass.indexOf(itemName[i]) == -1) {
      element.className += " " + itemName[i]
    }
  }
}

function removeClass(element, name) {
  let itemClass = element.className.split(' ')
  let itemName = name.split(' ')

  for (let i = 0; i < itemName.length; i++) {
    while (itemClass.indexOf(itemName[i]) > -1) {
      itemClass.splice(itemClass.indexOf(itemName[i]), 1)
    }
  }
  element.className = itemClass.join(" ")
}

// Agregar clase activa al botón seleccionado
Array.from(btns).forEach((btn) => {
  btn.addEventListener('click', function() {
    let current = document.getElementsByClassName('active')
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '')
    }
    this.className += ' active'
  })
})

// Mostrar todos al cargar
filterSelection("all")
