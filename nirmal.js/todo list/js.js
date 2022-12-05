let form = document.querySelector(".new-task-form");

let input = document.querySelector(".new-task-input");

let btn1 = document.querySelector(".new-task-submit");

let span = document.querySelector("span");

let lists = document.querySelector(".task-list");

btn1.addEventListener("click", (e) => {
  e.preventDefault();

  let data = input.value;

  if (!data) {
    span.innerHTML = " * Please fill out the Task";

    span.style.color = "red";

    lists.removeChild(tasks);
  } else {
    span.innerHTML = "";
  }

  let tasks = document.createElement("div");

  tasks.classList.add("tasks");

  let content = document.createElement("div");

  content.classList.add("content");

  let actions = document.createElement("div");

  actions.classList.add("actions");

  tasks.appendChild(content);

  tasks.appendChild(actions);

  lists.appendChild(tasks);

  let listInput = document.createElement("input");

  listInput.setAttribute("readonly", "");

  content.appendChild(listInput);

  listInput.setAttribute("type", "text");

  listInput.value = data;

  listInput.style.textTransform = "capitalize";

  //    Edit btn

  let btn2 = document.createElement("button");

  btn2.classList.add("edit");

  btn2.textContent = "Edit"; //            same as btn2.innerHTML

  actions.appendChild(btn2);

  //    Delete btn

  let btn3 = document.createElement("button");

  btn3.classList.add("delete");

  btn3.textContent = "Delete"; //            same as btn3innerHTML

  actions.appendChild(btn3);

  input.value = "";

  //  edit the data in listinput

  btn2.onclick = (e) => {
    listInput.style.color = "blue";

    //     after edit the data in listinput

    if (btn2.innerText == "SAVE" && listInput.value.length == 0) {
      lists.removeChild(tasks);
    }

    if (btn2.innerText == "EDIT") {
      listInput.removeAttribute("readonly", "");

      btn2.innerText = "Save";
    } else {
      listInput.setAttribute("readonly", "");

      btn2.innerText = "Edit";

      listInput.style.color = "black";
    }
  };

  //       delete the lists........

  btn3.onclick = (e) => {
    lists.removeChild(tasks);
  };
});
