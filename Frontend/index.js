API_BASE_URL = "http://localhost/Randitaire/Backend/";

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const logo = document.querySelector(".logo");
const icon = document.querySelector(".fa-bars");

menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
  this.scrollY > 20
    ? logo.classList.add("sticky-black")
    : logo.classList.remove("sticky-black");
  this.scrollY > 20
    ? icon.classList.add("sticky-black")
    : icon.classList.remove("sticky-black");
};

async function getUsers() {
  try {
    const url = API_BASE_URL + "getUsers.php";
    const response = await axios.get(url);
    const success = response.data.success;
    const data = response.data.data;
    // console.log(response.data);
    if (success) {
      console.log(data);
      showLeaderboard(data);
      showTopThree(data.slice(0, 3));
    } else {
      console.log(response.data.error);
    }
  } catch (error) {
    console.log("Error in getting users!", error);
  }
}

function showLeaderboard(users) {
  const tableBody = document.querySelector("#Leaderboard-page tbody");
  if (!tableBody) return; //eza kona bi HomePage
  tableBody.innerHTML = "";

  users.forEach((user, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${i + 1}.</td>
      <td>${user.full_name}</td>
      <td>${user.score}</td>
      <td>${user.time}</td>
    `;
    tableBody.appendChild(row);
  });
}

function showTopThree(users) {
  const rightSide = document.querySelector("#right-side");
  if (!rightSide) return; //eza kona be Leaderboard
  rightSide.innerHTML = "";

  const badges = [
    "./images/gold-removebg-preview.png",
    "./images/silver-removebg-preview.png",
    "./images/bronze-removebg-preview.png",
  ];

  users.forEach((user, index) => {
    const card = document.createElement("div");
    card.className = "leaderboard-card";
    card.innerHTML = `
      <img src="${badges[index]}" alt="${user.full_name} badge" class="badge" />
      <div class="info">
        <h3>${index + 1}. ${user.full_name}</h3>
        <p>Score: ${user.score}</p>
        <p>Time: ${user.time}</p>
      </div>
    `;
    rightSide.appendChild(card);
  });
}

async function addUser(full_name) {
  try {
    const url = API_BASE_URL + "addUsers.php";
    const response = await axios.post(url, { full_name });
    const success = response.data.success;
    if (success) {
      console.log("User added");
      getUsers();
    } else {
      console.log("Error adding user:", response.data.error);
      alert("Error adding user, make sure it contains only letters");
    }
  } catch (error) {
    console.log("Error in adding user!", error);
    alert("Error adding user, make sure it contains only letters");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.querySelector(
    "#Leaderboard-page .add-name-form button"
  );
  const nameInput = document.querySelector(
    "#Leaderboard-page .add-name-form input[name='name']"
  );
  if (submitBtn && nameInput) {
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const name = nameInput.value.trim();
      if (name) {
        addUser(name);
        nameInput.value = "";
      } else {
        alert("Please enter a name");
      }
    });
  }
});

getUsers();
