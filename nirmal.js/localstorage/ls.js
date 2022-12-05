//        how to store value in localstorage and remove also

const ipkey = document.getElementById("key");

const ipvalue = document.getElementById("value");

const btn = document.getElementById("save");

const remove = document.getElementById("delete");

// const display = document.getElementById("display");

const ls_list = document.getElementById("ls-list");

btn.onclick = () => {
  if (ipkey && ipvalue) {
    localStorage.setItem(ipkey.value, ipvalue.value);

    location.reload();
  }
};

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);

  const value = localStorage.getItem(key);

  ls_list.innerHTML += `${key}  :  ${value}<br>`;
}

remove.onclick = () => {
  for (let i = 0; i < localStorage.length; i++) {
    if (i == localStorage.length - 1) {
      const key = localStorage.key(i);

      localStorage.removeItem(key);

      location.reload();
    }
  }
};

// display.onclick = () => {
//   ls_list.innerHTML = `${ipkey.value}  :  ${ipvalue.value}`;

//   // ls_list.textContent = localStorage.getItem(ipkey.value);
// };
