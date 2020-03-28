
let ul = document.querySelector('.menu');
let li = document.querySelectorAll('.menu-item');
let ulTwo = document.querySelector('.menu-two');
let liTwo = document.querySelectorAll('.menu-two-item');
let imageBox = document.querySelector('.images');
let images = document.querySelectorAll('.image');
let phoneVertical = document.querySelector(".phone-vertical");
let layerVertical = document.querySelector(".layer-vertical");
let phoneHorizontal = document.querySelector(".phone-horizontal");
let layerHorizontal = document.querySelector(".layer-horizontal");
const btn = document.getElementById('btn');
const btnClose = document.getElementById('close-btn');

// Header
li.forEach(el => {
  el.addEventListener('click',()=>{
      ul.querySelector('.active').classList.remove('active');
      el.classList.add('active')
  });
});

//Portfolio. Взаимодействие с картинками
imageBox.addEventListener('click',(event) =>{
  images.forEach(el => el.classList.remove('img-border'));
  event.target.classList.add('img-border')
});

liTwo.forEach(el => {
  el.addEventListener('click',()=>{
      ulTwo.querySelector('.two').classList.remove('two');
      el.classList.add('two');

      /*let d = document.createDocumentFragment();
      d.appendChild(images[Math.floor(Math.random() * images.length)]);
      imageBox.appendChild(d);*/
      let divs = imageBox.children;
      let frag = document.createDocumentFragment();
      while (divs.length) {
        frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
    }
       imageBox.appendChild(frag);
  });
});

// Get a Quote
btn.addEventListener('click',() =>{
  const subject = document.getElementById('subject').value.toString();
  const description = document.getElementById('description').value.toString();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  if(subject == ''){
    document.getElementById('result').innerText = "Без темы";
    document.getElementById('message-block').classList.remove('hidden');
  }
  else{
    document.getElementById('result').innerText = subject;
    document.getElementById('message-block').classList.remove('hidden');
  }

  if(description == ''){
    document.getElementById('result-two').innerText = "Без темы";
    document.getElementById('message-block').classList.remove('hidden');
  }
  else{
    document.getElementById('result-two').innerText = subject;
    document.getElementById('message-block').classList.remove('hidden');
  }

  if(name == '' || email == ''){
    document.getElementById('message-block').classList.add('hidden');
  }
});

btnClose.addEventListener('click',() =>{
  document.getElementById('result').innerText = '';
  document.getElementById('message-block').classList.add('hidden');
  document.getElementById('form').reset();
});

// Phone Turn Off

phoneVertical.addEventListener('click',() => layerVertical.style.display = layerVertical.style.display!='block' ? 'block' : 'none');

phoneHorizontal.addEventListener('click',() => layerHorizontal.style.display = layerHorizontal.style.display!='block' ? 'block' : 'none');

 // Caroussel

var slideIndex = [1,1];
var slideId = ["slide"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
