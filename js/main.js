// 1
const name = prompt("Как вас зовут?", "");
let ugol = document.querySelector(".ugol");

localStorage.setItem("myKey", JSON.stringify(name));

if (name !== "" && name != null){
  ugol.textContent = name;
  alert("Привет, " + name);
}
else
  alert("Хотелось бы узнать ваше имя..");

// 2
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", square);

function square() {
  let height = document.querySelector("#height").value;
  let base = document.querySelector("#base").value;
  alert("Площадь треугольника равна = " + (height * base / 2));
}

// 3
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function (){
  let len1 = document.querySelector("#stroka1").value.length;
  let len2 = document.querySelector("#stroka2").value.length;
  alert(len1 === len2);
});

// 4
let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function (){
  let mas = document.querySelector("#massiv").value;
  let mas1 = [5];
  mas1 = mas.split(",");
  alert("Максимальное значение = " + Math.max.apply(null, mas1) + ", минимальное значние = " + Math.min.apply(null, mas1));
});

// 5
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let startDate;
let endDate;
function startTime() {
  startDate = new Date();
}
btn4.addEventListener("click", startTime);
btn5.addEventListener("click", function (){
  endDate = new Date();
  let hours = 0;
  let minutes = 0;
  let seconds = Math.floor ((endDate - startDate)/1000);
  if(seconds >= 60) {
    minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60 * 6);
  }
  if(minutes >= 60) {
    hours = Math.floor(minutes / 60);
    minutes = Math.floor(minutes % 60 * 6);
  }
  alert("Прошло - " + hours + ":" + minutes + ":" + seconds);
});

// 6
let counter = 0;
let trueQ = document.querySelectorAll(".true");
let falseQ = document.querySelectorAll(".false");
let btn6 = document.querySelector("#btn6");
trueQ.forEach(e => {
  e.addEventListener("click", function (){
    counter++;
  });
  btn6.addEventListener("click", function (){
    e.append("(Верно)");
  });
});
falseQ.forEach(e => {
  btn6.addEventListener("click", function (){
    e.append("(Неверно)");
  });
});
btn6.addEventListener("click", function (){
  alert("Правильных ответов - " + counter);
});

//7
let date = document.querySelector(".time");
let ima = document.querySelector(".name");
let click = document.querySelector(".loaded");
let btn7 = document.querySelector("#btn7");
date.append(new Date());
ima.append(localStorage.getItem("myKey"));
const startup = () => {
  document.querySelector("#btn7").addEventListener("click", () => {
    click.classList.remove("hidden");
  });
  document.querySelector('#btn7').addEventListener('click', (event) => {
      document.querySelector('.loaded').requestFullscreen();
      document.querySelector(".loaded").addEventListener("click", () => {
        document.exitFullscreen();
        click.classList.add("hidden");
      });
  });
}
window.onload = startup

//8
let btn8 = document.querySelector("#btn8");
btn8.addEventListener("click", function (){
  let mas = document.querySelector("#he").value;
  let mas1 = [5];
  mas1 = mas.split(",");
  var lgth = 0;
  let longest;

  for(var i=0; i < mas1.length; i++){
    if(mas1[i].length > lgth){
      var lgth = mas1[i].length;
      longest = mas1[i];
    }
  }

  alert(longest);
});

//9
let btn9 = document.querySelector("#btn9");
btn9.addEventListener("click", function () {
  let mas = document.querySelector("#heq").value;
  var expCounts = {};
  var maxKey = "";
  for (var i = 0; i < mas.length; i++) {
    var key = mas[i];
    if (!expCounts[key]) {
      expCounts[key] = 0;
    }
    expCounts[key]++;
    if (maxKey == '' || expCounts[key] > expCounts[maxKey]) {
      maxKey = key;
    }
  }
  alert(maxKey + ":" + expCounts[maxKey]);
});

//10
let txtB = document.getElementById("btn10")
txtB.addEventListener("click", function() {
  alert((document.getElementById("heqw").value.length === document.getElementById("heqwq").value.length).toString());
});






