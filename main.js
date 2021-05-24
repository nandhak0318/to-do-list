const todoFn = () => {
  const input = document.querySelector("#hel");

  const form = document.querySelector("form");

  const list = document.querySelector(".list");

  const obj = {
    input,
    form,
    list,
  };
  
  console.log('1')

  submitFn(obj);
  removeFn();
};
const submitFn = (obj) => {
  const { input, form } = obj;
  console.log('2')

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    input.value.trim() == ""
      ? window.alert("enter the value")
      : setTodo(input.value, obj);

    form.reset();
  });
};

const setTodo = (val, obj) => {
  const { list } = obj;
  const temp = `<li class="holder"><h5 class="iname">${val}</h5><button class="ibtn">delete</button></li>`;

  list.insertAdjacentHTML("afterbegin", temp);
console.log("3");
  removeFn();
};

const removeFn = () => {
  const close = document.querySelectorAll(".ibtn");
  console.log("4");
  close.forEach((c) => {
    c.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  });
};

window.addEventListener("DOMContentLoaded", todoFn); //1.main function
