const item = document.querySelectorAll('.holder');

window.addEventListener('DOMContentLoaded', (event) => {
  Array.from(item).forEach(function(e){
  const btn = e.querySelector('.ibtn');
  btn.addEventListener('click',function(){
    e.remove();
  })
})

});

const addit = document.querySelector('.summit');
addit.addEventListener('click',function(){
  let cont = document.querySelector('#hel').value;
  console.log(cont);
  let cod = `<li class="holder"><h5 class="iname">${cont}</h5><button class="ibtn">delete</button></li>`;
  console.log(cod);
  document.querySelector('.list').innerHTML += cod;
})
