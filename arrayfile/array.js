// prevent window reload
document
  .getElementById("submitUserForm")
  .addEventListener("click", function (e) {
    //prevent window reload
    e.preventDefault();
  });
// ends here

/**
 * variable definition
 */
var today = new Date();
var userName = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var image = document.getElementById("image");
// ends here

// defined user table
let userTable = [
  {
    fullName: "Maxwell Diogu",
    profilePic: "./me.jpg",
    email: "justtoday@gmail.com",
    phone: "+234816579824",
    dateAdded: `${today.toDateString()}`,
  },
];

// form controls start
// display form
var inputForm = document.getElementById("submitForm");
const toggleUser = () => {
  inputForm.style.display = "flex";
};
// close form
const cancelOps = () => {
  inputForm.style.display = "none";
};
// forms control ends

/**
 * display user cards
 */
const displayProfileCards = () => {
  var showUser = "";
  for (let i = 0; i < userTable.length; i++) {
    showUser = `
            <div class="card" id="${i}">
              <div class="card-img"><img src="${userTable[i].profilePic}" alt="Image of ${userTable[i].fullName}" width="600" height="400"/></div>
              <div class="card-body">
                <h2> ${userTable[i].fullName}</h2>
                <p>Email: ${userTable[i].email}</p>
                <p>Phone: ${userTable[i].phone}</p>
                <p style="text-align: right" id="date">Added on: ${userTable[i].dateAdded}</p>
              </div>
              <div class="overlay">
                <button class="btn btn-edt" onclick="editProfile(${i})">Edit</button>
                <button class="btn btn-del" onclick="deleteProfile(${i})">
                  Delete
                </button>
              </div>
              
            </div>
          `;
  }
  // output cards to browser
  document.getElementById("displayCard").innerHTML = showUser;
  console.log(userTable);
};

const editProfile = (id) => {
  userTable[id].fullName = userName.value;
  userTable[id].email = email.value;
  userTable[id].phone = phone.value;
  userTable[id].profilePic = image.value;

  let newUser = {
    fullName: userName.value,
    profilePic: `./${image.value}`,
    email: email.value,
    phone: phone.value,
    dateAdded: `${today.toDateString()}`,
  };

  userTable[id] = newUser;
  displayProfileCards();
};

const deleteProfile = (id) => {
  runCheck = confirm(`You are about to delete ${userTable[id].fullName}?`);
  if (runCheck) {
    userTable.splice(id, 1);
  }
  displayProfileCards();
};

const addProfile = () => {
  var newUser = {
    fullName: userName.value,
    profilePic: image.value,
    email: email.value,
    phone: phone.value,
    dateAdded: `${today.toDateString()}`,
  };
  alert(JSON.stringify(image));

  userTable.push(newUser);
  displayProfileCards();
};

// initial display
displayProfileCards();
