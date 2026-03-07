function dropdownMenu() {
  
  const menu = document.getElementById('dropdown-Menu')

  if(menu.classList.contains('hidden')) {
    menu.classList.remove('hidden')
    menu.classList.add('flex')
  } else {
    menu.classList.remove('flex')
    menu.classList.add('hidden')
  }
  
}