let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// //Renders toys
// function renderToy(toy) {
//   //Builds div w/ card class
//   const card = document.createElement('div')
//   card.className = 'card'

//   //Assigns toy-collection dive to variable
//   const toyCollection = document.querySelector('#toy-collection')

//   //builds toy div
//   const toyH2 = document.createElement('h2')
//   toyH2.textContent = toy.name
//   const toyImg = document.createElement('img')
//   toyImg.src = toy.image
//   toyImg.className = 'toy-avatar'
//   const toyLikeCount = document.createElement('p')
//   toyLikeCount.textContent = `${toy.likes} Likes`
//   const toyButton = document.createElement('button')
//   toyButton.className = 'like-btn'
//   toyButton.id = toy.id
//   toyButton.textContent = 'Like ❤️'

//   //appends toy div to 'card' class div
//   card.appendChild(toyH2)
//   card.appendChild(toyImg)
//   card.appendChild(toyLikeCount)
//   card.appendChild(toyButton)

//   //appends 'card' class div to toy collection div
//   toyCollection.appendChild(card)
// }

// //event listeners
// const toyForm = document.querySelector('form')
// toyForm.addEventListener('sumbit', handleSubmit)

// //submit handler
// function handleSubmit(e) {
//   e.preventDefault()
//   const name = document.querySelector('#name').value;
//   const image = document.querySelector('#image').value;
//   const toy = {
//     name,
//     image,
//     likes: 0
//   }
//   renderToy(toy)
//   addNewToy(toy)
// }

// //fetch request
// //GET fetchs all toy objects; runs and renders them to dom
// function getAllToys() {
//   fetch('http://localhost:3000/toys')
//     .then(function (res) {
//       return res.json()
//     })
//     .then(function (data) {
//       data.forEach(toy => {
//         renderToy(toy)
//       });
//     })
// }

// //fetch to post (function that passes in obj form)
// function addNewToy(toy) {
//   return fetch('http://localhost:3000/toys', {
//     method: 'POST',
//     headers:
//     {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },

//     body: JSON.stringify(toy)

//   })
//   .then(function (res) {
//     return res.json()
//   })
//   .then(function (object) {
//     console.log(object);
//   })
// }

// //initalizer
// function initalizer() {
//   getAllToys()
// }

// initalizer()

//Fetch Any's Toys
//Fetches all toy objects and forEach's 'card' class to toys.
//passes through rinder toy to add info
function getAllToys() {
  fetch('http://localhost:3000/toys')
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      data.forEach(toy => {
        renderToy(toy)
      });
    })
}

getAllToys()

//Renders toys
//Adds toy info to each div
function renderToy(toy) {
  //Builds div w/ card class
  const card = document.createElement('div')
  card.className = 'card'

  //Assigns toy-collection dive to variable
  const toyCollection = document.querySelector('#toy-collection')

  //builds toy div
  const toyH2 = document.createElement('h2')
  toyH2.textContent = toy.name
  const toyImg = document.createElement('img')
  toyImg.src = toy.image
  toyImg.className = 'toy-avatar'
  const toyLikeCount = document.createElement('p')
  toyLikeCount.textContent = `${toy.likes} Likes`
  const toyButton = document.createElement('button')
  toyButton.className = 'like-btn'
  toyButton.id = toy.id
  toyButton.textContent = 'Like ❤️'

  //appends toy div to 'card' class div
  card.appendChild(toyH2)
  card.appendChild(toyImg)
  card.appendChild(toyLikeCount)
  card.appendChild(toyButton)

  //appends 'card' class div to toy collection div
  toyCollection.appendChild(card)
}

//event listeners
//submits toy form
const toyForm = document.querySelector('form')
toyForm.addEventListener('sumbit', function(e){
  e.preventDefault()
  handleSubmit(e)
  

})

//fetch to post (function that passes in obj form)
function addNewToy(toy) {
  return fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers:
    {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },

    body: JSON.stringify(toy)

  })
    .then(function (res) {
      return res.json()
    })
    .then(function (object) {
      console.log(object);
    })
}

//submit handler
function handleSubmit(e) {
  e.preventDefault()
  const name = document.querySelector('#name').value;
  const image = document.querySelector('#image').value;
  const toy = {
    name,
    image,
    likes: 0
  }
  renderToy(toy)
  addNewToy(toy)
}