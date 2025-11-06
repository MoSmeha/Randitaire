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

document.addEventListener("DOMContentLoaded", function () {
  var app = document.getElementById("typewriter");

  if (app) {
    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 100,
    });

    typewriter
      .pauseFor(750)
      .typeString("Every")
      .pauseFor(750)
      .deleteChars(5)
      .typeString("Thing")
      .pauseFor(750)
      .deleteChars(5)
      .typeString("You")
      .pauseFor(750)
      .deleteChars(3)
      .typeString("Desire")
      .pauseFor(750)
      .deleteChars(6)
      .typeString("& More")
      .pauseFor(750)
      .start();
  }
});

async function getUsers() {
  try {
    const url = API_BASE_URL + "getUsers.php";
    const response = await axios.get(url);
    const success = response.data.success;
    const data = response.data.data;
    // console.log(response.data);
    if (success) {
      console.log(data);
      renderLeaderboard(data);
    } else {
      console.log(response.data.error);
    }
  } catch {
    console.log("Error in getting users!");
  }
}

function renderLeaderboard(users) {
  const tableBody = document.querySelector("#Leaderboard-page tbody");
  tableBody.innerHTML = users.map(
    (user, i) => `
        <tr>
          <td>${i + 1}.</td>
          <td>${user.full_name}</td>
          <td>${user.score}</td>
          <td>${user.time}</td>
        </tr>
      `
  );
  //implemetn no users scenario
}

getUsers();
