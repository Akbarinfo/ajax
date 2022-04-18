let elListBox = document.querySelector("#listbox")

window.addEventListener('load', (e) => {
  let xmlData = new XMLHttpRequest();

  xmlData.open('get', 'https://reqres.in/api/users');

  xmlData.onload = function() {
    let xmlResult = JSON.parse(xmlData.responseText);
    funLoad(xmlResult)

    let elBtn = document.querySelectorAll('.ajax__btn')
    funBtn(elBtn)
  }
  xmlData.send()
})

function funLoad(el) {
  el.data.forEach((item) => {
    let li = document.createElement('li');
    li.className = 'ajax__itembox col-7 col-sm-6 col-md-6 col-lg-4 col-xl-4'

    li.innerHTML = `
    <div class="ajax__item">
    <div class="ajax__boxs d-flex align-items-center">
      <div class="ajax__avabox">
        <img class="ajax__avatar" src="${item.avatar}" alt="avatar">
      </div>
      <div class="ajax__box d-flex flex-column">
        <h2 class="ajax__login">${item.last_name}</h2>
        <h3 class="ajax__name">${item.first_name} ${item.last_name}</h3>
      </div>
    </div>

    <div class="ajax__infobox d-flex justify-content-between">
      <p class="ajax__type">Companya</p>
      <p class="ajax__info">Romeagures-crone</p>
    </div>
    <div class="ajax__infobox d-flex justify-content-between">
      <p class="ajax__type">Email</p>
      <p class="ajax__info">${item.email}</p>
    </div>
    <div class="ajax__infobox d-flex justify-content-between">
      <p class="ajax__type">Phone</p>
      <p class="ajax__info">1781211651231</p>
    </div>

    <div class="ajax__infobox d-flex justify-content-between">
      <p class="ajax__type">Website</p>
      <p class="ajax__info">crone.com</p>
    </div>

    <button class="ajax__btn">Remove User</button>
  </div>
    `

    elListBox.appendChild(li)
  })
}

function funBtn(element) {
  console.log(element)
  element.forEach((items) => {
    items.addEventListener('click', (e) => {
      let li = e.path[2]
       li.remove()
    })
  })
}