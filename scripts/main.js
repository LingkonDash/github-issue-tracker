// Variables 
const btnContainer = document.getElementById('btn-container');


async function allIssues() {
  const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues'
  const res = await fetch(url);
  const json = await res.json();

  dataToElment(json.data);

}
allIssues();

function dataToElment(data) {

  const parentDiv = document.getElementById('parent-Div');
  // parentDiv.innerHTML = ''

  data.forEach(obj => {

    console.log(obj);

    const div = document.createElement('div');
    div.className = 'border-t-5 border-green-border rounded-lg shadow-lg max-w-[350px]'
    div.innerHTML = `
          <div class="border-b-2 border-[#cccccf] p-6 space-y-4 rounded-t-lg">
            <div class="flex justify-between items-center">
              <img src="assets/Open-Status.png" alt="open status">
              <div class="badge badge-soft badge-error rounded-full uppercase w-22">
                High</div>
            </div>
            <div class="space-y-2">
              <h2 class="font-semibold text-primary-text ">${obj.title}</h2>
              <p class="text-secondary-text text-xs line-clamp-2">${obj.description}</p>
            </div>
            <div class="flex flex-wrap justify-start items-center gap-2">
              <div class="badge badge-outline badge-error rounded-full bg-soft-red uppercase"><i class="fa-solid fa-bug"></i>Bug</div>
              <div class="badge badge-outline badge-warning rounded-full bg-soft-yellow uppercase"><i class="fa-solid fa-dharmachakra"></i>help wanted</div>
            </div>
          </div>
          <div class="p-6 space-y-2 text-secondary-text text-xs">
            <p>#1 by john_doe</p>
            <p>1/15/2024</p>
          </div>

    `
    parentDiv.appendChild(div);

  });

}


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