document.addEventListener("DOMContentLoaded", function () {
  let counter = 1;
  function createItem() {
    let todoText = document.getElementById("todo");
    const value = todoText.value.trim();

    if (value === "") {
      todoText.value = "Unesite nesto !!!";
      setTimeout(function () {
        todoText.value = "";
      }, 1000);
    } else {
      const li = document.createElement("li");
      li.style.backgroundColor =
        counter % 2 === 0 ? "rgb(145, 67, 145)" : "rgb(66, 10, 66)";
      li.style.display = "flex"; // Omogućuje prikaz elementa
      li.innerHTML = `<span class="counter">${counter}</span><p>${value}</p>
                     <div class="buttons-container">
                       <button class="btn-delete">Delete</button>
                       <button class="btn-update">Update</button>
                     </div>`;

      // Dodavanje novog li elementa u ul
      document.getElementById("container-body").appendChild(li);
      // Resetiranje input polja
      todoText.value = "";
      counter++;
      li.querySelector(".btn-delete").addEventListener("click", deleteLi);
      li.querySelector(".btn-update").addEventListener("click", updateLi);
    }
  }

  function deleteLi() {
    this.parentNode.parentNode.remove();
  }

  function updateLi() {
    let currentTaskText = this.parentNode.previousElementSibling.textContent;
    let input = prompt(currentTaskText);
    this.parentNode.previousElementSibling.textContent = input;
  }

  document.getElementById("createTodo").addEventListener("click", createItem);
});
