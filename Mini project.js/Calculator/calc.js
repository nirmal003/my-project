let output = document.getElementById("output");

let answer = document.getElementById("answer");

let button = Array.from(document.getElementsByClassName("green1"));

button.map((value) => {
  value.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "( )":
        var n = output.value.length;

        var num = new RegExp("^[0-9]$");

        var res = parseInt(output.value[n - 1]);

        if (num.test(res)) {
          output.value += ")";
        } else {
          output.value += "(";
        }
        break;
      // case ")":
      //   {
      //     output.value += ")";
      //   }
      //   break;
      // // default:
      // output.innerText += e.target.innerText;
    }
  });
});

function display(num) {
  output.value += num;
}

function calculate() {
  try {
    return (answer.value = eval(output.value));
  } catch (err) {
    alert("Invalid input");
  }
}

function percentage(num) {
  if (output.value.length) {
    output.value += num;
    answer.value = output.value.slice(0, -1) * 0.01;
  }

  // for (let i = 0; i < output.value.length; i++) {
  //   if (i == "%") {
  //     output.value = output.value / 100;
  //     // calculate();
  //   }
  // }
  //   else {
  //     alert("Invalid input");
  // }
}

function cancel() {
  output.value = "";
  answer.value = "";

  //   return (output.value = output.value.slice(1, 1));
}

function del() {
  output.value = output.value.slice(0, -1);

  // answer.value = eval(output.value);
  recal();
}

function recal() {
  if (output.value.length > 0) {
    answer.value = eval(output.value);
  } else {
    answer.value = "";
  }
}
