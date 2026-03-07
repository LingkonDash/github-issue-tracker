// Variables 
const btnContainer = document.getElementById('btn-container');
const parentDiv = document.getElementById('parent-Div');

const loader = document.getElementById('loader');
const mainSection = document.getElementById('mainSection')

const totalIssues = document.getElementById('total-issues');
let openIssues = [];
let closeIssues = [];

showLoadng();

// fetching all issues 
async function allIssues() {

  showLoadng();

  const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues'
  const res = await fetch(url);
  const json = await res.json();

  dataToElment(json.data);

  hideLoadng();

}

allIssues();

// Issue Loader on button click
function issueLoader(id) {

  // button active routing update
  btnContainer.querySelector('#all-btn').classList.remove('btn-primary');
  btnContainer.querySelector('#open-btn').classList.remove('btn-primary');
  btnContainer.querySelector('#closed-btn').classList.remove('btn-primary');

  btnContainer.querySelector(`#${id}`).classList.add('btn-primary')

  if (id === 'all-btn') allIssues();
  if (id === 'open-btn') openIssuesToElement();
  if (id === 'closed-btn') closedIssuesToElement();
}

// converting json array objects to element 
function dataToElment(data) {



  totalIssues.innerText = data.length;

  parentDiv.innerHTML = ''

  openIssues = []
  closeIssues = []

  data.forEach(obj => {

    if (obj.status === 'open') openIssues.push(obj);
    else closeIssues.push(obj);


    const div = document.createElement('div');
    div.className = `border-t-5 border-${obj.status === 'open' ? 'green-border' : 'purple-border'} rounded-lg shadow-lg max-w-[350px]`
    div.innerHTML = `
          <div class="border-b-2 border-[#cccccf] p-6 space-y-4 rounded-t-lg">
            <div class="flex justify-between items-center">
              <img src="${obj.status === 'open' ? 'assets/Open-Status.png' : 'assets/Closed-Status.png'}" alt="${obj.status} status">
              <div class="${obj.priority === 'high' ? 'badge badge-soft badge-error' : obj.priority === 'medium' ? 'badge badge-soft badge-warning' : 'badge badge-ghost'} rounded-full uppercase w-22">${obj.priority}</div>
            </div>
            <div class="space-y-2">
              <h2 class="font-semibold text-primary-text ">${obj.title}</h2>
              <p class="text-secondary-text text-xs line-clamp-2">${obj.description}</p>
            </div>
            <div class="flex flex-wrap justify-start items-center gap-2">
              <div class="${obj.labels[0] === 'enhancement' ? 'badge badge-outline badge-accent bg-soft-green' : obj.labels[0] === 'bug' ? 'badge badge-outline badge-error bg-soft-red' : obj.labels[0] === 'documentation' ? 'badge badge-outline badge-info bg-soft-blue' : obj.labels[0] === 'good first issue' ? 'badge badge-outline badge-primary bg-soft-blue' : 'badge badge-outline badge-warning bg-soft-yellow'} rounded-full uppercase text-xs px-2 py-0">${obj.labels[0]}</div>
              ${obj.labels[1] ? `<div class="${obj.labels[1] === 'enhancement' ? 'badge badge-outline badge-accent bg-soft-green' : obj.labels[1] === 'bug' ? 'badge badge-outline badge-error bg-soft-red' : obj.labels[1] === 'documentation' ? 'badge badge-outline badge-info bg-soft-blue' : obj.labels[1] === 'good first issue' ? 'badge badge-outline badge-primary bg-soft-primary' : 'badge badge-outline badge-warning bg-soft-yellow'} rounded-full uppercase text-xs px-2 py-0">${obj.labels[1]}</div>` : ''}
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

// Loading open issues data 
function openIssuesToElement() {

  showLoadng();

  totalIssues.innerText = openIssues.length;

  parentDiv.innerHTML = '';

  openIssues.forEach(obj => {


    const div = document.createElement('div');
    div.className = `border-t-5 border-green-border rounded-lg shadow-lg max-w-[350px]`
    div.innerHTML = `
          <div class="border-b-2 border-[#cccccf] p-6 space-y-4 rounded-t-lg">
            <div class="flex justify-between items-center">
              <img src="assets/Open-Status.png" alt="Open status">
              <div class="${obj.priority === 'high' ? 'badge badge-soft badge-error' : obj.priority === 'medium' ? 'badge badge-soft badge-warning' : 'badge badge-ghost'} rounded-full uppercase w-22">${obj.priority}</div>
            </div>
            <div class="space-y-2">
              <h2 class="font-semibold text-primary-text ">${obj.title}</h2>
              <p class="text-secondary-text text-xs line-clamp-2">${obj.description}</p>
            </div>
            <div class="flex flex-wrap justify-start items-center gap-2">
              <div class="${obj.labels[0] === 'enhancement' ? 'badge badge-outline badge-accent bg-soft-green' : obj.labels[0] === 'bug' ? 'badge badge-outline badge-error bg-soft-red' : obj.labels[0] === 'documentation' ? 'badge badge-outline badge-info bg-soft-blue' : obj.labels[0] === 'good first issue' ? 'badge badge-outline badge-primary bg-soft-blue' : 'badge badge-outline badge-warning bg-soft-yellow'} rounded-full uppercase text-xs px-2 py-0">${obj.labels[0]}</div>
              ${obj.labels[1] ? `<div class="${obj.labels[1] === 'enhancement' ? 'badge badge-outline badge-accent bg-soft-green' : obj.labels[1] === 'bug' ? 'badge badge-outline badge-error bg-soft-red' : obj.labels[1] === 'documentation' ? 'badge badge-outline badge-info bg-soft-blue' : obj.labels[1] === 'good first issue' ? 'badge badge-outline badge-primary bg-soft-primary' : 'badge badge-outline badge-warning bg-soft-yellow'} rounded-full uppercase text-xs px-2 py-0">${obj.labels[1]}</div>` : ''}
            </div>
          </div>
          <div class="p-6 space-y-2 text-secondary-text text-xs">
            <p>#1 by john_doe</p>
            <p>1/15/2024</p>
          </div>

    `
    parentDiv.appendChild(div);

  });

  hideLoadng();
}
// Loading closed issues data 
function closedIssuesToElement() {

  showLoadng();

  totalIssues.innerText = closeIssues.length;

  parentDiv.innerHTML = '';

  closeIssues.forEach(obj => {


    const div = document.createElement('div');
    div.className = `border-t-5 border-purple-border rounded-lg shadow-lg max-w-[350px]`
    div.innerHTML = `
          <div class="border-b-2 border-[#cccccf] p-6 space-y-4 rounded-t-lg">
            <div class="flex justify-between items-center">
              <img src="assets/Closed-Status.png" alt="Closed status">
              <div class="${obj.priority === 'high' ? 'badge badge-soft badge-error' : obj.priority === 'medium' ? 'badge badge-soft badge-warning' : 'badge badge-ghost'} rounded-full uppercase w-22">${obj.priority}</div>
            </div>
            <div class="space-y-2">
              <h2 class="font-semibold text-primary-text ">${obj.title}</h2>
              <p class="text-secondary-text text-xs line-clamp-2">${obj.description}</p>
            </div>
            <div class="flex flex-wrap justify-start items-center gap-2">
              <div class="${obj.labels[0] === 'enhancement' ? 'badge badge-outline badge-accent bg-soft-green' : obj.labels[0] === 'bug' ? 'badge badge-outline badge-error bg-soft-red' : obj.labels[0] === 'documentation' ? 'badge badge-outline badge-info bg-soft-blue' : obj.labels[0] === 'good first issue' ? 'badge badge-outline badge-primary bg-soft-blue' : 'badge badge-outline badge-warning bg-soft-yellow'} rounded-full uppercase text-xs px-2 py-0">${obj.labels[0]}</div>
              ${obj.labels[1] ? `<div class="${obj.labels[1] === 'enhancement' ? 'badge badge-outline badge-accent bg-soft-green' : obj.labels[1] === 'bug' ? 'badge badge-outline badge-error bg-soft-red' : obj.labels[1] === 'documentation' ? 'badge badge-outline badge-info bg-soft-blue' : obj.labels[1] === 'good first issue' ? 'badge badge-outline badge-primary bg-soft-primary' : 'badge badge-outline badge-warning bg-soft-yellow'} rounded-full uppercase text-xs px-2 py-0">${obj.labels[1]}</div>` : ''}
            </div>
          </div>
          <div class="p-6 space-y-2 text-secondary-text text-xs">
            <p>#1 by john_doe</p>
            <p>1/15/2024</p>
          </div>

    `
    parentDiv.appendChild(div);

  });

  hideLoadng();
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

function showLoadng() {
  loader.classList.add('flex')
  loader.classList.remove('hidden')
  
  mainSection.classList.add('hidden')
}
function hideLoadng() {
  mainSection.classList.remove('hidden')

  loader.classList.add('hidden')
  loader.classList.remove('flex')

}