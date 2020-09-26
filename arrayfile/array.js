var today = new Date();
/**
 * displays user table
 */
function displayUsers() {
  userCard = "";
  users = JSON.parse(localStorage.getItem("users"));
  if (users == null) {
    users = [];
  }

  for (i = 0; i < users.length; i++) {
    userCard += `
    <div class="card" id="${i}">
      <div class="card-img"><img src="${userCard[i].pics}" alt="Image of ${userCard[i].userName}" width="600" height="400"/></div>
      <div class="card-body">
        <h2> ${userCard[i].userName}</h2>
        <p>Email: ${userCard[i].email}</p>
        <p style="text-align: right" id="date">Added on: ${userCard[i].dateAdded}</p>
      </div>
      <div class="overlay">
        <button class="btn btn-edt" onclick="toggleEditProfile(${i})" onclick="editProfile()">Edit</button>
        <button class="btn btn-del" onclick="deleteProfile(${i})">
          Delete
        </button>
      </div>
      
    </div>
  `;
  }

  document.getElementById("users").innerHTML = userCard;
}

/**
 * adds new user to table
 */
function addNewUser() {
  let newUser = {
    fullName: document.getElementById("fullname").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    pics: document.getElementById("pics").value,
    dateAdded: `${today.toDateString()}`,
  };

  if (
    document.getElementById("index").value != "" ||
    newUser.fullName == "" ||
    newUser.email == "" ||
    newUser.phone == "" ||
    newUser.pics == ""
  ) {
    alert("Enter real values");
  } else {
    alert(`Welcome ${newUser.fullName}`);
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("index").value = "";
    document.getElementById("fullname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("pics").value = "";

    displayUsers();
  }
}

/**
 * deletes user from table
 * @param {string} id
 */
function deleteUser(id) {
  users = JSON.parse(localStorage.getItem("users"));
  users.splice(id, 1);
  localStorage.setItem("users", JSON.stringify(users));
  displayUsers();
}

/**
 * Edits user in table
 * @param {string} id
 */
function editUser(id) {
  users = JSON.parse(localStorage.getItem("users"));

  // assign values
  document.getElementById("index").value = id;
  document.getElementById("fullname").value = users[id].fullName;
  document.getElementById("email").value = users[id].email;
  document.getElementById("phone").value = users[id].phone;
  document.getElementById("pics").value = users[id].pics;
}

/**
 * updats already existing user
 */
function updateUser() {
  let userEditted = {
    fullName: document.getElementById("fullname").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    pics: document.getElementById("pics").value,
  };

  // check for valid input
  if (
    document.getElementById("index").value == "" ||
    userEditted.fullName == "" ||
    userEditted.email == "" ||
    userEditted.phone == "" ||
    userEditted.pics == ""
  ) {
    alert("Enter valid inputs");
  } else {
    users = JSON.parse(localStorage.getItem("users"));
    users[document.getElementById("index").value] = userEditted;
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("index").value = "";
    document.getElementById("fullname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("pics").value = "";

    displayUsers();
  }
}

// // with localstorage,

// delete item, delete all

addEventListener("DOMContentLoaded", displayUsers);
