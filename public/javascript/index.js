const charactersAPI = new APIHandler("http://localhost:8000");
const charactersContainer = document.querySelector(".characters-container");
const characterId = document.getElementsByName("character-id")[0].value;
const characterIdDelete = document.getElementsByName("character-id-delete")[0]
  .value;

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((result) => {
          let fullList = "";
          result.data.forEach((character) => {
            fullList += `<div class="character-info">
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
        </div>`;
          });
          charactersContainer.innerHTML = fullList;
        })
        .catch((error) => console.log(error.message));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      charactersAPI
        .getOneRegister(characterId)
        .then((result) => {
          let character = result.data;
          let fetchOne = `<div class="character-info">
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
        </div>`;
          charactersContainer.innerHTML = fetchOne;
        })
        .catch((error) => console.log(error.message));
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      charactersAPI
        .deleteOneRegister(characterIdDelete)
        .then(() => {
          document.getElementById("delete-one").style.backgroundColor = "green";
        })
        .catch((error) => {
          console.log(error.message);
          document.getElementById("delete-one").style.backgroundColor = "red";
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      charactersAPI
        .updateOneRegister()
        .then(() => {
          document.getElementById(
            "edit-character-form button"
          ).style.backgroundColor = "green";
        })
        .catch((error) => {
          console.log(error.message);
          document.getElementById(
            "edit-character-form button"
          ).style.backgroundColor = "red";
        });
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      charactersAPI
        .createOneRegister()
        .then(() => {
          document.getElementById(
            "new-character-form button"
          ).style.backgroundColor = "green";
        })
        .catch((error) => {
          console.log(error.message);
          document.getElementById(
            "new-character-form button"
          ).style.backgroundColor = "red";
        });
    });
});
