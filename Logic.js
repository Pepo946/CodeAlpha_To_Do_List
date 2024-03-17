const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
  if (inputbox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    inputbox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    tacke(); // Save task to localStorage after adding
  }
}

listcontainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    tacke();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    tacke();
  }
});

function tacke() {
  localStorage.setItem("date", listcontainer.innerHTML); // Corrected innerHTML
}

function show() {
  listcontainer.innerHTML = localStorage.getItem("date"); // Corrected innerHTML
}

show();
