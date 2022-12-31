const section = document.querySelector("section");
const header = section.querySelector(".header");

//Header Logo
const logoIcon = header.querySelector(".logo")

//Header Search
const searchBar = header.querySelector(".search__bar");
const inputForm = searchBar.querySelector("input");
const inputButton = searchBar.querySelector("button");

//Header User
const upperUser = header.querySelector(".upper__user");
const userName = upperUser.querySelector("h4");

//notification
const notification = header.querySelector(".notification");

//icons

const searchIcon = searchBar.querySelector("i");
searchIcon.className = "fa-solid fa-magnifying-glass";

const userIcon = upperUser.querySelector("i");
userIcon.className = "fa-solid fa-user";

const notifIcon = notification.querySelector("i");
notifIcon.className = "fa-sharp fa-solid fa-bell";


//event listeners
inputButton.addEventListener("click", displayFeed);

//event functions

function displayFeed(event){

    event.preventDefault();

    const addFeed = document.createElement("div");
    addFeed
}