const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
}
window.onscroll = ()=>{
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}



document.addEventListener('DOMContentLoaded', function(){
  var app = document.getElementById('typewriter');

  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 100,
  });

  typewriter
    .pauseFor(750)
    .typeString('Every')
    .pauseFor(750)
    .deleteChars(5)
    .typeString('Thing')
    .pauseFor(750)
    .deleteChars(5)
    .typeString('You')
    .pauseFor(750)
    .deleteChars(3)
    .typeString('Desire')
    .pauseFor(750)
    .deleteChars(6)
    .typeString('& More')
    .pauseFor(750)
    .start();
});



const items = [
  {
    category: "Head",
    name: "Red Hat",
    price: "14.99",
    color: "Red",
    description: "A vibrant Red Hat to top off your look.",
    image: "./images/RedHat.png"
  },
  {
    category: "Shoes",
    name: "White Timbs",
    price: "89.99",
    color: "White",
    description: "Classic white Timberland boots for a stylish look.",
    image: "./images/WhiteTimbs.png"
  },
  {
    category: "Head",
    name: "Mexican Hat",
    price: "29.99",
    color: "Multicolored",
    description: "Authentic Mexican sombrero for a festive vibe.",
    image: "./images/MexicanHat.png"
  },
  {
    category: "Torso",
    name: "Blue Shirt",
    price: "24.99",
    color: "Blue",
    description: "Casual blue shirt for everyday wear.",
    image: "./images/BlueShirt.png"
  },
  {
    category: "Torso",
    name: "Red Sweater",
    price: "39.99",
    color: "Red",
    description: "A stylish Red Sweater to keep you warm.",
    image: "./images/RedSweater.png"
  },
  {
    category: "Head",
    name: "Blue Scarf",
    price: "19.99",
    color: "Blue",
    description: "A classic Blue Scarf to complete your look.",
    image: "./images/BlueScarf.png"
  },
  {
    category: "Legs",
    name: "Blue Shorts",
    price: "39.99",
    color: "Blue",
    description: "Comfortable blue shorts for everyday wear.",
    image: "./images/BlueShorts.png"
  },
  {
    category: "Shoes",
    name: "Brown Shoes",
    price: "19.99",
    color: "Brown",
    description: "Classic Brown Shoes for going all out.",
    image: "./images/BrownShoes.png"
  },
  {
    category: "Shoes",
    name: "Black Converse",
    price: "29.99",
    color: "Black",
    description: "Sleek Black Shoes for a sophisticated look.",
    image: "./images/BlackConverse.png"
  },
  {
    category: "Torso",
    name: "Grey Hoodie",
    price: "49.99",
    color: "Grey",
    description: "A comfortable Grey Hoodie for chilly days.",
    image: "./images/GreyHoodie.png"
  },
  {
    category: "Legs",
    name: "Grey Pants",
    price: "34.99",
    color: "Grey",
    description: "Stylish Grey Pants for any occasion.",
    image: "./images/GreyPants.png"
  },
  
  {
    category: "Torso",
    name: "Black T-shirt",
    price: "14.99",
    color: "Black",
    description: "Basic black t-shirt for versatile styling.",
    image: "./images/BlackTshirt.png"
  },
  {
    category: "Legs",
    name: "Classy Pants",
    price: "49.99",
    color: "Various",
    description: "Elegant trousers suitable for formal occasions.",
    image: "./images/ClassyPants.png"
  },
  {
    category: "Legs",
    name: "Military Shorts",
    price: "34.99",
    color: "Green",
    description: "Durable military-style shorts for outdoor activities.",
    image: "./images/MilitaryShorts.png"
  },
  {
    category: "Shoes",
    name: "Blue Shoes",
    price: "59.99",
    color: "Blue",
    description: "Stylish blue shoes for casual outings.",
    image: "./images/BlueShoes.png"
  },
  {
    category: "Head",
    name: "Blue Hat",
    price: "19.99",
    color: "Blue",
    description: "Classic blue hat to complement your look.",
    image: "./images/BlueHat.png"
  },
  {
    category: "Legs",
    name: "Brown Pants",
    price: "39.99",
    color: "Brown",
    description: "Stylish brown pants suitable for various occasions.",
    image: "./images/BrownPants.png"
  },
  {
    category: "Head",
    name: "Brown Hat",
    price: "19.99",
    color: "Brown",
    description: "Classic brown hat to add a touch of sophistication.",
    image: "./images/BrownHat.png"
  },
  {
    category: "Shoes",
    name: "Yellow Shoes",
    price: "49.99",
    color: "Yellow",
    description: "Vibrant yellow shoes to make a statement.",
    image: "./images/YellowShoes.png"
  },
  {
    category: "Torso",
    name: "Pink Hoodie",
    price: "34.99",
    color: "Pink",
    description: "Cozy pink hoodie for a stylish and comfortable look.",
    image: "./images/PinkHoodie.png"
  }

];
let selectedItemIndex = null;


