// Variables 
const btnContainer = document.getElementById('btn-container');



// Issue Loader on button click
function issueLoader(id) {

  // button active routing update
  btnContainer.querySelector('#all-btn').classList.remove('btn-primary');
  btnContainer.querySelector('#open-btn').classList.remove('btn-primary');
  btnContainer.querySelector('#closed-btn').classList.remove('btn-primary');

  btnContainer.querySelector(`#${id}`).classList.add('btn-primary')


}



function dropdownMenu() {

  const menu = document.getElementById('dropdown-Menu')

  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden')
    menu.classList.add('flex')
  } else {
    menu.classList.remove('flex')
    menu.classList.add('hidden')
  }

}