function displayCards() {
  const cardsContainer = document.getElementById("cardsContainer");
  const catFilter = document.getElementById("catFilter").value;
  const searchInput = document.getElementById("searchInput").value.toLowerCase().trim();

  cardsContainer.innerHTML = "";
  
  items.forEach((item, index) => {
    if ((catFilter === "all" || item.category === catFilter) &&
        (searchInput === '' ||
        item.name.toLowerCase().includes(searchInput) ||    //be7al ken small 
        item.description.toLowerCase().includes(searchInput))) {
          const productCard = `
          <div class="card">
            <div class="imgBox">
              <img src="${item.image}" alt="${item.name}" class="Cloth">
            </div>
            <div class="contentBox">
              <h3 id="name">${item.name}</h3>
              <p id="category">${item.category}</p>
              <p id="price">${item.price}€</p>
              <p id="color">${item.color}</p>
              <p id="description">${item.description}</p>
              <div id="btn-con">
              <button class="delete" data-index="${index}">Delete</button>
              <button class="update" data-index="${index}">Update</button>
              </div>
            </div>
          </div>
        `;
      cardsContainer.innerHTML += productCard;
    }
  });

  deleteListener();
  updateListener();
}

function deleteListener() {
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach(button => {
    button.addEventListener('click', function () {
      const index = parseInt(this.dataset.index); //mne5od l index taba3a w mna3melo splice
      if (confirm('Are you sure you want to delete this item?')) {
        items.splice(index, 1);
        displayCards();
      }
    });
  });
}

function updateListener() {
  const updateButtons = document.querySelectorAll('.update');
  updateButtons.forEach(button => {
    button.addEventListener('click', function () {
      const index = parseInt(this.dataset.index);
      selectedItemIndex = index;
      const selectedItem = items[index];
      fillForm(selectedItem);
      
      // smooth scroll
      const formSection = document.getElementById('Add'); //esm l section
      formSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

document.querySelectorAll('.menu-list a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop,
         behavior: 'smooth' });
    }
  });
})


function fillForm(selectedItem) {
  document.getElementById("cat").value = selectedItem.category;
  document.getElementById("prodName").value = selectedItem.name;
  document.getElementById("prodPrice").value = selectedItem.price;
  document.getElementById("prodColor").value = selectedItem.color;
  document.getElementById("desc").value = selectedItem.description;
  document.getElementById("Img").value = selectedItem.image;
  showupdateBtn();
}

function showupdateBtn() {
  const addItemForm = document.getElementById("addItemForm");
  addItemForm.querySelector('button[type="submit"]').style.display = "none";
  document.getElementById("updateItemBtn").style.display = "block";
}

function submittingForm(event) {
  event.preventDefault();
  const newItem = getFormData();
  if (newItem) {
    if (selectedItemIndex === null) {
      items.push(newItem);
    } else {
      items[selectedItemIndex] = newItem;
      resetForm();
    }
    displayCards();
    document.getElementById("addItemForm").reset(); 
  }
}


function getFormData() {
  const category = document.getElementById("cat").value;
  const name = document.getElementById("prodName").value;
  const price = document.getElementById("prodPrice").value;
  const color = document.getElementById("prodColor").value;
  const description = document.getElementById("desc").value;
  const image = document.getElementById("Img").value;

  if (!validateForm(category, name, price, color, description, image)) return null;

  return { category, name, price, color, description, image };
}

function validateForm(category, name, price, color, description, image) {
  if (!category || !name || !price || !color || !description || !image) {
    alert("Please fill in all fields.");
    return false;
  }
  if (isNaN(parseFloat(price)) || parseFloat(price) < 0) {
    alert("Price must be a non-negative numeric value.");
    return false;
  }
  return true;
}

function resetForm() {
  const addItemForm = document.getElementById("addItemForm");
  addItemForm.reset();
  addItemForm.querySelector('button[type="submit"]').style.display = "block";
  document.getElementById("updateItemBtn").style.display = "none";
  selectedItemIndex = null;
}

document.addEventListener("DOMContentLoaded", function() {
  
  displayCards();

  document.getElementById("addItemForm").addEventListener("submit", submittingForm);
  document.getElementById("updateItemBtn").addEventListener("click", () => {
    document.getElementById("addItemForm").dispatchEvent(new Event('submit'));
  });

  document.getElementById("catFilter").addEventListener("change", displayCards);
  document.getElementById("searchInput").addEventListener("input", displayCards);

 

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const message = document.getElementById('messageInput').value.trim();
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    const feedback = `<div id="feedback">
                        <h2>${name}'s feedback</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong> ${message}</p>
                        
                        
                        </div>`;
    document.getElementById('output').innerHTML += feedback;
    document.getElementById('contactForm').reset();
  });

 
});

